import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { VacanciesModule } from './vacancies/vacancies.module';

@Module({
  imports: [PrismaModule, VacanciesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
