# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.21)
# Database: fanyongdou
# Generation Time: 2019-05-24 12:31:15 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table pme_idCardAuth
# ------------------------------------------------------------

DROP TABLE IF EXISTS `pme_idCardAuth`;

CREATE TABLE `pme_idCardAuth` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table pme_article
# ------------------------------------------------------------

DROP TABLE IF EXISTS `pme_article`;

CREATE TABLE `pme_article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `fromto` varchar(45) DEFAULT NULL,
  `img` varchar(250) DEFAULT NULL,
  `hot` tinyint(1) NOT NULL DEFAULT '0',
  `author` varchar(45) DEFAULT NULL,
  `intro` varchar(100) DEFAULT NULL,
  `top` tinyint(1) NOT NULL DEFAULT '0',
  `cat_id` int(11) DEFAULT NULL,
  `content_id` int(11) DEFAULT NULL,
  `keywords` varchar(200) DEFAULT NULL,
  `sorter` int(11) NOT NULL DEFAULT '50',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `pme_article` WRITE;
/*!40000 ALTER TABLE `pme_article` DISABLE KEYS */;

INSERT INTO `pme_article` (`id`, `title`, `fromto`, `img`, `hot`, `author`, `intro`, `top`, `cat_id`, `content_id`, `keywords`, `sorter`, `update_time`, `create_time`)
VALUES
	(1,'fdsafdsa',NULL,'',0,NULL,NULL,0,NULL,4,NULL,50,'2019-04-25 19:03:53','2019-04-25 19:03:53'),
	(2,'sfas',NULL,'',0,NULL,NULL,0,NULL,7,NULL,50,'2019-05-22 11:01:50','2019-05-22 11:01:50'),
	(3,'fdafdsa',NULL,'',0,NULL,NULL,0,NULL,8,NULL,50,'2019-05-22 11:01:53','2019-05-22 11:01:53'),
	(4,'rewqerq',NULL,'',0,NULL,NULL,0,NULL,9,NULL,50,'2019-05-22 11:01:55','2019-05-22 11:01:55'),
	(5,'vavdaz',NULL,'',0,NULL,NULL,0,NULL,10,NULL,50,'2019-05-22 11:01:58','2019-05-22 11:01:58'),
	(6,'sgf',NULL,'',0,NULL,NULL,0,NULL,11,NULL,50,'2019-05-22 11:02:00','2019-05-22 11:02:00'),
	(7,'fdsafda',NULL,'',0,NULL,NULL,0,NULL,12,NULL,50,'2019-05-22 11:02:02','2019-05-22 11:02:02'),
	(8,'fdafdas',NULL,'',0,NULL,NULL,0,NULL,13,NULL,50,'2019-05-22 11:02:04','2019-05-22 11:02:04'),
	(9,'fdafdsa',NULL,'',0,NULL,NULL,0,NULL,14,NULL,50,'2019-05-22 11:02:06','2019-05-22 11:02:06'),
	(10,'fdsafdas',NULL,'',0,NULL,NULL,0,NULL,15,NULL,50,'2019-05-22 11:02:08','2019-05-22 11:02:08'),
	(11,'fafdsafda',NULL,'',0,NULL,NULL,0,NULL,16,NULL,50,'2019-05-22 11:02:10','2019-05-22 11:02:10'),
	(12,'rewqrewq',NULL,'',0,NULL,NULL,0,NULL,17,NULL,50,'2019-05-22 11:02:35','2019-05-22 11:02:35');

/*!40000 ALTER TABLE `pme_article` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table pme_cat
# ------------------------------------------------------------

DROP TABLE IF EXISTS `pme_cat`;

CREATE TABLE `pme_cat` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(11) NOT NULL DEFAULT '50',
  `is_nav` tinyint(1) NOT NULL DEFAULT '0',
  `is_list` tinyint(1) NOT NULL DEFAULT '0',
  `banner` varchar(200) DEFAULT NULL,
  `content_id` int(11) DEFAULT NULL,
  `sorter` int(11) DEFAULT '50',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `pme_cat` WRITE;
/*!40000 ALTER TABLE `pme_cat` DISABLE KEYS */;

INSERT INTO `pme_cat` (`id`, `name`, `is_nav`, `is_list`, `banner`, `content_id`, `sorter`, `create_time`, `update_time`)
VALUES
	(1,'rewq',1,0,'',6,50,'2019-04-25 19:04:50','2019-04-25 19:04:50');

/*!40000 ALTER TABLE `pme_cat` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table pme_content
# ------------------------------------------------------------

DROP TABLE IF EXISTS `pme_content`;

CREATE TABLE `pme_content` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `content` longtext,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `pme_content` WRITE;
/*!40000 ALTER TABLE `pme_content` DISABLE KEYS */;

INSERT INTO `pme_content` (`id`, `content`, `create_time`, `update_time`)
VALUES
	(1,'<p><br></p>','2019-04-25 19:02:31','2019-04-25 19:02:31'),
	(2,'<p><br></p>','2019-04-25 19:03:10','2019-04-25 19:03:10'),
	(3,'<p><br></p>','2019-04-25 19:03:22','2019-04-25 19:03:22'),
	(4,'<p><br></p>','2019-04-25 19:03:53','2019-04-25 19:03:53'),
	(5,'<p><br></p>','2019-04-25 19:04:03','2019-04-25 19:04:03'),
	(6,'<p><br></p>','2019-04-25 19:04:50','2019-04-25 19:04:50'),
	(7,'<p><br></p>','2019-05-22 11:01:50','2019-05-22 11:01:50'),
	(8,'<p><br></p>','2019-05-22 11:01:53','2019-05-22 11:01:53'),
	(9,'<p><br></p>','2019-05-22 11:01:55','2019-05-22 11:01:55'),
	(10,'<p><br></p>','2019-05-22 11:01:58','2019-05-22 11:01:58'),
	(11,'<p><br></p>','2019-05-22 11:02:00','2019-05-22 11:02:00'),
	(12,'<p><br></p>','2019-05-22 11:02:02','2019-05-22 11:02:02'),
	(13,'<p><br></p>','2019-05-22 11:02:04','2019-05-22 11:02:04'),
	(14,'<p><br></p>','2019-05-22 11:02:06','2019-05-22 11:02:06'),
	(15,'<p><br></p>','2019-05-22 11:02:08','2019-05-22 11:02:08'),
	(16,'<p><br></p>','2019-05-22 11:02:10','2019-05-22 11:02:10'),
	(17,'<p><br></p>','2019-05-22 11:02:35','2019-05-22 11:02:35');

/*!40000 ALTER TABLE `pme_content` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table pme_friendlink
# ------------------------------------------------------------

DROP TABLE IF EXISTS `pme_friendlink`;

CREATE TABLE `pme_friendlink` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '',
  `url` varchar(200) DEFAULT NULL,
  `img` varchar(200) DEFAULT NULL,
  `refollow` tinyint(1) NOT NULL DEFAULT '0',
  `sorter` int(11) NOT NULL DEFAULT '50',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table pme_member
# ------------------------------------------------------------

DROP TABLE IF EXISTS `pme_member`;

CREATE TABLE `pme_member` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `phone` varchar(11) DEFAULT NULL COMMENT '手机号',
  `password` varchar(100) NOT NULL DEFAULT '' COMMENT '密码',
  `idCard` varchar(18) DEFAULT NULL COMMENT '身份证号',
  `hasAccount` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否已有交易商账号',
  `idcard_img1` varchar(200) DEFAULT NULL COMMENT '身份证正面照片链接',
  `idcard_img2` varchar(200) DEFAULT NULL COMMENT '身份证反面照片链接',
  `name` varchar(11) DEFAULT NULL COMMENT '真实姓名',
  `money` decimal(18,2) NOT NULL DEFAULT '0.00' COMMENT '返佣账户余额',
  `alipay` varchar(50) DEFAULT NULL COMMENT '支付宝收款方式',
  `bankName` varchar(50) DEFAULT NULL COMMENT '银行名称',
  `bankCode` varchar(50) DEFAULT NULL COMMENT '银行卡代码',
  `bankAddress` varchar(100) DEFAULT NULL COMMENT '银行卡开户行地址',
  `bankAccount` varchar(50) DEFAULT NULL COMMENT '银行卡号',
  `status` tinyint(11) NOT NULL DEFAULT '1' COMMENT '账号状态，是否正常0,禁用，1启用',
  `sorter` int(11) NOT NULL DEFAULT '50',
  `withdrawSuccess` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否提现成功',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `pme_member` WRITE;
/*!40000 ALTER TABLE `pme_member` DISABLE KEYS */;

INSERT INTO `pme_member` (`id`, `phone`, `password`, `idCard`, `hasAccount`, `idcard_img1`, `idcard_img2`, `name`, `money`, `alipay`, `bankName`, `bankCode`, `bankAddress`, `bankAccount`, `status`, `sorter`, `withdrawSuccess`, `create_time`, `update_time`)
VALUES
	(1,'15802816168','kjfkdal','518377282899991918',0,NULL,NULL,'中不中',18873.00,NULL,NULL,NULL,NULL,NULL,1,50,0,'2019-05-21 13:13:34','2019-05-21 13:13:34'),
	(2,'15802817170','111111',NULL,0,NULL,NULL,NULL,0.00,NULL,NULL,NULL,NULL,NULL,0,50,0,'2019-05-21 15:21:39','2019-05-21 15:21:39'),
	(4,'15802816169','96e79218965eb72c92a549dd5a330112',NULL,0,NULL,NULL,NULL,0.00,NULL,NULL,NULL,NULL,NULL,1,50,0,'2019-05-21 15:28:43','2019-05-21 15:28:43'),
	(5,'13679282828','96e79218965eb72c92a549dd5a330112',NULL,0,NULL,NULL,NULL,0.00,NULL,NULL,NULL,NULL,NULL,1,50,0,'2019-05-21 15:59:26','2019-05-21 15:59:26'),
	(6,'17827272772','96e79218965eb72c92a549dd5a330112',NULL,0,NULL,NULL,NULL,0.00,NULL,NULL,NULL,NULL,NULL,1,50,0,'2019-05-22 10:53:31','2019-05-22 10:53:31'),
	(7,'18597328978','96e79218965eb72c92a549dd5a330112',NULL,0,NULL,NULL,NULL,0.00,NULL,NULL,NULL,NULL,NULL,1,50,0,'2019-05-22 10:53:41','2019-05-22 10:53:41'),
	(8,'17846378567','96e79218965eb72c92a549dd5a330112','518377282899991911',1,NULL,NULL,'中不有',0.00,NULL,'中国银行','BOC','叶不要嚅嚅老大哥','62170038182839728',1,50,0,'2019-05-22 10:53:50','2019-05-22 10:53:50'),
	(9,'15438975849','96e79218965eb72c92a549dd5a330112',NULL,0,NULL,NULL,NULL,0.00,NULL,NULL,NULL,NULL,NULL,1,50,0,'2019-05-22 10:54:00','2019-05-22 10:54:00'),
	(10,'18758375843','96e79218965eb72c92a549dd5a330112',NULL,0,NULL,NULL,NULL,0.00,NULL,NULL,NULL,NULL,NULL,1,50,0,'2019-05-22 10:54:08','2019-05-22 10:54:08'),
	(11,'13678645788','96e79218965eb72c92a549dd5a330112',NULL,0,NULL,NULL,NULL,0.00,NULL,NULL,NULL,NULL,NULL,1,50,0,'2019-05-22 10:54:17','2019-05-22 10:54:17'),
	(12,'15743654836','96e79218965eb72c92a549dd5a330112','518377282899991911',1,NULL,NULL,'刘不齐',1500.00,'fdsfda@163.com','中国银行','BOC','中国银行北京朝阳区支行','61270038288928719376',1,50,1,'2019-05-22 10:54:28','2019-05-22 10:54:28');

/*!40000 ALTER TABLE `pme_member` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table pme_memberTraderAccount
# ------------------------------------------------------------

DROP TABLE IF EXISTS `pme_memberTraderAccount`;

CREATE TABLE `pme_memberTraderAccount` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `account` varchar(100) NOT NULL DEFAULT '' COMMENT '交易账号',
  `platformId` int(11) NOT NULL COMMENT '交易商ID',
  `memberId` int(11) NOT NULL COMMENT '会员ID',
  `accountName` varchar(20) NOT NULL DEFAULT '' COMMENT '账号姓名',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `pme_memberTraderAccount` WRITE;
/*!40000 ALTER TABLE `pme_memberTraderAccount` DISABLE KEYS */;

INSERT INTO `pme_memberTraderAccount` (`id`, `account`, `platformId`, `memberId`, `accountName`, `create_time`, `update_time`)
VALUES
	(3,'8937248',1,12,'刘不齐','2019-05-22 17:37:27','2019-05-22 17:37:27'),
	(4,'435342523542',4,8,'中不有','2019-05-23 12:05:32','2019-05-23 12:05:32'),
	(5,'525454543',1,8,'中不有','2019-05-23 12:05:37','2019-05-23 12:05:37'),
	(6,'121432',8,12,'刘不齐','2019-05-24 13:51:00','2019-05-24 13:51:00'),
	(7,'423432',7,12,'刘不齐','2019-05-24 13:51:05','2019-05-24 13:51:05'),
	(8,'1231321',7,8,'中不有','2019-05-24 17:02:29','2019-05-24 17:02:29'),
	(9,'432432432',8,8,'中不有','2019-05-24 17:02:34','2019-05-24 17:02:34'),
	(10,'32432',7,8,'中不有','2019-05-24 17:02:39','2019-05-24 17:02:39'),
	(11,'214312431',7,8,'中不有','2019-05-24 17:02:42','2019-05-24 17:02:42'),
	(12,'43214321',7,12,'刘不齐','2019-05-24 17:02:47','2019-05-24 17:02:47'),
	(13,'54325423',7,12,'刘不齐','2019-05-24 17:04:45','2019-05-24 17:04:45');

/*!40000 ALTER TABLE `pme_memberTraderAccount` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table pme_moneyDetails
# ------------------------------------------------------------

DROP TABLE IF EXISTS `pme_moneyDetails`;

CREATE TABLE `pme_moneyDetails` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `memberId` int(11) NOT NULL COMMENT '会员ID',
  `memberPhone` varchar(11) NOT NULL DEFAULT '' COMMENT '会员手机号',
  `money` decimal(11,2) NOT NULL DEFAULT '0.00' COMMENT '金额',
  `platformId` int(11) DEFAULT NULL COMMENT '交易商ID',
  `account` varchar(50) DEFAULT '' COMMENT '交易账号',
  `type` tinyint(1) NOT NULL DEFAULT '1' COMMENT '类型  0： 支出    1:收入 ',
  `entryType` tinyint(1) DEFAULT NULL COMMENT '0: 系统派送   1:佣金，  2:提现',
  `moneyDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '产生交易佣金的日期',
  `tradeProduct` varchar(200) DEFAULT NULL COMMENT '交易品种合集',
  `note` varchar(200) DEFAULT NULL COMMENT '备注,明细备注',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT ' 状态 1：正常记录    0：冻结，不计入返佣余额',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `pme_moneyDetails` WRITE;
