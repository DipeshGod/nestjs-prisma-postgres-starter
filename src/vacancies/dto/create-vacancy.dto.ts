import { ApiProperty } from '@nestjs/swagger';

export class CreateVacancyDto {
  @ApiProperty()
  title: string;

  @ApiProperty({ required: true })
  description: string;

  @ApiProperty()
  body: string;

  @ApiProperty({ required: false, default: false })
  published?: boolean = false;
}
