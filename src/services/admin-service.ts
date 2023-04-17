import realStateDevelopmentRepository, {
  CreateRealStateDevelopmentImageParams,
  CreateRealStateDevelopmentParams,
} from "@/repositories/realstate-development-repository";
import adminRepository, {
  CreatePropertyParams,
  CreatePropertyFullParams,
} from "../repositories/admin-repository";

async function createProperty(data: CreatePropertyParams) {
  return await adminRepository.createProperty(data);
}

async function createPropertyFull(
  fullData: CreatePropertyFullParams,
  propertyId: number
) {
  fullData.propertyId = propertyId;
  return await adminRepository.createPropertyFull(fullData);
}

async function createRealStateDevelopment(
  data: CreateRealStateDevelopmentParams
) {
  return await realStateDevelopmentRepository.createRealStateDevelopment(data);
}

async function createRealStateDevelopmentImage(
  data: CreateRealStateDevelopmentImageParams
) {
  return await realStateDevelopmentRepository.createRealStateDevelopmentImage(
    data
  );
}

const adminService = {
  createProperty,
  createPropertyFull,
  createRealStateDevelopment,
  createRealStateDevelopmentImage,
};

export default adminService;
