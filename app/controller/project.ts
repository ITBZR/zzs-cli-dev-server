/*
 * @Descripttion: 项目模板
 * @Author: BZR
 * @Date: 2022-08-26 10:16:44
 * @LastEditTime: 2022-08-29 15:31:23
 */
import { Controller } from 'egg';
import { Project } from '../utils/shcema/project';

export default class ProjectController extends Controller {
  public async index() {
    const { ctx } = this;
    // const project = new Project({
    //   name: 'vue3 + ts + bemcss + vite',
    //   npmName: 'zzs-cli-dev-template-vue3',
    //   version: '1.0.0',
    // });
    // await project.save();
    const res = await Project.find();
    ctx.body = res;
  }
}
