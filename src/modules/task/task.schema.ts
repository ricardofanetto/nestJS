import { Project } from '../project/project.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task {

  @Prop({ required: true })
  name: string;

  @Prop({ default: new Date() })
  createdAt: Date;

  @Prop({ default: false })
  completed: boolean;

  @Prop({ type: Types.ObjectId, ref: Project.name })
  project: Project
}

export const TaskSchema = SchemaFactory.createForClass(Task);