/*!40000 ALTER TABLE `pme_moneyDetails` DISABLE KEYS */;

INSERT INTO `pme_moneyDetails` (`id`, `memberId`, `memberPhone`, `money`, `platformId`, `account`, `type`, `entryType`, `moneyDate`, `tradeProduct`, `note`, `status`, `create_time`, `update_time`)
VALUES
	(1,2,'8',5.00,7,'001817',1,NULL,'2019-05-24 10:43:58',NULL,NULL,1,'2019-05-23 19:37:33','2019-05-23 19:37:33'),
	(2,1,'8277',3.00,6,'874324',1,NULL,'2019-05-24 10:43:56',NULL,NULL,1,'2019-05-23 20:55:41','2019-05-23 20:55:41'),
	(3,4,'23232',0.00,0,'',1,NULL,'2019-05-24 10:44:00',NULL,NULL,1,'2019-05-23 20:57:05','2019-05-23 20:57:05'),
	(4,3,'3242',0.00,0,'',1,NULL,'2019-05-24 10:43:59',NULL,NULL,1,'2019-05-23 20:57:12','2019-05-23 20:57:12'),
	(5,1,'432432',0.00,0,'',1,NULL,'2019-05-24 10:44:05',NULL,NULL,1,'2019-05-23 20:57:15','2019-05-23 20:57:15'),
	(6,1,'12121',0.00,0,'',1,NULL,'2019-05-24 10:44:01',NULL,NULL,1,'2019-05-23 20:57:31','2019-05-23 20:57:31'),
	(7,1,'5464',0.00,0,'',1,NULL,'2019-05-24 10:44:02',NULL,NULL,1,'2019-05-23 20:57:35','2019-05-23 20:57:35'),
	(8,1,'213213',0.00,0,'',1,NULL,'2019-05-24 10:44:04',NULL,NULL,1,'2019-05-23 20:57:39','2019-05-23 20:57:39'),
	(9,1,'845435',0.00,0,'',1,NULL,'2019-05-24 10:44:03',NULL,NULL,1,'2019-05-23 20:57:47','2019-05-23 20:57:47'),
	(10,1,'456743',0.00,0,'',1,NULL,'2019-05-24 10:44:06',NULL,NULL,1,'2019-05-23 20:57:51','2019-05-23 20:57:51'),
	(11,1,'54325432',0.00,0,'',1,NULL,'2019-05-24 10:44:07',NULL,NULL,1,'2019-05-23 20:57:53','2019-05-23 20:57:53'),
	(12,1,'5425432',0.00,0,'',1,NULL,'2019-05-24 10:44:07',NULL,NULL,1,'2019-05-23 20:57:58','2019-05-23 20:57:58'),
	(13,12,'15743654836',453.00,NULL,'',1,0,'2019-05-25 00:00:00',NULL,'gfbvsda',1,'2019-05-24 15:04:40','2019-05-24 15:04:40'),
	(14,12,'15743654836',432.00,7,'7',1,1,'2019-05-25 00:00:00',NULL,'gsfgewretre',1,'2019-05-24 15:10:18','2019-05-24 15:10:18'),
	(15,11,'13678645788',50.00,NULL,'',1,0,'2019-05-24 00:00:00',NULL,'kd',1,'2019-05-24 15:14:53','2019-05-24 15:14:53'),
	(16,12,'15743654836',12.00,NULL,'',0,2,'2019-05-24 15:40:39',NULL,'4432432',1,'2019-05-24 15:37:20','2019-05-24 15:37:20'),
	(17,12,'15743654836',1.00,NULL,'',0,2,'2019-05-25 00:00:00',NULL,'1221',1,'2019-05-24 15:41:48','2019-05-24 15:41:48'),
	(18,12,'15743654836',79.00,7,'7',1,1,'2019-05-24 00:00:00',NULL,'霜地城',1,'2019-05-24 15:57:42','2019-05-24 15:57:42'),
	(19,12,'15743654836',79.00,7,'7',1,1,'2019-05-24 00:00:00',NULL,'霜地城',1,'2019-05-24 15:58:29','2019-05-24 15:58:29'),
	(20,12,'15743654836',79.00,7,'7',1,1,'2019-05-24 00:00:00',NULL,'霜地城',1,'2019-05-24 15:59:11','2019-05-24 15:59:11'),
	(21,12,'15743654836',42.00,7,'7',1,1,'2019-05-24 00:00:00',NULL,'gfsgfs',1,'2019-05-24 16:00:03','2019-05-24 16:00:03'),
	(22,12,'15743654836',100.00,NULL,'',0,2,'2019-05-24 00:00:00',NULL,'fdsreqrew',1,'2019-05-24 16:00:47','2019-05-24 16:00:47'),
	(23,12,'15743654836',100.00,7,'7',1,1,'2019-05-24 00:00:00',NULL,'fdsfds',1,'2019-05-24 16:02:57','2019-05-24 16:02:57');

