import * as React from 'react';
import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import SettingsIcon from '@material-ui/icons/Settings';
import { useMediaQuery, Theme } from '@material-ui/core';
import { useTranslate, DashboardMenuItem, MenuItemLink } from 'react-admin';

import SubMenu from './SubMenu';
import { AppState } from '../types';
import buildings from '../buildings';
import houseUnitTypes from '../houseUnitTypes';
import houseUnits from '../houseUnits';
import agencyTeams from '../agencyTeams';
import userAgency from '../userAgency';
import orders from '../orders';
import userAchievements from '../userAchievements';
import MoneyIcon from '@material-ui/icons/Money';
import users from '../users';
import permissions from '../permissions';
import roles from '../roles';
import firms from '../firms';
import firmCategories from '../firmCategories';
type MenuName = 'menuBuildings' | 'agencyTeams' | 'orders' | 'moneyMenu' | 'permissionMenu' | 'firmMenu';

interface Props {
    dense: boolean;
    logout: () => void;
    onMenuClick: () => void;
}

const Menu: FC<Props> = ({ onMenuClick, dense, logout }) => {
    const [state, setState] = useState({
        menuBuildings: false,
        agencyTeams: false,
        orders: false,
        moneyMenu: false,
        permissionMenu: false,
        firmMenu: false,
    });
    const translate = useTranslate();
    const isXSmall = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('xs')
    );
    const open = useSelector((state: AppState) => state.admin.ui.sidebarOpen);
    useSelector((state: AppState) => state.theme); // force rerender on theme change

    const handleToggle = (menu: MenuName) => {
        setState(state => ({ ...state, [menu]: !state[menu] }));
    };

    return (
        <div>
            {' '}
            <DashboardMenuItem onClick={onMenuClick} sidebarIsOpen={open} />
             <MenuItemLink
                to={`/users`}
                primaryText={translate(`resources.users.name`, {
                    smart_count: 2,
                })}
                leftIcon={<users.icon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
                dense={dense}
            />
            <SubMenu
                handleToggle={() => handleToggle('menuBuildings')}
                isOpen={state.menuBuildings}
                sidebarIsOpen={open}
                name="pos.menu.buildings"
                icon={<buildings.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to={`/buildings`}
                    primaryText={translate(`resources.buildings.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<buildings.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                <MenuItemLink
                    to={`/house_unit_types`}
                    primaryText={translate(`resources.house_unit_types.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<houseUnitTypes.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />

                <MenuItemLink
                    to={`/house_units`}
                    primaryText={translate(`resources.house_units.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<houseUnits.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            </SubMenu>
            <SubMenu
                handleToggle={() => handleToggle('agencyTeams')}
                isOpen={state.agencyTeams}
                sidebarIsOpen={open}
                name="pos.menu.agencyTeams"
                icon={<agencyTeams.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to={`/agency_teams`}
                    primaryText={translate(`resources.agency_teams.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<agencyTeams.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                <MenuItemLink
                    to={`/user_agencies`}
                    primaryText={translate(`resources.user_agencies.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<userAgency.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            </SubMenu>
            <SubMenu
                handleToggle={() => handleToggle('orders')}
                isOpen={state.orders}
                sidebarIsOpen={open}
                name="pos.menu.orders"
                icon={<orders.icon />}
                dense={dense}
            >
                <MenuItemLink
                    to={`/house_orders`}
                    primaryText={translate(`resources.house_orders.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<orders.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                <MenuItemLink
                    to={`/user_achievements`}
                    primaryText={translate(`resources.user_achievements.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<userAchievements.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                 <MenuItemLink
                    to={`/team_achievements`}
                    primaryText={translate(`resources.team_achievements.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<userAchievements.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            </SubMenu>
            <SubMenu
                handleToggle={() => handleToggle('moneyMenu')}
                isOpen={state.moneyMenu}
                sidebarIsOpen={open}
                name="pos.menu.moneyMenu"
                icon={<MoneyIcon/>}
                dense={dense}
            >
                <MenuItemLink
                    to={`/user_income_bills`}
                    primaryText={translate(`resources.user_income_bills.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<orders.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                <MenuItemLink
                    to={`/user_balances`}
                    primaryText={translate(`resources.user_balances.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<userAchievements.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            </SubMenu>
            

            <SubMenu
                handleToggle={() => handleToggle('firmMenu')}
                isOpen={state.firmMenu}
                sidebarIsOpen={open}
                name="pos.menu.firmMenu"
                icon={<firms.icon/>}
                dense={dense}
            >
                <MenuItemLink
                    to={`/firms`}
                    primaryText={translate(`resources.firms.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<orders.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                <MenuItemLink
                    to={`/firm_categories`}
                    primaryText={translate(`resources.firm_categories.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<firmCategories.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            </SubMenu>
            <SubMenu
                handleToggle={() => handleToggle('permissionMenu')}
                isOpen={state.permissionMenu}
                sidebarIsOpen={open}
                name="pos.menu.permissionMenu"
                icon={<permissions.icon/>}
                dense={dense}
            >
                <MenuItemLink
                    to={`/roles`}
                    primaryText={translate(`resources.roles.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<roles.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
                <MenuItemLink
                    to={`/permissions`}
                    primaryText={translate(`resources.permissions.name`, {
                        smart_count: 2,
                    })}
                    leftIcon={<userAchievements.icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            </SubMenu>
            {/* <MenuItemLink
                to={`/reviews`}
                primaryText={translate(`resources.reviews.name`, {
                    smart_count: 2,
                })}
                leftIcon={<reviews.icon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
                dense={dense}
            /> */}
            {isXSmall && (
                <MenuItemLink
                    to="/configuration"
                    primaryText={translate('pos.configuration')}
                    leftIcon={<SettingsIcon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            )}
            {isXSmall && logout}
        </div>
    );
};

export default Menu;