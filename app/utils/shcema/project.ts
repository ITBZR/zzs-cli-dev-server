/*
 * @Descripttion: 集合
 * @Author: BZR
 * @Date: 2022-08-29 11:42:14
 * @LastEditTime: 2022-08-31 14:24:50
 */
import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  name: String,
  npmName: String,
  version: String,
  type: String,
  installCommand: String,
  startCommand: String,
});
export const Project = mongoose.model('Project', ProjectSchema);
