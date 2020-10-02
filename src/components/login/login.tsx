import React, {FormEvent, useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import axios, {AxiosResponse} from 'axios';

const useStyles = makeStyles({
    amal: {
        color: '#FFFFFF',
        fontSize: '100px',
        lineHeight: '119px',
        textAlign: 'center',
        paddingTop: '40px'
    },
    mask: {
        backgroundImage: 'linear-gradient(180deg, #3A5673 0%, #51B9CD 100%)',
        borderRadius: '14px 0 0 14px',
        boxShadow: '0 2px 5px 0 rgba(83, 97, 255, 0.05)',
        height: '200px'
    }, container: {
        width: '80%',
        height: '80%',
        fontFamily: 'SFCompactDisplay',
        backgroundColor: '#F0F3F8',
        borderRadius: '14px',
        boxShadow: '0 31px 43px 0 rgba(52, 61, 160, 0.16)',
        marginLeft: '10%'
    }, button: {
        backgroundColor: '#3A5673',
        color: '#FFFFFF',
        borderRadius: '8px',
        fontSize: '24px',
        letterSpacing: '-0.15px',
        lineHeight: '28.64px',
        height: '50px',
        width: '278px',
        marginTop: '50px',
        marginLeft: '2%',
        marginBottom: '15px'
    }, input: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        border: ' 1px solid #6D7278',
        height: '30px',
        width: '312px'
    }, form: {
        marginLeft: '40%'
    }, loginBanner: {
        color: '#51516B',
        fontSize: '36px',
        letterSpacing: '-0.22px',
        lineHeight: '42.96px',
        marginBottom: '0'
    }, label: {
        color: '#51516B',
        fontSize: '24px',
        letterSpacing: '-0.15px',
        lineHeight: '28.64px',
        marginBottom: '1px'
    }, error: {
        color: 'red',
        marginTop: '15px',
        marginLeft: '-3%',
        textAlign: 'center',
        display: 'inline-block',
        fontSize: '24px'
    }
});

interface AuthenticationResponse {
    token: string;
}


const Login: React.FC = () => {
    const initialState = {
        token: '',
        error: false
    };

    const [state, stateSetter] = useState(initialState);

    const loginHandler = (event: FormEvent) => {
        event.preventDefault();
        const data = new FormData(event.target as HTMLFormElement);
        axios.post('http://localhost:8082/v1/api/login', {
            email: data.get('email'),
            password: data.get('password'),
            phone_number: ''
        }, {
            headers: {
                'Content-Type' : 'application/json'
            }
        }).then((response: AxiosResponse<AuthenticationResponse>) => {
            console.log(response);
            stateSetter({
                token: response.data.token,
                error: false
            });
        }).catch(error => {
            console.log(error);
            stateSetter({
                token: '',
                error: true
            });
        })
    };


    const classes = useStyles();
    const errorMessage = state.error ? <p className={classes.error}> username/password doesn't match</p> : null;
    return (
        <div className={classes.container}>
            <div className={classes.mask}>
                <p className={classes.amal}>AMAL</p>
            </div>
            <form className={classes.form} onSubmit={loginHandler}>
                <h5 className={classes.loginBanner}>LOGIN</h5>
                <p className={classes.label}>Username</p>
                <input type={'email'} name={'email'} id='email' className={classes.input}/>
                <p className={classes.label}>Password</p>
                <input type={'password'} name={'password'} id='password' className={classes.input}/>
                <br/>
                <button className={classes.button} type={'submit'}>LOGIN</button>
                <br/>
                {errorMessage}
            </form>
        </div>
    );
};

export default Login;