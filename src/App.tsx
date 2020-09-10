import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import dataProvider from "./dataProvider";
import users from "./users";
import dashboard from "./dashboard";
import authProvider from "./authProvider";
import englishMessages from "ra-language-english";
import polyglotI18nProvider from 'ra-i18n-polyglot';
import zhCnMessages from "./i18n/zh";


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
  return (<Admin dashboard={dashboard} dataProvider={dataProvider} authProvider={authProvider}  i18nProvider={i18nProvider}>
  <Resource name="users" list={users.list} edit={users.edit}  create={users.create}/>
  <Resource name="roles" list={users.list} edit={EditGuesser} />
</Admin>)}

export default App;

