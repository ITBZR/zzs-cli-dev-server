import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  name: String,
  npmName: String,
  version: String,
});
export const Project = mongoose.model('Project', ProjectSchema);
