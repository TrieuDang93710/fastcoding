/* eslint-disable prettier/prettier */
import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogEntity } from './entities/blog.entity';
import { Repository } from 'typeorm';
import { Response } from 'src/dto/response.dto';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(BlogEntity)
    private readonly blogRepository: Repository<BlogEntity>,
  ) {}

  async findAll(): Promise<Response<BlogEntity[]>> {
    return {
      status: HttpStatus.OK,
      message: 'success',
      data: await this.blogRepository.find(),
    };
  }

  async create(body: BlogEntity): Promise<Response<BlogEntity>> {
    const newBlog = await this.blogRepository.save(body);
    return {
      status: HttpStatus.CREATED,
      message: 'success',
      data: newBlog,
    };
  }
}
