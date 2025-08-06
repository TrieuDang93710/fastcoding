/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { BlogService } from './blog.service';
import { Response } from 'src/dto/response.dto';
import { BlogEntity } from './entities/blog.entity';

@Controller('blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  async getAll(): Promise<Response<BlogEntity[]>> {
    return this.blogService.findAll();
  }

  @Post()
  async create(@Body() body: BlogEntity): Promise<Response<BlogEntity>> {
    return this.blogService.create(body);
  }
}
