import * as React from 'react';
import {
    List, Datagrid, NumberField, DateField, TextField,Filter,TextInput,ReferenceInput,SelectInput
} from 'react-admin';

const FirmFilter = (props:any) => (
    <Filter {...props}>
        <TextInput label="搜索：企业名" source="q" alwaysOn />
       
    </Filter>
);


export const FirmList = (props: any) => {
    return  (
        <List  filters={<FirmFilter />} sort={{ field: 'id', order: 'DESC' }} {...props} >
            <Datagrid rowClick="edit" >
                <NumberField source="id" />
                <DateField source="updated_at" showTime />
                <TextField source="name" />
            </Datagrid>
        </List>
    );
}