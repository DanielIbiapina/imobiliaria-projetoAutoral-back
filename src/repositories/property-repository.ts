import { prisma } from "@/config";

async function getRecentProperties() {
  return await prisma.property.findMany({
    take: 6,
    orderBy: {
      createdAt: "desc",
    },
  });
}

async function getDestaqueProperties() {
  return await prisma.property.findMany({
    take: 1,
    orderBy: {
      createdAt: "asc",
    },
  });
}

const propertyRepository = {
  getRecentProperties,
  getDestaqueProperties,
};

export default propertyRepository;
