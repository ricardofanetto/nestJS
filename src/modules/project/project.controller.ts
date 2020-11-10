import { Project } from './project.schema';
import { ProjectService } from './project.service';
import { Controller, Get, Query, Post, Body, Put, Param, Delete, Inject } from '@nestjs/common';
import { QueryDTO } from '../dto/query.dto';

@Controller('project')
export class ProjectController {

  constructor(
    @Inject(ProjectService)
    private readonly projectService: ProjectService
  ) {

  }

  @Post()
  create(@Body() body: Project) {
    return this.projectService.create(body);
  }

  @Get()
  findAll(@Query() { limit, page }: QueryDTO) {
    return this.projectService.findAll(page, limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: Project) {
    return this.projectService.update(body, id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.remove(id);
  }
  
}
