import { prisma } from "@/config";
import { Messages } from "@prisma/client";

async function createMessage(data: CreateMessagesParams) {
  return await prisma.messages.create({
    data,
  });
}
export type CreateMessagesParams = Omit<
  Messages,
  "id" | "createdAt" | "updatedAt"
>;

async function findMessage() {
  return await prisma.messages.findMany({});
}

const messagesRepository = {
  createMessage,
  findMessage,
};

export default messagesRepository;
