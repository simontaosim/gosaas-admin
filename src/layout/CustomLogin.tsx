import React, { useReducer, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';
import { useLogin, useNotify } from 'ra-core';
import { useTheme } from '@material-ui/core/styles';

import { Notification } from 'react-admin';



import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import authProvider from '../authProvider';

interface FormValues {
    username?: string;
    password?: string;
}

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: any;
    value: any;
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

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://zhujietong.com/">
                zhuejitong.com
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function a11yProps(index: any) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}
let couter: any = null;
let countDown = 60;
export default function CustomLogin() {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [loading, setLoading] = useState(false);
    const [formState, dispath] = useReducer((state: any, action: any) => {
        switch (action.type) {
            case "change":
                return {
                    ...state,
                    ...action.payload,
                };

            default:
                return state;
        }
    }, {
        type: "password",
        userkey: "",
        password: "",
        mobile: "",
        mobile_sms: ""
    });
    const notify = useNotify();
    const login = useLogin();
    const theme = useTheme();
    const location = useLocation<{ nextPathname: string } | null>();
    const [countDownText, setCountDownText] = useState("获取验证码");
    const [countDownDisAbled, setCountDownDisAbled] = useState(false);


    const handleTabsChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
        if(newValue === 0) {
            dispath({
                type: "change",
                payload: {
                    type: "password"
                }
            })
        }
        if(newValue === 1){
            dispath({
                type: "change",
                payload: {
                    type: "mobile_sms"
                }
            })
        }

    };


    const handleRquiredSMSClick = (event: React.MouseEvent<{}>) => {
        setCountDownDisAbled(true);
        setCountDownText(`${countDown}后重新获取`);
        couter = setInterval(() => {
            setCountDownText(`${countDown}后重新获取`);
            countDown--;
            if (countDown === 0) {
                clearInterval(couter)
                setCountDownText(`获取验证码`)
                setCountDownDisAbled(false)
                countDown = 60

            }
        }, 1000)
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();
        setLoading(true);
        authProvider.login(formState).catch(
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

    console.log(formState);
    

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        登录助捷通平台
                    </Typography>
                    <br />
                    <AppBar color="default" position="static">
                        <Tabs
                            value={value}
                            onChange={handleTabsChange}
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
                            <form onSubmit={e => handleSubmit(e)} className={classes.form} noValidate>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    disabled={loading}
                                    fullWidth
                                    id="userkey"
                                    label="用户名 | 手机号 | 邮箱"
                                    name="user-key"
                                    autoFocus
                                    value={formState.userkey}
                                    onChange={e => dispath({
                                        type: "change",
                                        payload: {
                                            userkey: e.target.value
                                        }
                                    })}
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    disabled={loading}

                                    name="password"
                                    label="密码"
                                    type="password"
                                    id="password"
                                    value={formState.password}
                                    onChange={e => dispath({
                                        type: "change",
                                        payload: {
                                            password: e.target.value
                                        }
                                    })}
                                />

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    disabled={loading}

                                >
                                    登录
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            忘记密码
                                </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="#" variant="body2">
                                            {"注册"}
                                        </Link>
                                    </Grid>
                                </Grid>
                                <Box mt={5}>
                                    <Copyright />
                                </Box>
                            </form>
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            <form onSubmit={e=> handleSubmit(e)} className={classes.form} noValidate>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    disabled={loading}

                                    id="mobile"
                                    label="手机号 "
                                    name="mobile"
                                    autoFocus
                                    value={formState.mobile}
                                    onChange={e => dispath({
                                        type: "change",
                                        payload: {
                                            mobile: e.target.value
                                        }
                                    })}
                                /><Button onClick={handleRquiredSMSClick} disabled={countDownDisAbled} variant="contained" color="primary" size="small">
                                    {countDownText}
                                </Button>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    disabled={loading}

                                    fullWidth
                                    name="password"
                                    label="验证码"
                                    type="password"
                                    id="password"
                                    value={formState.mobile_sms}
                                    onChange={e => dispath({
                                        type: "change",
                                        payload: {
                                            mobile_sms: e.target.value
                                        }
                                    })}
                                />

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    disabled={loading}

                                >
                                    登录
            </Button>

                                <Box mt={5}>
                                    <Copyright />
                                </Box>
                            </form>
                        </TabPanel>
                    </SwipeableViews>
                    <Notification />
                </div>
            </Grid>
        </Grid>
    );
}