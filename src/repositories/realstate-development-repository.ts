import { prisma } from "@/config";
import {
  RealStateDevelopment,
  RealStateDevelopmentImages,
} from "@prisma/client";

async function findRealStateDevelopments() {
  return await prisma.realStateDevelopment.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

async function findRealStateDevelopment(id: number) {
  return await prisma.realStateDevelopment.findFirst({
    where: {
      id,
    },
    include: {
      RealStateDevelopmentImages: {
        where: {
          realStateDevelopmentId: id,
        },
      },
    },
  });
}

async function createRealStateDevelopment(
  data: CreateRealStateDevelopmentParams
) {
  return await prisma.realStateDevelopment.create({
    data,
  });
}
export type CreateRealStateDevelopmentParams = Omit<
  RealStateDevelopment,
  "id" | "createdAt" | "updatedAt"
>;

async function createRealStateDevelopmentImage(
  data: CreateRealStateDevelopmentImageParams
) {
  return await prisma.realStateDevelopmentImages.create({
    data,
  });
}

export type CreateRealStateDevelopmentImageParams = Omit<
  RealStateDevelopmentImages,
  "id"
>;

const realStateDevelopmentRepository = {
  findRealStateDevelopments,
  findRealStateDevelopment,
  createRealStateDevelopment,
  createRealStateDevelopmentImage,
};

export default realStateDevelopmentRepository;
