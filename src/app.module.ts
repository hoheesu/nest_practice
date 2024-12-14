import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [MoviesController],
  providers: [],
})
export class AppModule {}
