import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TICKET_TITLE_FIELD } from "./TicketTitle";

export const TicketList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Tickets"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="test" source="test" />
        <ReferenceField label="Ticket" source="ticket.id" reference="Ticket">
          <TextField source={TICKET_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};