import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'all movies';
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `searching title ${searchingYear}`;
  }

  @Get('/:id/')
  getOne(@Param('id') movieId: string) {
    return 'one movie ' + movieId;
  }

  @Post()
  create(@Body() movieData) {
    console.log(movieData);
    return movieData;
  }
  @Delete('/:id/')
  remove(@Param('id') movieId: string) {
    return `delete ${movieId} movie`;
  }
  @Patch('/:id/')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }
}
