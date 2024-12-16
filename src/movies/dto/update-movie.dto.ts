import { PartialType } from '@nestjs/mapped-types';
import CreateMovieDto from './create-movie.dto';

export default class UpdateMovieDto extends PartialType(CreateMovieDto) {}
