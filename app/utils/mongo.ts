/*
 * @Descripttion:
 * @Author: BZR
 * @Date: 2022-08-26 15:05:31
 * @LastEditTime: 2022-08-29 11:55:09
 */
'use strict';

import mongoose from 'mongoose';

import config from '../../config/db';

class Mongo {
  constructor() {
    this.connect();
  }
  connect() {
    mongoose.connect(config.mongodbUrl).then(() => {
      console.log('数据库连接成功');
    }).catch(e => {
      console.log('数据库连接失败', e);
    });
  }
}


export default Mongo;

