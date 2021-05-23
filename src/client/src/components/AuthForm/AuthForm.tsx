import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import style from './AuthForm.scss';

export const AuthForm = () => {
    return (
        <>
            <form className={style.form} noValidate autoComplete="off">
                <TextField label="Login" variant="outlined" />
                <TextField label="Password" variant="outlined" />
                <Button variant="contained" color="secondary">
                    Login
                </Button>
            </form>
        </>
    )
}

AuthForm.displayName = 'AuthForm';