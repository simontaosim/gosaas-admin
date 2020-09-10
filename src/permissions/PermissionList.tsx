import * as React from 'react';
import {
    List, Datagrid, NumberField, DateField, TextField,Filter,TextInput,ReferenceInput,SelectInput
} from 'react-admin';

const PermissionFilter = (props:any) => (
    <Filter {...props}>
        <TextInput label="搜索：电话|用户名|邮箱" source="q" alwaysOn />
        {/* <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput> */}
    </Filter>
);


export const PermissionList = (props: any) => {
    return  (
        <List  filters={<PermissionFilter />} sort={{ field: 'id', order: 'DESC' }} {...props} >
            <Datagrid rowClick="edit" >
                <NumberField source="id" />
                <DateField source="updated_at" showTime />
                <TextField source="name" />
            </Datagrid>
        </List>
    );
}