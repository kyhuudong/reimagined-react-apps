import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import useStyles from './styles';
import { AUTH } from '../../constant/actionTypes'
import Input from './Input';
import Icon from './Icon';
import { signup, signin } from '../../actions/auth';


const initialState = { firstName: '', lastName: '', email: '', password: '', comfirmPassword: '' };

const Auth = () => {
    const classes = useStyles();
    const [isSignup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();


    const handleShowPassword = () => setShowPassword(!showPassword);
    const switchMode = () => {

        setIsSignup(prevIsSignUp => !prevIsSignUp);
        setShowPassword(false);
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignup) {
            dispatch(signup(formData, history));
        }
        else {
            dispatch(signin(formData, history));
        }
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;


        try {
            dispatch({ type: AUTH, data: { result, token } });

            history.push("/");
        } catch (error) {
            console.log(error)
        }
    }
    const googleError = () => alert('Google Sign In was unsuccessful. Try again later');

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {isSignup && (
                            <>
                                <Input name="firstName" label="First Name" autoFocus half handleChange={handleChange} />
                                <Input name="lastName" label="Last Name" half handleChange={handleChange} />
                            </>
                        )}
                        <Input name="email" label="Email" type="email" handleChange={handleChange} />
                        <Input name="password" label="password" type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} handleChange={handleChange} />
                        {isSignup && <Input name="comfirmPassword" label="Repeat password" handleChange={handleChange} type="password" />}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? "Sign Up" : "Sign In"}
                    </Button>
                    <GoogleLogin
                        clientId="985161569131-1vm8tfq94tr0lb4lso278112ljdlprqr.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                                Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleError}

                    />
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup ? "Already have an account ? Sign In" : "Don't have an account ? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>

            </Paper>
        </Container>
    )
}

export default Auth
