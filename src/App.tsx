import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import dataProvider from "./dataProvider";
import users from "./users";
import dashboard from "./dashboard";
import authProvider from "./authProvider";
import polyglotI18nProvider from 'ra-i18n-polyglot';
import zhCnMessages from "./i18n/zh";
import roles from "./roles";
import firms from "./firms";
import userAgencyRelations from "./userAgency";
import agencyTeams from "./agencyTeams";
import userAchievements from "./userAchievements";
import { Layout, Login } from "./layout";
import orders from "./orders";
import firmCategories from "./firmCategories";
import buildings from "./buildings";
import houseUnitTypes from "./houseUnitTypes";
import houseUnits from "./houseUnits";
import teamAchievements from "./teamAchievements";
import userIncomes from "./userIncomes";
import userBalances from "./userBalances";


const i18nProvider = polyglotI18nProvider((locale:string) => {
  if (locale === 'en') {
      return import('./i18n/zh').then(messages => messages.default);
  }
  return zhCnMessages;
}, 'zh');


const App = () => {
  
  if (!dataProvider) {
    return (
        <div className="loader-container">
            <div className="loader">Loading...</div>
        </div>
    );
}
  return (<Admin dashboard={dashboard} dataProvider={dataProvider} authProvider={authProvider} layout={Layout}  i18nProvider={i18nProvider} loginPage={Login}>
  <Resource name="users" list={users.list} edit={users.edit}  create={users.create}/>
  <Resource name="roles" list={roles.list} edit={roles.edit} create={roles.create} />
  <Resource name="permissions" list={roles.list} edit={roles.edit} create={roles.create} />
  <Resource name="firms" list={firms.list} edit={firms.edit} create={firms.create} />
  <Resource name="user_agencies" list={userAgencyRelations.list} create={userAgencyRelations.create} />
  <Resource name="agency_teams" list={agencyTeams.list} edit={agencyTeams.edit} />
  <Resource name="user_achievements" list={userAchievements.list} create={userAchievements.create} />
  <Resource name="house_orders" list={orders.list} create={orders.create} />
  <Resource name="firm_categories" list={firmCategories.list} create={orders.create} />
  <Resource name="buildings" list={buildings.list} create={buildings.create} />
  <Resource name="house_unit_types" list={houseUnitTypes.list} create={houseUnitTypes.create} />
  <Resource name="house_units" list={houseUnits.list} create={houseUnits.create} />
  <Resource name="team_achievements" list={teamAchievements.list} create={houseUnits.create} />
  <Resource name="user_balance_incomes" list={userIncomes.list} create={houseUnits.create} />
  <Resource name="user_balances" list={userBalances.list} create={houseUnits.create} />
</Admin>)}

export default App;

