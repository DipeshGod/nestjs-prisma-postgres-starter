import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { VacanciesService } from './vacancies.service';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { UpdateVacancyDto } from './dto/update-vacancy.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { VacancyReponse } from './entities/vacancy.entity';

@Controller('vacancies')
@ApiTags('vacancies')
export class VacanciesController {
  constructor(private readonly vacanciesService: VacanciesService) {}

  @Post()
  @ApiCreatedResponse({ type: VacancyReponse })
  create(@Body() createVacancyDto: CreateVacancyDto) {
    return this.vacanciesService.create(createVacancyDto);
  }

  @Get()
  @ApiOkResponse({ type: VacancyReponse, isArray: true })
  findAll() {
    return this.vacanciesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: VacancyReponse })
  async findOne(@Param('id') id: string) {
    const vacancy = await this.vacanciesService.findOne(id);
    if (!vacancy) {
      throw new NotFoundException(`Vacancy with ${id} does not exist.`);
    }
    return this.vacanciesService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: VacancyReponse })
  update(@Param('id') id: string, @Body() updateVacancyDto: UpdateVacancyDto) {
    return this.vacanciesService.update(id, updateVacancyDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: VacancyReponse })
  remove(@Param('id') id: string) {
    return this.vacanciesService.remove(id);
  }
}
