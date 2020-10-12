
import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, withTypes } from 'react-final-form';
import { useLocation } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, Theme, useTheme } from '@material-ui/core/styles';
import LockIcon from '@material-ui/icons/Lock';

import { Notification } from 'react-admin';
import { useTranslate, useLogin, useNotify } from 'ra-core';
import { lightTheme } from './themes';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: any;
    value: any;
}

const useStyles = makeStyles(theme => ({
    main: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'flex-start',
        background: 'url(https://source.unsplash.com/random/1600x900)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    card: {
        minWidth: 300,
        marginTop: '6em',
    },
    avatar: {
        margin: '1em',
        display: 'flex',
        justifyContent: 'center',
    },
    icon: {
        backgroundColor: theme.palette.secondary.main,
    },
    hint: {
        marginTop: '1em',
        display: 'flex',
        justifyContent: 'center',
        color: theme.palette.grey[500],
    },
    form: {
        padding: '0 1em 1em 1em',
    },
    input: {
        marginTop: '1em',
    },
    actions: {
        padding: '0 1em 1em 1em',
    },
}));

const renderInput = ({
    meta: { touched, error } = { touched: false, error: undefined },
    input: { ...inputProps },
    ...props
}) => (
        <TextField
            error={!!(touched && error)}
            helperText={touched && error}
            {...inputProps}
            {...props}
            fullWidth
        />
    );

interface FormValues {
    username?: string;
    password?: string;
}

const { Form } = withTypes<FormValues>();
function a11yProps(index: any) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}
function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState(0)
    const translate = useTranslate();
    const classes = useStyles();
    const notify = useNotify();
    const login = useLogin();
    const theme = useTheme();

    const location = useLocation<{ nextPathname: string } | null>();


    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        console.log(newValue);

        setValue(newValue);
    };
    // const handleChangeIndex = (index: number) => {
    //     console.log(index);

    //     setValue(index);
    // };

    const handleSubmit = (auth: FormValues) => {
        setLoading(true);
        login(auth, location.state ? location.state.nextPathname : '/').catch(
            (error: Error) => {
                setLoading(false);
                notify(
                    typeof error === 'string'
                        ? error
                        : typeof error === 'undefined' || !error.message
                            ? 'ra.auth.sign_in_error'
                            : error.message,
                    'warning'
                );
            }
        );
    };

    const validate = (values: FormValues) => {
        const errors: FormValues = {};
        if (!values.username) {
            errors.username = translate('ra.validation.required');
        }
        if (!values.password) {
            errors.password = translate('ra.validation.required');
        }
        return errors;
    };

    return (
        <div>
            <AppBar color="default" position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="密码登录" {...a11yProps(0)} />
                    <Tab label="手机验证码登录" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
            // onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <Form
                        onSubmit={handleSubmit}
                        validate={validate}
                        render={({ handleSubmit }) => (
                            <form onSubmit={handleSubmit} noValidate>
                                <div className={classes.main}>
                                    <Card className={classes.card}>
                                        <div className={classes.avatar}>
                                            <Avatar className={classes.icon}>
                                                <LockIcon />
                                            </Avatar>
                                        </div>
                                        <div className={classes.form}>
                                            <div className={classes.input}>
                                                <Field
                                                    autoFocus
                                                    name="user_key"
                                                    // @ts-ignore
                                                    component={renderInput}
                                                    label={translate('ra.auth.username')}
                                                    disabled={loading}
                                                />
                                            </div>
                                            <div className={classes.input}>
                                                <Field
                                                    name="password"
                                                    // @ts-ignore
                                                    component={renderInput}
                                                    label={translate('ra.auth.password')}
                                                    type="password"
                                                    disabled={loading}
                                                />
                                            </div>

                                        </div>

                                        <CardActions className={classes.actions}>
                                            <Button
                                                variant="contained"
                                                type="submit"
                                                color="primary"
                                                disabled={loading}
                                                fullWidth
                                            >
                                                {loading && (
                                                    <CircularProgress
                                                        size={25}
                                                        thickness={2}
                                                    />
                                                )}
                                                {translate('ra.auth.sign_in')}
                                            </Button>
                                        </CardActions>
                                    </Card>
                                    <Notification />
                                </div>
                            </form>
                        )}
                    />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <Form
                        onSubmit={handleSubmit}
                        validate={validate}
                        render={({ handleSubmit }) => (
                            <form onSubmit={handleSubmit} noValidate>
                                <div className={classes.main}>
                                    <Card className={classes.card}>
                                        <div className={classes.avatar}>
                                            <Avatar className={classes.icon}>
                                                <LockIcon />
                                            </Avatar>
                                        </div>
                                        <div className={classes.form}>
                                            <div className={classes.input}>
                                                <Field
                                                    autoFocus
                                                    name="mobile"
                                                    // @ts-ignore
                                                    component={renderInput}
                                                    label={translate('ra.auth.mobile')}
                                                    disabled={loading}
                                                />
                                            </div>
                                            <div className={classes.input}>
                                                <Field
                                                    name="mobile_sms"
                                                    // @ts-ignore
                                                    component={renderInput}
                                                    label={translate('ra.auth.mobile_sms')}
                                                    disabled={loading}
                                                />
                                            </div>

                                        </div>

                                        <CardActions className={classes.actions}>
                                            <Button
                                                variant="contained"
                                                type="submit"
                                                color="primary"
                                                disabled={loading}
                                                fullWidth
                                            >
                                                {loading && (
                                                    <CircularProgress
                                                        size={25}
                                                        thickness={2}
                                                    />
                                                )}
                                                {translate('ra.auth.sign_in')}
                                            </Button>
                                        </CardActions>
                                    </Card>
                                    <Notification />
                                </div>
                            </form>
                        )}
                    />

                </TabPanel>

            </SwipeableViews>

        </div>

    );
};

Login.propTypes = {
    authProvider: PropTypes.func,
    previousRoute: PropTypes.string,
};

// We need to put the ThemeProvider decoration in another component
// Because otherwise the useStyles() hook used in Login won't get
// the right theme
const LoginWithTheme = (props: any) => (
    <ThemeProvider theme={createMuiTheme(lightTheme)}>
        <Login {...props} />
    </ThemeProvider>
);

export default LoginWithTheme;