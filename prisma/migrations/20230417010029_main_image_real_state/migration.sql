/*
  Warnings:

  - Added the required column `mainImage` to the `RealStateDevelopment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RealStateDevelopment" ADD COLUMN     "mainImage" TEXT NOT NULL;