/*!40000 ALTER TABLE `pme_moneyDetails` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table pme_openAccount
# ------------------------------------------------------------

DROP TABLE IF EXISTS `pme_openAccount`;

CREATE TABLE `pme_openAccount` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '' COMMENT '开户姓名',
  `platformId` int(11) NOT NULL COMMENT '交易商ID',
  `memberId` int(11) DEFAULT NULL COMMENT '开户会员账号ID',
  `memberPhone` varchar(11) DEFAULT NULL COMMENT '会员手机号',
  `status` tinyint(1) DEFAULT NULL COMMENT '0：未处理     1：已处理',
  `idcardImg1` varchar(100) DEFAULT NULL COMMENT '身份证照片1',
  `idcardImg2` varchar(100) DEFAULT NULL COMMENT '身份证照片2',
  `idcardHandImg` varchar(100) DEFAULT NULL COMMENT '手持身份证照片',
  `bankImg1` varchar(100) DEFAULT NULL COMMENT '银行卡照片1',
  `bankImg2` varchar(100) DEFAULT NULL COMMENT '银行卡照片2',
  `img1` varchar(100) DEFAULT NULL COMMENT '补充资料1',
  `img2` varchar(100) DEFAULT NULL COMMENT '补充资料2',
  `img3` varchar(100) DEFAULT NULL COMMENT '补充资料3',
  `img4` varchar(100) DEFAULT NULL COMMENT '补充资料4',
  `img5` varchar(100) DEFAULT NULL COMMENT '补充资料5',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `pme_openAccount` WRITE;
/*!40000 ALTER TABLE `pme_openAccount` DISABLE KEYS */;

