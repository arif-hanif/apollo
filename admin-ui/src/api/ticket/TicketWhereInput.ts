import { StringFilter } from "../../util/StringFilter";
import { TicketWhereUniqueInput } from "./TicketWhereUniqueInput";
import { TicketListRelationFilter } from "./TicketListRelationFilter";

export type TicketWhereInput = {
  id?: StringFilter;
  ticket?: TicketWhereUniqueInput;
  user?: TicketListRelationFilter;
};
