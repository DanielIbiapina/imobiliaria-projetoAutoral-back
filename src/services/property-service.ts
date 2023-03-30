import propertyRepository from "../repositories/property-repository";

async function getRecentProperties() {
  return await propertyRepository.getRecentProperties();
}

async function getDestaqueProperty() {
  return await propertyRepository.getDestaqueProperties();
}

const propertyService = {
  getRecentProperties,
  getDestaqueProperty,
};

export default propertyService;
