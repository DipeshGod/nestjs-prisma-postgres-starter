import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { VacanciesModule } from './vacancies/vacancies.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PrismaModule, VacanciesModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
