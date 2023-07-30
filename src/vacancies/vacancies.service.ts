import { Injectable } from '@nestjs/common';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { UpdateVacancyDto } from './dto/update-vacancy.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VacanciesService {
  constructor(private prisma: PrismaService) {}

  create(createVacancyDto: CreateVacancyDto) {
    return this.prisma.vacancy.create({
      data: createVacancyDto,
    });
  }

  findAll() {
    return this.prisma.vacancy.findMany({ where: { published: true } });
  }

  findOne(id: string) {
    return this.prisma.vacancy.findUnique({ where: { id } });
  }

  update(id: string, updateVacancyDto: UpdateVacancyDto) {
    return this.prisma.vacancy.update({
      where: { id },
      data: updateVacancyDto,
    });
  }

  remove(id: string) {
    return this.prisma.vacancy.delete({ where: { id } });
  }
}
