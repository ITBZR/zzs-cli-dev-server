/*
 * @Descripttion: 项目模板
 * @Author: BZR
 * @Date: 2022-08-26 10:16:44
 * @LastEditTime: 2022-08-31 14:37:45
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
    //   type: 'normal',
    //   startCommand: 'npm run dev',
    //   installCommand: 'npm i',
    // });
    // await project.save();
    const res = await Project.find();
    ctx.body = res;
  }
}
