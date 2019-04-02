// This file is created by egg-ts-helper@1.24.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBase = require('../../../app/service/base');
import ExportAdminArticle = require('../../../app/service/admin/article');
import ExportAdminAuth = require('../../../app/service/admin/auth');
import ExportAdminCat = require('../../../app/service/admin/cat');
import ExportAdminContent = require('../../../app/service/admin/content');
import ExportAdminUser = require('../../../app/service/admin/user');

declare module 'egg' {
  interface IService {
    base: ExportBase;
    admin: {
      article: ExportAdminArticle;
      auth: ExportAdminAuth;
      cat: ExportAdminCat;
      content: ExportAdminContent;
      user: ExportAdminUser;
    }
  }
}
