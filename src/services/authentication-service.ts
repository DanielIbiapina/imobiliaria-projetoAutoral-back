import sessionRepository from "@/repositories/session-repository";
import userRepository from "@/repositories/user-repository";
import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function signIn(params: SignInParams): Promise<SignInResult> {
  const { email, password } = params;

  const user = await getUserOrFail(email);

  await validatePasswordOrFail(password, user.password);

  const token = await createSession(user.id);

  return {
    user: exclude(user, "password"),
    token,
  };
}

async function getUserOrFail(email: string): Promise<GetUserOrFailResult> {
  const user = await userRepository.findByEmail(email, {
    id: true,
    email: true,
    password: true,
  });
  if (!user) throw "email or password are incorrect";

  return user;
}

async function createSession(userId: number) {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET);
  await sessionRepository.create({
    token,
    userId,
  });

  return token;
}

async function validatePasswordOrFail(password: string, userPassword: string) {
  if (userPassword === "OAUTH_ONLY") return "email or password are incorrect";

  const isPasswordValid = await bcrypt.compare(password, userPassword);
  if (!isPasswordValid) throw "email or password are incorrect";
}

export type SignInParams = Pick<User, "email" | "password">;

type SignInResult = {
  user: Pick<User, "id" | "email">;
  token: string;
};

type GetUserOrFailResult = Pick<User, "id" | "email" | "password">;

function exclude<T, Key extends keyof T>(
  entity: T,
  ...keys: Key[]
): Omit<T, Key> {
  const newEntity = JSON.parse(JSON.stringify(entity));
  for (const key of keys) {
    delete newEntity[key];
  }
  return newEntity;
}

const authenticationService = {
  signIn,
};

export default authenticationService;
