/*
  Warnings:

  - You are about to drop the column `id_product` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `product_name` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `Order` table. All the data in the column will be lost.
  - Added the required column `total_price` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_quantity` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Order" DROP CONSTRAINT "Order_id_product_fkey";

-- AlterTable
ALTER TABLE "public"."Order" DROP COLUMN "id_product",
DROP COLUMN "price",
DROP COLUMN "product_name",
DROP COLUMN "quantity",
DROP COLUMN "size",
ADD COLUMN     "total_price" INTEGER NOT NULL,
ADD COLUMN     "total_quantity" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "public"."Category" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Item_Order" (
    "id" SERIAL NOT NULL,
    "id_product" INTEGER,
    "product_name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "size" TEXT NOT NULL,

    CONSTRAINT "Item_Order_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Item_Order" ADD CONSTRAINT "Item_Order_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "public"."Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
