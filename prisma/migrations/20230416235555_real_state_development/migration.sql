-- CreateTable
CREATE TABLE "RealStateDevelopment" (
    "id" SERIAL NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RealStateDevelopment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RealStateDevelopmentImages" (
    "id" SERIAL NOT NULL,
    "realStateDevelopmentId" INTEGER NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "RealStateDevelopmentImages_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RealStateDevelopmentImages" ADD CONSTRAINT "RealStateDevelopmentImages_realStateDevelopmentId_fkey" FOREIGN KEY ("realStateDevelopmentId") REFERENCES "RealStateDevelopment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
