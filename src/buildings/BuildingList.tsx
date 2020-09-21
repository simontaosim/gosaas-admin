import * as React from 'react';
import {
    List, Datagrid, NumberField, DateField, TextField,Filter,TextInput,ReferenceField,SelectInput
} from 'react-admin';

const BuildingFilter = (props:any) => (
    <Filter {...props}>
        <TextInput label="搜索：企业名" source="q" alwaysOn />
       
    </Filter>
);


export const BuildingList = (props: any) => {
    return  (
        <List  filters={<BuildingFilter />} sort={{ field: 'id', order: 'DESC' }} {...props} >
            <Datagrid rowClick="edit" >
                <NumberField source="id" />
                <DateField source="updated_at" showTime />
                <TextField source="name" />
                <ReferenceField source="firm_id" reference="firms">
                    <TextField source="name" />
                </ReferenceField>
            </Datagrid>
        </List>
    );
}