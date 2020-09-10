import * as React from 'react';
import {
    Create, SimpleForm, TextInput
} from 'react-admin';



export const PermissionCreate = (props:any) => (
    <Create {...props}>
        <SimpleForm   redirect="list">
            <TextInput source="name"  />
        </SimpleForm>
    </Create>
);