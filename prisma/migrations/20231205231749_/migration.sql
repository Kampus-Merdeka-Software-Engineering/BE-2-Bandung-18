/*
  Warnings:

  - You are about to alter the column `price` on the `Menu` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Int`.

*/
-- AlterTable
ALTER TABLE `Menu` MODIFY `price` INTEGER NOT NULL;
