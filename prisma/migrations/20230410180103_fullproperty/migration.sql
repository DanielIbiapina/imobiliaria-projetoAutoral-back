-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "price" VARCHAR(255);

-- CreateTable
CREATE TABLE "PropertyFull" (
    "id" SERIAL NOT NULL,
    "propertyId" INTEGER NOT NULL,
    "laundry" INTEGER,
    "elevator" INTEGER,
    "description" TEXT,
    "balcony" INTEGER,

    CONSTRAINT "PropertyFull_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PropertyFull" ADD CONSTRAINT "PropertyFull_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
