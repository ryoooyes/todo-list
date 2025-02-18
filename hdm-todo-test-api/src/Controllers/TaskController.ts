import { Controller, Get, Post, Delete, Patch, Body, Param } from '@nestjs/common';
import { TasksService } from '../tasks.service';
import { Task } from '../task.model';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll(): Task[] {
    return this.tasksService.findAll();
  }

  @Post()
  create(@Body() task: Task): string {
    this.tasksService.create(task);
    return 'Task created successfully!';
  }

  @Delete(':id')
  delete(@Param('id') id: number): string {
    this.tasksService.delete(id);
    return 'Task deleted successfully!';
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() task: Task): string {
    this.tasksService.update(id, task);
    return 'Task updated successfully!';
  }
}
