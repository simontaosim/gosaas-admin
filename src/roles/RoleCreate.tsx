import * as React from 'react';
import {
    Create, SimpleForm, TextInput, ReferenceInput, SelectInput
} from 'react-admin';



export const RoleCreate = (props:any) => (
    <Create {...props}>
        <SimpleForm   redirect="list">
            <TextInput source="name"  />
            <ReferenceInput source="firm_id" reference="firms">
                <SelectInput optionText="name" optionValue="id" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);