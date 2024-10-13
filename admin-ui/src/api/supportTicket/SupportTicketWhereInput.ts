import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type SupportTicketWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  test?: UserListRelationFilter;
};
