import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'all movies';
  }
  @Get('/:id/')
  getOne(@Param('id') movieId: string) {
    return 'one movie ' + movieId;
  }

  @Post()
  create() {
    return 'create movie';
  }
  @Delete('/:id/')
  remove(@Param('id') movieId: string) {
    return `delete ${movieId} movie`;
  }
  @Patch('/:id/')
  patch(@Param('id') movieId: string) {
    return `patch ${movieId} movie`;
  }
}
