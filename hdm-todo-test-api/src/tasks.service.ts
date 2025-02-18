import { Injectable } from '@nestjs/common';
import { Task } from './task.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  findAll(): Task[] {
    return this.tasks;
  }

  create(task: Task) {
    this.tasks.push(task);
  }

  delete(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  update(id: number, updatedTask: Task) {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index > -1) {
      this.tasks[index] = updatedTask;
    }
  }
}
