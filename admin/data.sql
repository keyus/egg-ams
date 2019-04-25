# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.21)
# Database: fanyongdou
# Generation Time: 2019-04-25 10:07:16 +0000
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
  `intro` varchar(100) NOT NULL,
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



# Dump of table pme_cat
# ------------------------------------------------------------

DROP TABLE IF EXISTS `pme_cat`;

CREATE TABLE `pme_cat` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(11) NOT NULL DEFAULT '50',
  `is_nav` tinyint(1) NOT NULL DEFAULT '0',
  `is_list` tinyint(1) NOT NULL DEFAULT '0',
  `banner` int(11) DEFAULT NULL,
  `content_id` int(11) DEFAULT NULL,
  `sorter` int(11) DEFAULT '50',
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



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
