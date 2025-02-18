import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TasksController } from './Controllers/TaskController';
import { PrismaService } from './PrismaService';
import TaskRepository from './Repositories/TaskRepository';
import UseCaseFactory from './UseCase/UseCaseFactory';
import { TasksService } from './tasks.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [TasksController],
  providers: [PrismaService, TaskRepository, UseCaseFactory, TasksService],
})
export class AppModule {}

