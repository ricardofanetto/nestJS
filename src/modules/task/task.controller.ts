import { Task } from './task.schema';
import { Controller, Get, Query, Post, Body, Put, Param, Delete, Inject } from '@nestjs/common';
import { QueryDTO } from '../dto/query.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {

  constructor(
    @Inject(TaskService)
    private readonly taskService: TaskService
  ) {

  }

  @Post()
  create(@Body() body: Task) {
    return this.taskService.create(body);
  }

  @Get()
  findAll(@Query() { limit, page }: QueryDTO) {
    return this.taskService.findAll(page, limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: Task) {
    return this.taskService.update(body, id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.remove(id);
  }

}
