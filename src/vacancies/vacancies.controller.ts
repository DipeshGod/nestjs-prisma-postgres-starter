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
import { VacancyEntity } from './entities/vacancy.entity';

@Controller('vacancies')
@ApiTags('vacancies')
export class VacanciesController {
  constructor(private readonly vacanciesService: VacanciesService) {}

  @Post()
  @ApiCreatedResponse({ type: VacancyEntity })
  async create(@Body() createVacancyDto: CreateVacancyDto) {
    return new VacancyEntity(
      await this.vacanciesService.create(createVacancyDto),
    );
  }

  @Get()
  @ApiOkResponse({ type: VacancyEntity, isArray: true })
  async findAll() {
    const vacancies = await this.vacanciesService.findAll();
    return vacancies.map((vacancy) => new VacancyEntity(vacancy));
  }

  @Get(':id')
  @ApiOkResponse({ type: VacancyEntity })
  async findOne(@Param('id') id: string) {
    const vacancy = await this.vacanciesService.findOne(id);
    if (!vacancy) {
      throw new NotFoundException(`Vacancy with ${id} does not exist.`);
    }
    return new VacancyEntity(await this.vacanciesService.findOne(id));
  }

  @Patch(':id')
  @ApiOkResponse({ type: VacancyEntity })
  async update(
    @Param('id') id: string,
    @Body() updateVacancyDto: UpdateVacancyDto,
  ) {
    return new VacancyEntity(
      await this.vacanciesService.update(id, updateVacancyDto),
    );
  }

  @Delete(':id')
  @ApiOkResponse({ type: VacancyEntity })
  async remove(@Param('id') id: string) {
    return new VacancyEntity(await this.vacanciesService.remove(id));
  }
}