INSERT INTO `pme_openAccount` (`id`, `name`, `platformId`, `memberId`, `memberPhone`, `status`, `idcardImg1`, `idcardImg2`, `idcardHandImg`, `bankImg1`, `bankImg2`, `img1`, `img2`, `img3`, `img4`, `img5`, `create_time`, `update_time`)
VALUES
	(1,'吵右地',8,1,'15802816168',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2019-05-24 19:39:32','2019-05-24 19:39:32'),
	(2,'吵不地',8,1,'15802816168',0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2019-05-24 19:39:38','2019-05-24 19:39:38');

/*!40000 ALTER TABLE `pme_openAccount` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table pme_platform
# ------------------------------------------------------------

DROP TABLE IF EXISTS `pme_platform`;

CREATE TABLE `pme_platform` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL DEFAULT '' COMMENT '交易所名称',
  `logo` varchar(200) DEFAULT NULL COMMENT '交易所logo',
  `net` varchar(100) DEFAULT NULL COMMENT '交易所网址',
  `intro` varchar(100) DEFAULT NULL COMMENT '交易所介绍',
  `rebateWeek` varchar(11) DEFAULT NULL COMMENT '返佣周期',
  `joinMoneyType` varchar(100) DEFAULT NULL COMMENT '出入金方式',
  `joinMoneyTime` varchar(50) DEFAULT NULL COMMENT '入金到账时间',
  `drawMoneyTime` varchar(50) DEFAULT NULL COMMENT '出金到账时间',
  `product` varchar(100) DEFAULT NULL COMMENT '交易品种，简介',
  `joinMinMoney` varchar(50) DEFAULT NULL COMMENT '最小入金金额',
  `burstRate` varchar(50) DEFAULT NULL COMMENT '爆仓比例',
  `maxLever` varchar(10) DEFAULT NULL COMMENT '最大杠杆',
  `openFile` varchar(100) DEFAULT NULL COMMENT '开户资料',
  `sorter` int(11) NOT NULL DEFAULT '50' COMMENT '排序',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建日期',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '更新日期',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `pme_platform` WRITE;
/*!40000 ALTER TABLE `pme_platform` DISABLE KEYS */;

INSERT INTO `pme_platform` (`id`, `name`, `logo`, `net`, `intro`, `rebateWeek`, `joinMoneyType`, `joinMoneyTime`, `drawMoneyTime`, `product`, `joinMinMoney`, `burstRate`, `maxLever`, `openFile`, `sorter`, `create_time`, `update_time`)
VALUES
	(7,'中进大宗','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,50,'2019-05-23 16:08:46','2019-05-23 16:08:46'),
	(8,'湖南大宗','','hulan.com','fdsafdsafs','1',NULL,NULL,NULL,NULL,NULL,'5%','50','身份证、银行卡、',50,'2019-05-23 16:17:48','2019-05-23 16:17:48');

/*!40000 ALTER TABLE `pme_platform` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table pme_platformProduct
# ------------------------------------------------------------

DROP TABLE IF EXISTS `pme_platformProduct`;

CREATE TABLE `pme_platformProduct` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `productName` varchar(50) NOT NULL DEFAULT '' COMMENT '交易品种名称',
  `platformId` int(11) NOT NULL COMMENT '交易商ID',
  `diff` int(11) DEFAULT NULL COMMENT '点差',
  `maxNums` int(11) DEFAULT NULL COMMENT '最大交易量',
  `buyFree` varchar(50) DEFAULT NULL COMMENT '买入手续费',
  `sellFree` varchar(50) DEFAULT NULL COMMENT '卖出手续费',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `pme_platformProduct` WRITE;
/*!40000 ALTER TABLE `pme_platformProduct` DISABLE KEYS */;

INSERT INTO `pme_platformProduct` (`id`, `productName`, `platformId`, `diff`, `maxNums`, `buyFree`, `sellFree`)
VALUES
	(2,'铜',1,5,12,NULL,NULL),
	(5,'白银',7,12,12,'5',NULL);

/*!40000 ALTER TABLE `pme_platformProduct` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table pme_site
# ------------------------------------------------------------

DROP TABLE IF EXISTS `pme_site`;

CREATE TABLE `pme_site` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `site_name` varchar(100) DEFAULT NULL,
  `site_desc` varchar(100) DEFAULT NULL,
  `site_keywords` varchar(100) DEFAULT NULL,
  `site_logo` varchar(250) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `qq` varchar(100) DEFAULT NULL,
  `site_email` varchar(100) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `icp` varchar(50) DEFAULT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `pme_site` WRITE;
/*!40000 ALTER TABLE `pme_site` DISABLE KEYS */;

INSERT INTO `pme_site` (`id`, `site_name`, `site_desc`, `site_keywords`, `site_logo`, `address`, `qq`, `site_email`, `phone`, `icp`, `create_time`, `update_time`)
VALUES
	(1,'大师兄',NULL,NULL,'http://localhost:7002/public/upload/images/3c48332c2b7aa17385eeb977c71f4f34.png',NULL,NULL,NULL,NULL,NULL,'2019-04-25 18:03:55','2019-04-25 18:03:55');

/*!40000 ALTER TABLE `pme_site` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table pme_slider
# ------------------------------------------------------------

DROP TABLE IF EXISTS `pme_slider`;

CREATE TABLE `pme_slider` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `img` varchar(250) NOT NULL DEFAULT '',
  `alt` varchar(50) DEFAULT '',
  `url` varchar(250) DEFAULT '',
  `use` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0,未启用',
  `sorter` int(11) NOT NULL DEFAULT '50',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table pme_user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `pme_user`;

CREATE TABLE `pme_user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL DEFAULT '',
  `password` varchar(50) NOT NULL DEFAULT '',
  `nickname` varchar(50) DEFAULT NULL,
  `use` tinyint(1) NOT NULL DEFAULT '1',
  `role` int(11) NOT NULL DEFAULT '0',
  `note` int(11) DEFAULT NULL,
  `sorter` int(11) NOT NULL DEFAULT '50',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `pme_user` WRITE;
/*!40000 ALTER TABLE `pme_user` DISABLE KEYS */;

INSERT INTO `pme_user` (`id`, `username`, `password`, `nickname`, `use`, `role`, `note`, `sorter`, `create_time`, `update_time`)
VALUES
	(1,'admin','96e79218965eb72c92a549dd5a330112','超管',1,1,NULL,50,'2019-04-25 17:50:40','2019-04-25 17:50:40'),
	(2,'root','96e79218965eb72c92a549dd5a330112','root',1,1,NULL,50,'2019-04-25 17:50:52','2019-04-25 17:50:52'),
	(3,'test','098f6bcd4621d373cade4e832627b4f6',NULL,1,0,NULL,50,'2019-04-25 18:04:31','2019-04-25 18:04:31');

/*!40000 ALTER TABLE `pme_user` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table pme_withdraw
# ------------------------------------------------------------

DROP TABLE IF EXISTS `pme_withdraw`;

CREATE TABLE `pme_withdraw` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
