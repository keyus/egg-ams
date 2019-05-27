// This file is created by egg-ts-helper@1.24.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAuth = require('../../../app/middleware/auth');
import ExportAuthWeb = require('../../../app/middleware/authWeb');

declare module 'egg' {
  interface IMiddleware {
    auth: typeof ExportAuth;
    authWeb: typeof ExportAuthWeb;
  }
}
