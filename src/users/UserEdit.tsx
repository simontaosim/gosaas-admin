import * as React from 'react';
import {
    Edit, SimpleForm, TextInput
} from 'react-admin';

export const UserEdit = (props:any) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="username" />
            <TextInput source="mobile" />
            <TextInput source="email" />
        </SimpleForm>
    </Edit>
);