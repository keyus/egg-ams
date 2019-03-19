// This file is created by egg-ts-helper@1.24.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome = require('../../../app/controller/home');
import ExportAdminBase = require('../../../app/controller/admin/base');
import ExportAdminHome = require('../../../app/controller/admin/home');
import ExportAdminApiAuth = require('../../../app/controller/admin/api/auth');
import ExportAdminApiCat = require('../../../app/controller/admin/api/cat');
import ExportAdminApiUser = require('../../../app/controller/admin/api/user');

declare module 'egg' {
  interface IController {
    home: ExportHome;
    admin: {
      base: ExportAdminBase;
      home: ExportAdminHome;
      api: {
        auth: ExportAdminApiAuth;
        cat: ExportAdminApiCat;
        user: ExportAdminApiUser;
      }
    }
  }
}
