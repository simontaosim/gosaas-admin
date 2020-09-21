import * as React from 'react';
import {
    Create, SimpleForm, TextInput, ReferenceInput, SelectInput
} from 'react-admin';



export const HouseUnitTypeCreate = (props: any) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <TextInput source="name" />
            <ReferenceInput source="building_id" reference="buildings">
                <SelectInput optionText="name" />
            </ReferenceInput>

        </SimpleForm>
    </Create>
);