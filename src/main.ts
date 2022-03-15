import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const port = configService.get('port');

  app.enableCors({
    origin: '*',
  });
  app.use(helmet());

  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  if (configService.get('environment') === 'develop') {
    const options = new DocumentBuilder()
      .addBearerAuth()
      .setTitle('API')
      .setDescription('End Points del API')
      .setVersion('1.0')
      .addTag('Service')
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('docs', app, document);
  }
  await app.startAllMicroservices();
  await app.listen(port, () => {
    Logger.log(`SERVICE IS RUNNING ON http://localhost:${port}`);
  });
}
bootstrap();
