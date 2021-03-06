import * as React from 'react';
import {
    List, Datagrid, NumberField, 
    DateField, TextField,Filter,TextInput,BooleanField,SelectInput

} from 'react-admin';

const UserFilter = (props:any) => (
    <Filter {...props}>
        <TextInput label="搜索：电话|用户名|邮箱" source="q" alwaysOn />
        {/* <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput> */}
    </Filter>
);


export const UserList = (props: any) => {
    return  (
        <List  filters={<UserFilter />} sort={{ field: 'id', order: 'DESC' }} {...props} >
            <Datagrid rowClick="edit" >
                <NumberField source="id" />
                <DateField source="updated_at" showTime />
                <TextField source="username" />
                <TextField source="mobile" />
                <BooleanField source="is_pass_set" />
                <BooleanField source="is_registerd" />
            </Datagrid>
        </List>
    );
}