import { Module } from '@nestjs/common';
import { VacanciesService } from './vacancies.service';
import { VacanciesController } from './vacancies.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [VacanciesController],
  providers: [VacanciesService],
  imports: [PrismaModule],
})
export class VacanciesModule {}
