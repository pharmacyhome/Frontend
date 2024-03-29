import React, { useState, useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import style from './AuthForm.scss';
import { setAuthData } from '../../ducks/auth/authSlice';
import { useDispatch } from 'react-redux';


export const AuthForm = () => {

   const [ login, setLogin] = useState ('');
   const [ password, setPassword] = useState ('');
   const dispatch = useDispatch();

   const handleButtonClick = useCallback (
       () => {
         dispatch(setAuthData({login, password}));  
       }, [dispatch, login, password],
    );

    return (
        <>
            <form className={style.form} noValidate autoComplete="off">
                <TextField  
                    label="Login" 
                    variant="outlined" 
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}/>
                <TextField  
                    label="Password" 
                    variant="outlined" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                    <Button onClick={handleButtonClick} variant="contained" color="secondary">
                    Login
                </Button>
            </form>
        </>
    )
}

AuthForm.displayName = 'AuthForm';