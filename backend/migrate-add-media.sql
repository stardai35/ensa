-- Update database schema untuk menambah image dan video
USE suzzxrkz_ensisa;

-- Alter content table untuk tambah image & video
ALTER TABLE `content` ADD COLUMN `image_url` VARCHAR(255) AFTER `slug`;
ALTER TABLE `content` ADD COLUMN `video_url` VARCHAR(255) AFTER `image_url`;
ALTER TABLE `content` ADD COLUMN `description` VARCHAR(500) AFTER `video_url`;

-- Verify
DESCRIBE content;
SELECT * FROM content;
