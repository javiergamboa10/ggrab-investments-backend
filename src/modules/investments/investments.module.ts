import { Module } from '@nestjs/common';
import { InvestmentsService } from './investments.service';
import { InvestmentsController } from './investments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvestmentsRepository } from './investments.repository';

@Module({
  controllers: [InvestmentsController],
  providers: [InvestmentsService],
  imports: [TypeOrmModule.forFeature([InvestmentsRepository])],
})
export class InvestmentsModule {}
