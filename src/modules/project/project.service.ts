
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project, ProjectDocument } from './project.schema';


@Injectable()
export class ProjectService {

  constructor(@InjectModel(Project.name) private projectModel: Model<ProjectDocument>) {

  }

  async create(project: Project): Promise<Project> {
    return await this.projectModel.create(project);
  }

  async update(project: Project, id: string): Promise<Project> {
    await this.projectModel.updateOne({ _id: id }, { $set: project });
    return await this.projectModel.findById(id);
  }

  async findAll(page: number = 0, limit: number = 10): Promise<Project[]> {
    return await this.projectModel.find().skip(page * limit).limit(limit).lean();
  }

  async findOne(id: string): Promise<Project> {
    return await this.projectModel.findById(id);
  }

  async delete(id: string): Promise<boolean> {
    try {
      await this.projectModel.deleteOne({ _id: id });
      return true;
    } catch (error) {
      return false;
    }
  }

}