import { prisma } from "@/config";
import { Property, PropertyFull } from "@prisma/client";

async function createProperty(data: CreatePropertyParams) {
  console.log(data);
  return await prisma.property.create({
    data,
  });
}
export type CreatePropertyParams = Omit<
  Property,
  "id" | "createdAt" | "updatedAt"
>;

async function createPropertyFull(data: CreatePropertyFullParams) {
  return await prisma.propertyFull.create({
    data,
  });
}

export type CreatePropertyFullParams = Omit<
  PropertyFull,
  "id" | "createdAt" | "updatedAt"
>;
const adminRepository = {
  createProperty,
  createPropertyFull,
};

export default adminRepository;
