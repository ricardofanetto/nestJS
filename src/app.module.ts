import { ProjectModule } from './modules/project/project.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './modules/task/task.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/guilda_node'),
    TaskModule,
    ProjectModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
