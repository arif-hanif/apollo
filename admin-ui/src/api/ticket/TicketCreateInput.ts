import { TicketWhereUniqueInput } from "./TicketWhereUniqueInput";
import { TicketCreateNestedManyWithoutTicketsInput } from "./TicketCreateNestedManyWithoutTicketsInput";

export type TicketCreateInput = {
  ticket?: TicketWhereUniqueInput | null;
  user?: TicketCreateNestedManyWithoutTicketsInput;
};
