-- Create Database
CREATE DATABASE IF NOT EXISTS suzzxrkz_ensisa;
USE suzzxrkz_ensisa;

-- Category Table
CREATE TABLE IF NOT EXISTS `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Content Table
CREATE TABLE IF NOT EXISTS `content` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cat_id` int(11) NOT NULL,
  `title_id` int(11) NOT NULL,
  `year` varchar(50) NOT NULL,
  `text` longtext NOT NULL,
  `slug` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cat_id` (`cat_id`),
  FOREIGN KEY (`cat_id`) REFERENCES `category` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- Insert Sample Categories
INSERT INTO `category` (`name`, `slug`) VALUES
(1, 'Pengarang', 'Pengarang'),
(2, 'Karya Sastra', 'Karya_Sastra'),
(3, 'Media Penyebar/Penerbit Sastra', 'Media_Penyebar_Penerbit_Sastra'),
(4, 'Hadiah/Sayembara Sastra', 'Hadiah_Sayembara_Sastra'),
(5, 'Lembaga Sastra', 'Lembaga_Sastra'),
(6, 'Gejala Sastra', 'Gejala_Sastra');
