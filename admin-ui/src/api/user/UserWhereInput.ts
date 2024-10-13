import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SupportTicketWhereUniqueInput } from "../supportTicket/SupportTicketWhereUniqueInput";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  supportTicket?: SupportTicketWhereUniqueInput;
  test?: StringNullableFilter;
  username?: StringFilter;
};
