/*
  Warnings:

  - You are about to drop the column `roleTypeId` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `usertype` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_roleTypeId_fkey`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `roleTypeId`,
    ADD COLUMN `role` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `usertype`;
