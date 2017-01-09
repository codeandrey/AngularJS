CREATE TABLE IF NOT EXISTS `invoice` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `contry` VARCHAR(255) ,
  `company` VARCHAR(255) ,
  `invnumber` INT(10),
  `invoicedate` date NOT NULL,
  `dliverydate` date DEFAULT NULL,
  'order' text,
  'ref' text,
  'accountnumber' INT(10),
  'currecy' VARCHAR(3),
  `status` INT(1) UNSIGNED NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;