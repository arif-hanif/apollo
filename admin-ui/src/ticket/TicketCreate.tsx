import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  ReferenceInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TicketTitle } from "./TicketTitle";

export const TicketCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="test"
          label="test"
          choices={[{ label: "test", value: "Test" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="ticket.id" reference="Ticket" label="Ticket">
          <SelectInput optionText={TicketTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="user" reference="Ticket">
          <SelectArrayInput
            optionText={TicketTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
