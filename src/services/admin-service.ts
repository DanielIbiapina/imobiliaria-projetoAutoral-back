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

const adminService = {
  createProperty,
  createPropertyFull,
};

export default adminService;
