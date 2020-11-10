import { TaskDocument } from './task.schema';
import { Injectable } from '@nestjs/common';
import { Task } from './task.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class TaskService {

  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {

  }

  create(task: Task): Promise<Task> {
    return this.taskModel.create(task);
  }

  async update(task: Task, id: string): Promise<Task> {
    await this.taskModel.updateOne({ _id: id }, { $set: task });
    return this.taskModel.findById(id);
  }

  async findAll(page: number = 0, limit: number = 10): Promise<Task[]> {
    return this.taskModel
    .find()
    .populate({ path: 'project', select: 'name' })
    .skip(page * limit)
    .limit(limit).lean();
  }

  async findOne(id: string): Promise<Task> {
    return this.taskModel.findById(id);
  }

  async delete(id: string): Promise<boolean> {
    try {
      await this.taskModel.deleteOne({ _id: id });
      return true;
    } catch (error) {
      return false;
    }
  }

}