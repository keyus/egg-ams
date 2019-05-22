// This file is created by egg-ts-helper@1.24.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome = require('../../../app/controller/home');
import ExportAdminBase = require('../../../app/controller/admin/base');
import ExportAdminHome = require('../../../app/controller/admin/home');
import ExportAdminApiArticle = require('../../../app/controller/admin/api/article');
import ExportAdminApiAuth = require('../../../app/controller/admin/api/auth');
import ExportAdminApiCat = require('../../../app/controller/admin/api/cat');
import ExportAdminApiContent = require('../../../app/controller/admin/api/content');
import ExportAdminApiFriendlink = require('../../../app/controller/admin/api/friendlink');
import ExportAdminApiMember = require('../../../app/controller/admin/api/member');
import ExportAdminApiMemberTraderAccount = require('../../../app/controller/admin/api/memberTraderAccount');
import ExportAdminApiPlatform = require('../../../app/controller/admin/api/platform');
import ExportAdminApiSite = require('../../../app/controller/admin/api/site');
import ExportAdminApiSlider = require('../../../app/controller/admin/api/slider');
import ExportAdminApiUpload = require('../../../app/controller/admin/api/upload');
import ExportAdminApiUser = require('../../../app/controller/admin/api/user');

declare module 'egg' {
  interface IController {
    home: ExportHome;
    admin: {
      base: ExportAdminBase;
      home: ExportAdminHome;
      api: {
        article: ExportAdminApiArticle;
        auth: ExportAdminApiAuth;
        cat: ExportAdminApiCat;
        content: ExportAdminApiContent;
        friendlink: ExportAdminApiFriendlink;
        member: ExportAdminApiMember;
        memberTraderAccount: ExportAdminApiMemberTraderAccount;
        platform: ExportAdminApiPlatform;
        site: ExportAdminApiSite;
        slider: ExportAdminApiSlider;
        upload: ExportAdminApiUpload;
        user: ExportAdminApiUser;
      }
    }
  }
}
