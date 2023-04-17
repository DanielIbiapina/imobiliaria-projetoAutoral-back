import messagesRepository, {
  CreateMessagesParams,
} from "@/repositories/messages-repository";

async function getMessages() {
  return await messagesRepository.findMessage();
}

async function postMessage(data: CreateMessagesParams) {
  return await messagesRepository.createMessage(data);
}

const messagesService = {
  getMessages,
  postMessage,
};

export default messagesService;
