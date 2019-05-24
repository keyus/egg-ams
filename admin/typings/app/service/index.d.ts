// This file is created by egg-ts-helper@1.24.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBase = require('../../../app/service/base');
import ExportAdminArticle = require('../../../app/service/admin/article');
import ExportAdminAuth = require('../../../app/service/admin/auth');
import ExportAdminCat = require('../../../app/service/admin/cat');
import ExportAdminContent = require('../../../app/service/admin/content');
import ExportAdminFriendlink = require('../../../app/service/admin/friendlink');
import ExportAdminMember = require('../../../app/service/admin/member');
import ExportAdminMemberTraderAccount = require('../../../app/service/admin/memberTraderAccount');
import ExportAdminMoneyDetails = require('../../../app/service/admin/moneyDetails');
import ExportAdminOpenAccount = require('../../../app/service/admin/openAccount');
import ExportAdminPlatform = require('../../../app/service/admin/platform');
import ExportAdminPlatformProduct = require('../../../app/service/admin/platformProduct');
import ExportAdminSite = require('../../../app/service/admin/site');
import ExportAdminSlider = require('../../../app/service/admin/slider');
import ExportAdminUser = require('../../../app/service/admin/user');

declare module 'egg' {
  interface IService {
    base: ExportBase;
    admin: {
      article: ExportAdminArticle;
      auth: ExportAdminAuth;
      cat: ExportAdminCat;
      content: ExportAdminContent;
      friendlink: ExportAdminFriendlink;
      member: ExportAdminMember;
      memberTraderAccount: ExportAdminMemberTraderAccount;
      moneyDetails: ExportAdminMoneyDetails;
      openAccount: ExportAdminOpenAccount;
      platform: ExportAdminPlatform;
      platformProduct: ExportAdminPlatformProduct;
      site: ExportAdminSite;
      slider: ExportAdminSlider;
      user: ExportAdminUser;
    }
  }
}
