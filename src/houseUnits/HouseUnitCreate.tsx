import * as React from 'react';
import {
    Create, SimpleForm, TextInput, ReferenceInput, SelectInput,FormDataConsumer
} from 'react-admin';



export const HouseUnitCreate = (props: any) => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <TextInput source="location" />
            <TextInput source="description" />
            <TextInput source="unit_number" />
            <ReferenceInput source="building_id"  reference="buildings">
                <SelectInput optionText="name" />
            </ReferenceInput>
          
            <FormDataConsumer>
                {({ formData, ...rest }:any) =>
                {
                    if(formData.building_id){
                        return (
                            <ReferenceInput label="户型 "  source="house_unit_type_id" reference="house_unit_types" filter={{building_id: formData.building_id}}>
                            <SelectInput optionText="name" />
                        </ReferenceInput>
                        )
                    }
                }
                     
                }
            </FormDataConsumer>

        </SimpleForm>
    </Create>
);