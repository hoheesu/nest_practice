import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { UsersModule } from './users/users.module';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [UsersModule],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule {}
