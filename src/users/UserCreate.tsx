import * as React from 'react';
import {
    Create, SimpleForm, TextInput, email, required,
    minLength,
    maxLength,
    minValue,
    maxValue,
} from 'react-admin';

const validateEmail = [email(), required()];
const validateFirstName = [required(), minLength(2), maxLength(15)];

const validateUserCreation = async  (values:any) => {
    console.log(values);

    
    
    const errors:any = {};
    if (!values.username) {
        errors.username = ['The firstName is required'];
    }
    if (!values.age) {
        errors.age = ['The age is required'];
    } else if (values.age < 18) {
        errors.age = ['Must be over 18'];
    }
    return errors
};

export const UserCreate = (props:any) => (
    <Create {...props}>
        <SimpleForm >
            <TextInput source="username"  />
            <TextInput source="mobile"   />
            <TextInput source="email"  />
        </SimpleForm>
    </Create>
);