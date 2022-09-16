/*
 * @Descripttion: 项目模板
 * @Author: BZR
 * @Date: 2022-08-26 10:16:44
 * @LastEditTime: 2022-09-16 18:02:27
 */
import { Controller } from 'egg';
import fs from 'fs';
import path from 'path';
// 故名思意 异步二进制 写入流
import awaitWriteStream from 'await-stream-ready';
// 管道读入一个虫洞。
import sendToWormhole from 'stream-wormhole';
import dayjs from 'dayjs';

export default class UploadController extends Controller {
  public async index() {
    const { ctx } = this;
    const stream = await this.ctx.getFileStream();
    console.log('-----------获取数据 start--------------');
    console.log(stream.fields);
    console.log('-----------获取数据 end--------------');
    // 基础的目录
    const uplaodBasePath = 'app/public/uploads';
    // 生成文件名
    const filename = `${Date.now()}${parseInt(Math.random() * 1000 + '')}${path.extname(stream.filename).toLocaleLowerCase()}`;
    // 生成文件夹
    const dirname = dayjs(Date.now()).format('YYYY/MM/DD');
    function mkdirsSync(dirname) {
      if (fs.existsSync(dirname)) {
        return true;
      }
      if (mkdirsSync(path.dirname(dirname))) {
        fs.mkdirSync(dirname);
        return true;
      }

    }
    mkdirsSync(path.join(uplaodBasePath, dirname));
    // 生成写入路径
    const target = path.join(uplaodBasePath, dirname, filename);
    // 写入流
    const writeStream = fs.createWriteStream(target);
    try {
      // 异步把文件流 写入
      await awaitWriteStream.write(stream.pipe(writeStream));
    } catch (err) {
      // 如果出现错误，关闭管道
      await sendToWormhole(stream);
    }

    ctx.body = { url: path.join(process.cwd() + '/\/', '/app/public/uploads/' + dirname, filename) };
  }
}
