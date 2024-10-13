import { JsonValue } from "type-fest";
import { SupportTicket } from "../supportTicket/SupportTicket";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  supportTicket?: SupportTicket | null;
  test: string | null;
  updatedAt: Date;
  username: string;
};
