// This file is created by egg-ts-helper@1.24.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBase = require('../../../app/service/base');
import ExportAdminAuth = require('../../../app/service/admin/auth');
import ExportAdminCat = require('../../../app/service/admin/cat');
import ExportAdminUser = require('../../../app/service/admin/user');

declare module 'egg' {
  interface IService {
    base: ExportBase;
    admin: {
      auth: ExportAdminAuth;
      cat: ExportAdminCat;
      user: ExportAdminUser;
    }
  }
}
