import propertyRepository from "../repositories/property-repository";

async function getRecentProperties() {
  return await propertyRepository.getRecentProperties();
}

async function getDestaqueProperty() {
  return await propertyRepository.getDestaqueProperties();
}
async function getProperty(id: number) {
  return await propertyRepository.getProperty(id);
}

const propertyService = {
  getRecentProperties,
  getDestaqueProperty,
  getProperty,
};

export default propertyService;
