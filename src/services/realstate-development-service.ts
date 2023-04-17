import realStateDevelopmentRepository from "@/repositories/realstate-development-repository";

async function getRealStateDevelopments() {
  return await realStateDevelopmentRepository.findRealStateDevelopments();
}

async function getRealStateDevelopment(id: number) {
  return await realStateDevelopmentRepository.findRealStateDevelopment(id);
}

const realStateDevelopmentService = {
  getRealStateDevelopments,
  getRealStateDevelopment,
};

export default realStateDevelopmentService;
