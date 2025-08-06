/* eslint-disable prettier/prettier */
import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectEntity } from './entities/project.entity';
import { Repository } from 'typeorm';
import { Response } from 'src/dto/response.dto';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(ProjectEntity)
    private readonly projectRepository: Repository<ProjectEntity>,
  ) {}

  async findAll(): Promise<Response<ProjectEntity[]>> {
    return {
      status: HttpStatus.OK,
      message: 'success',
      data: await this.projectRepository.find(),
    };
  }

  async create(body: ProjectEntity): Promise<Response<ProjectEntity>> {
    const newPoject = await this.projectRepository.save(body);
    return {
      status: HttpStatus.CREATED,
      message: 'success',
      data: newPoject,
    };
  }
}
