/*
 * @Descripttion: 项目模板
 * @Author: BZR
 * @Date: 2022-08-26 10:16:44
 * @LastEditTime: 2022-09-14 10:56:22
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
    //   tag: [ 'project' ],
    //   ignore: [ '**/public/**' ],
    // });
    // const component = new Project({
    //   name: '测试业务组件库',
    //   npmName: 'zzs-cli-dev-lego-components',
    //   version: '1.0.0',
    //   type: 'normal',
    //   startCommand: 'npm run serve',
    //   installCommand: 'npm i',
    //   tag: [ 'component' ],
    //   ignore: [ '**/public/**' ],
    // });
    // await project.save();
    // await component.save();
    const res = await Project.find();
    ctx.body = res;
  }
}
