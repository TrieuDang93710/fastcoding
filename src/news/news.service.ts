/* eslint-disable prettier/prettier */
import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NewsEntity } from './entities/news.entity';
import { Repository } from 'typeorm';
import { Response } from 'src/dto/response.dto';

Injectable();
export class NewsService {
  constructor(
    @InjectRepository(NewsEntity)
    private readonly newsRepository: Repository<NewsEntity>,
  ) {}

  async findAll(): Promise<Response<NewsEntity[]>> {
    return {
      status: HttpStatus.OK,
      message: 'success',
      data: await this.newsRepository.find(),
    };
  }

  async create(body: NewsEntity): Promise<Response<NewsEntity>> {
    const newNews = await this.newsRepository.save(body);

    return {
      status: HttpStatus.CREATED,
      message: 'success',
      data: newNews,
    };
  }
}
