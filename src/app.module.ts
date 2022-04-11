import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { InvestmentTypesModule } from './modules/investment-types/investment-types.module';
import { InvestmentsModule } from './modules/investments/investments.module';
import { InvestmentGeneralInfoModule } from './modules/investment-general-info/investment-general-info.module';
import { InvestmentFeeInfoModule } from './modules/investment-fee-info/investment-fee-info.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    DatabaseModule,
    InvestmentTypesModule,
    InvestmentsModule,
    InvestmentGeneralInfoModule,
    InvestmentFeeInfoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
