import * as React from 'react';
import {
    Create, TabbedForm, TextInput, FormTab, DateInput, NumberInput, BooleanInput, ReferenceManyField, Datagrid, TextField,
    FileInput, FileField, required, number, minValue, ReferenceInput, SelectInput, ReferenceArrayInput, AutocompleteArrayInput,
    SelectArrayInput, ImageInput, ImageField
} from 'react-admin';
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'


export const BuildingCreate = (props: any) => (
    <Create {...props}>
        <TabbedForm>
            <FormTab label="合同材料">
                <FileInput source="contract" accept="application/pdf">
                    <FileField source="src" title="title" />
                </FileInput>
                <FileInput source="documents" multiple accept="application/pdf">
                    <FileField source="src" title="title" />
                </FileInput>
                <TextInput source="breif" multiline />

            </FormTab>
            <FormTab label="基本信息">
                <TextInput source="name" validate={required()} />
                <TextInput source="alias_name" />
                <BooleanInput source="is_published" validate={required()} />
                <ReferenceInput source="firm_id" reference="firms"  >
                    <SelectInput optionText="name" optionValue="id" validate={required()} />
                </ReferenceInput>
                <TextInput source="sell_certificate" validate={required()} />
                <SelectArrayInput source="price_range" choices={[
                    { id: 'music', name: '0.6万以下' },
                    { id: 'photography', name: '0.6万-1万' },
                    { id: 'programming', name: '1万-1.5万' },
                    { id: 'tech', name: '1.5万-2万' },
                    { id: 'sport', name: '2万-2.5万' },
                    { id: 'sport', name: '2万-2.5万' },
                    { id: 'sport', name: '2.5万-3万' },
                    { id: 'sport', name: '3万以上' },
                ]} />
                <Typography>销售价格</Typography>
                <Divider></Divider>

                <Typography variant="caption">请选择一种价格作为小程序楼盘详情主页面展示信息</Typography>
                <SelectInput source="main_show_price_type" choices={[
                    { id: 'average_meters_price', name: '参考均价' },
                    { id: 'meters_price_start', name: '单价起价' },
                    { id: 'total_price', name: '参考总价' },
                    { id: 'total_price_start', name: '总价起价' },
                ]} />
                <NumberInput source="average_meters_price" />
                <NumberInput source="meters_price_start" />
                <NumberInput source="total_price" />
                <NumberInput source="total_price_start" />

                <Divider></Divider>
                <Typography>项目地址</Typography>
                <SelectInput source="from_area" choices={[
                    { id: 'programming', name: '金牛区' },
                    { id: 'lifestyle', name: '高新区' },
                    { id: 'good', name: '成华区 ' },
                    { id: 'ddd', name: '锦江区' },
                    { id: 'good', name: '眉山市 ' },
                ]} />
                <TextInput source="project_address" />
                <Divider></Divider>
                <TextInput source="sell_address" />
                <TextInput source="address_point" />
            </FormTab>
            <FormTab label="佣金方案">
                <TextInput source="lead_prize_type" />
                <TextInput source="trade_prize" label="成交奖" />
                <TextInput source="commission" label="佣金" />
                <TextInput source="report_rule" label="报备规则" />
                <TextInput source="lead_rule" label="带看规则" />
                <TextInput source="commission_rule" label="结佣规则" />
            </FormTab>
            <FormTab label="周边信息">
                <SelectInput source="building_type" choices={[
                    { id: "公寓", name: "公寓" }
                ]} />

                <DateInput label="delivery_time" source="delivery_time" />
                <NumberInput source="property_right_years" validate={[number(), minValue(0)]} />
                <NumberInput source="floor_area" validate={[number(), minValue(0)]} />
                <NumberInput source="covered_area" validate={[number(), minValue(0)]} />
                <NumberInput source="plot_ratio" validate={[number(), minValue(0)]} />
                <NumberInput source="green_ratio" validate={[number(), minValue(0)]} />
                <NumberInput source="car_house_ratio" validate={[number(), minValue(0)]} />
                <NumberInput source="building_type" validate={[number(), minValue(0)]} />
                <NumberInput source="house_types_count" validate={[number(), minValue(0)]} />
                <NumberInput source="house_type_areas" validate={[number(), minValue(0)]} />
                <TextInput source="building_intro" validate={[number(), minValue(0)]} />
                <TextInput source="nearby_subways" validate={[number(), minValue(0)]} />
                <TextInput source="nearby_schools" validate={[number(), minValue(0)]} />
                <TextInput source="nearby_business" validate={[number(), minValue(0)]} />
                <TextInput source="nearby_hospitals" validate={[number(), minValue(0)]} />
                <TextInput source="nearby_others" validate={[number(), minValue(0)]} />
                <TextInput source="buy_points" validate={[number(), minValue(0)]} />
            </FormTab>

            <FormTab label="物业信息">
                <TextInput source="property_management" />
            </FormTab>
            <FormTab label="图片信息">
                <ImageInput source="cover_picture"  accept="image/*">
                    <ImageField source="src" title="title" />
                </ImageInput>
                <ImageInput source="banner_pictures"  accept="image/*">
                    <ImageField source="src" title="title" />
                </ImageInput>
                <TextInput source="house_type_pictures" />
                
            </FormTab>
            <FormTab label="推荐设置">
                <BooleanInput  source="can_recommand_agency_list"  />
                <TextInput  source="can_recommand_agency_list_weight" />
                <BooleanInput  source="can_recommand_user_list"  />
                <TextInput  source="can_recommand_user_list_weight" />
                <BooleanInput  source="can_recommand_hot_buildings"  />
                <TextInput  source="can_recommand_hot_buildings_weight"  />
                <BooleanInput  source="can_recommand_high_commission"  />
                <TextInput  source="can_recommand_high_commission_weight"  />
                <TextInput  source="can_recommand_high_commission_reason"  />
            </FormTab>
            <FormTab label="人员配置">
                <ReferenceArrayInput source="zhuchang" reference="users" label="驻场管理人员">
                    <AutocompleteArrayInput optionText="username" />
                </ReferenceArrayInput>
                <ReferenceArrayInput source="fangkai" reference="users" label="房开人员">
                    <AutocompleteArrayInput optionText="username" />
                </ReferenceArrayInput>

            </FormTab>
        </TabbedForm>
    </Create>
);