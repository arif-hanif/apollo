import { StringFilter } from "../../util/StringFilter";
import { TicketWhereUniqueInput } from "./TicketWhereUniqueInput";
import { TicketListRelationFilter } from "./TicketListRelationFilter";

export type TicketWhereInput = {
  id?: StringFilter;
  test?: "Test";
  ticket?: TicketWhereUniqueInput;
  user?: TicketListRelationFilter;
};
