/*
 * @Descripttion:
 * @Author: BZR
 * @Date: 2022-08-26 10:05:35
 * @LastEditTime: 2022-09-16 17:56:58
 */
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1661479533323_851';

  // add your egg config in here
  config.middleware = [];

  // config.bodyParser = {
  //   formLimit: '10mb',
  //   jsonLimit: '10mb',
  //   textLimit: '10mb',
  // };

  config.multipart = {
    whitelist: [
      '.svg',
      '.png',
      '.jpg',
      '.zip',
    ],
    fileSize: '500mb',
    fields: 100,
  };

  config.security = {
    csrf: false,
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
