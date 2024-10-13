import { TicketWhereUniqueInput } from "./TicketWhereUniqueInput";
import { TicketCreateNestedManyWithoutTicketsInput } from "./TicketCreateNestedManyWithoutTicketsInput";

export type TicketCreateInput = {
  test?: "Test" | null;
  ticket?: TicketWhereUniqueInput | null;
  user?: TicketCreateNestedManyWithoutTicketsInput;
};
