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
    /*orderBy: {
      createdAt: "asc",
    },*/
    where: {
      id: 32,
    },
  });
}

async function getProperty(id: number) {
  return await prisma.property.findFirst({
    where: {
      id,
    },
    include: {
      PropertyFull: {
        where: {
          propertyId: id,
        },
      },
    },
  });
}

const propertyRepository = {
  getRecentProperties,
  getDestaqueProperties,
  getProperty,
};

export default propertyRepository;
