/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectEntity } from './entities/project.entity';
import { Response } from 'src/dto/response.dto';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  async getAll(): Promise<Response<ProjectEntity[]>> {
    return this.projectService.findAll();
  }

  @Post()
  async create(@Body() body: ProjectEntity): Promise<Response<ProjectEntity>> {
    return this.projectService.create(body);
  }
}
