import { InputJsonValue } from "../../types";
import { SupportTicketWhereUniqueInput } from "../supportTicket/SupportTicketWhereUniqueInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  supportTicket?: SupportTicketWhereUniqueInput | null;
  test?: string | null;
  username?: string;
};
