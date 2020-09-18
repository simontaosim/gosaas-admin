import * as React from 'react';
import {
    Create, SimpleForm, TextInput, ReferenceInput, SelectInput
} from 'react-admin';



export const FirmCreate = (props: any) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <TextInput source="name" />
            <ReferenceInput source="firm_category_id" reference="firm_categories">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);