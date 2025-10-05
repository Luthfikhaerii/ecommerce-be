/*
  Warnings:

  - Added the required column `id_order` to the `Item_Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Item_Order" ADD COLUMN     "id_order" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Item_Order" ADD CONSTRAINT "Item_Order_id_order_fkey" FOREIGN KEY ("id_order") REFERENCES "public"."Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;
