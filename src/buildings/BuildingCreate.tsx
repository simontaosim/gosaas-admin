import * as React from 'react';
import {
    Create, SimpleForm, TextInput, ReferenceInput, SelectInput
} from 'react-admin';



export const BuildingCreate = (props: any) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <TextInput source="name" />
            <TextInput multiline source="description"  />
            <ReferenceInput source="firm_id" reference="firms">
                <SelectInput optionText="name" />
            </ReferenceInput>

        </SimpleForm>
    </Create>
);