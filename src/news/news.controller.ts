/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsEntity } from './entities/news.entity';
import { Response } from 'src/dto/response.dto';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  async getAllNews(): Promise<Response<NewsEntity[]>> {
    return this.newsService.findAll();
  }

  @Post()
  async createNew(@Body() body: NewsEntity): Promise<Response<NewsEntity>> {
    return this.newsService.create(body);
  }
}
