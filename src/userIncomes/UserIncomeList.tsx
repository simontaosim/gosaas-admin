import * as React from 'react';
import {
    List, Datagrid, NumberField, DateField, TextField,Filter,TextInput,ReferenceInput,SelectInput
} from 'react-admin';

const UserIncomeFilter = (props:any) => (
    <Filter {...props}>
        <TextInput label="搜索：角色名" source="q" alwaysOn />
        {/* <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput> */}
    </Filter>
);


export const UserIncomeList = (props: any) => {
    return  (
        <List  filters={<UserIncomeFilter />} sort={{ field: 'id', order: 'DESC' }} {...props} >
            <Datagrid rowClick="edit" >
                <NumberField source="id" />
                <DateField source="updated_at" showTime />
                <TextField source="fund" />
            </Datagrid>
        </List>
    );
}