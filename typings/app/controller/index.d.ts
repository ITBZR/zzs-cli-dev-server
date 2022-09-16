// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportProject from '../../../app/controller/project';
import ExportUpload from '../../../app/controller/upload';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    project: ExportProject;
    upload: ExportUpload;
  }
}
