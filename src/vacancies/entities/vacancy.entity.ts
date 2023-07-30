import { Vacancy } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class VacancyReponse implements Vacancy {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string | null;

  @ApiProperty()
  body: string;

  @ApiProperty()
  published: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
