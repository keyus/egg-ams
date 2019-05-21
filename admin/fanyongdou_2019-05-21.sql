# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.21)
# Database: fanyongdou
# Generation Time: 2019-05-21 09:22:10 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


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
	(1,'fdsafdsa',NULL,'',0,NULL,NULL,0,NULL,4,NULL,50,'2019-04-25 19:03:53','2019-04-25 19:03:53');

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
	(6,'<p><br></p>','2019-04-25 19:04:50','2019-04-25 19:04:50');

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
  `isBindPay` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否绑定支付信息',
  `hasAccount` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否已有交易商账号',
  `idcard_img1` varchar(200) DEFAULT NULL COMMENT '身份证正面照片链接',
  `idcard_img2` varchar(200) DEFAULT NULL COMMENT '身份证反面照片链接',
  `name` varchar(11) DEFAULT NULL COMMENT '真实姓名',
  `money` decimal(18,2) NOT NULL DEFAULT '0.00' COMMENT '返佣账户余额',
  `status` tinyint(11) NOT NULL DEFAULT '1' COMMENT '账号状态，是否正常0,禁用，1启用',
  `sorter` int(11) NOT NULL DEFAULT '50',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `pme_member` WRITE;
/*!40000 ALTER TABLE `pme_member` DISABLE KEYS */;

INSERT INTO `pme_member` (`id`, `phone`, `password`, `idCard`, `isBindPay`, `hasAccount`, `idcard_img1`, `idcard_img2`, `name`, `money`, `status`, `sorter`, `create_time`, `update_time`)
VALUES
	(1,'15802816168','kjfkdal','518377282899991918',0,0,NULL,NULL,'中不中',18873.00,1,50,'2019-05-21 13:13:34','2019-05-21 13:13:34'),
	(2,'15802817170','111111',NULL,0,0,NULL,NULL,NULL,0.00,1,50,'2019-05-21 15:21:39','2019-05-21 15:21:39'),
	(4,'15802816169','96e79218965eb72c92a549dd5a330112',NULL,0,0,NULL,NULL,NULL,0.00,1,50,'2019-05-21 15:28:43','2019-05-21 15:28:43'),
	(5,'13679282828','96e79218965eb72c92a549dd5a330112',NULL,0,0,NULL,NULL,NULL,0.00,0,50,'2019-05-21 15:59:26','2019-05-21 15:59:26');

/*!40000 ALTER TABLE `pme_member` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table pme_member_account
# ------------------------------------------------------------

DROP TABLE IF EXISTS `pme_member_account`;

CREATE TABLE `pme_member_account` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `account` varchar(30) NOT NULL DEFAULT '' COMMENT '交易账号',
  `pme_id` int(11) NOT NULL COMMENT '交易商ID',
  `member_id` int(11) NOT NULL COMMENT '会员ID',
  `account_name` int(11) DEFAULT NULL COMMENT '账号姓名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



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
	(1,'中进大宗',NULL,'www.zj.com',NULL,'5','中国 ','即时',NULL,NULL,NULL,NULL,NULL,NULL,50,'2019-05-20 14:29:39','2019-05-20 14:29:39'),
	(4,'kissabc','http://localhost:7002/public/upload/images/5b6bd5ea5b99328efaf30f1e8144257e.gif','fds','gfds','gf','eg','trew','trew','trew','trw','tr','tre','ter',4343,'2019-05-20 19:33:48','2019-05-20 19:33:48');

/*!40000 ALTER TABLE `pme_platform` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table pme_platform_product
# ------------------------------------------------------------

DROP TABLE IF EXISTS `pme_platform_product`;

CREATE TABLE `pme_platform_product` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '' COMMENT '平台产品名称',
  `pme_id` int(11) NOT NULL COMMENT '交易商ID',
  `diff` int(11) DEFAULT NULL COMMENT '点差',
  `maxTrade` int(11) DEFAULT NULL COMMENT '最大交易量',
  `handlingFree` varchar(11) DEFAULT NULL COMMENT '交易手续费',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



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



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
