import { User } from "../user/User";

export type SupportTicket = {
  createdAt: Date;
  id: string;
  test?: Array<User>;
  updatedAt: Date;
};
