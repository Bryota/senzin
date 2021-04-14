import React, { useState, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import * as History from 'history';
import Header from './Header';

interface PropsType {
    history: History.History;
}

interface LoginDataType {
    email: string,
    password: string
}

const Login= (props: PropsType) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [userId, setUserId] = useState<number>(0);
    const [loginState, setLoginState] = useState<string>('');
    const [cookies, setCookie] = useCookies(['userId', 'authState']);
    const [invalidEmail, setInvalidEmail] = useState<boolean>(false);
    const [invalidPassword, setInvalidPassword] = useState<boolean>(false);

    useEffect(() => {
        switch (loginState) {
            case 'logined':
                setCookie('loginState', loginState);
                setCookie('userId', userId);
                props.history.push('/mylist');
                break;
            case 'invalid-email':
                setInvalidEmail(true);
                setInvalidPassword(false);
                break;
            case 'invalid-password':
                setInvalidEmail(false);
                setInvalidPassword(true);
                break;
            default:
                setInvalidEmail(false);
                setInvalidPassword(false);
                break;
        }
    },[loginState]);

    const sendLoginUserDataToDB = (data: LoginDataType) => {
        axios.post('/api/checkLoginUser', data)
        .then((res) => {
            if (res.data[1]) {
                setUserId(res.data[1] as number);
            }
            setLoginState(res.data[0]);
            setEmail('');
            setPassword('');
        })
    }

    const submitLoginData = (e: FormEvent) => {
        e.preventDefault();
        sendLoginUserDataToDB({
            email: email,
            password: password
        });
    }
    return (
        <>
            <Header />
            <div className="login">
                <h1 className="login__title">ログイン</h1>
                <form className="login__wrap" onSubmit={submitLoginData}>
                    <div className="login__items">
                        <div className="login__item">
                            <label htmlFor="email" className="login__label">メールアドレス</label>
                            <input type="email" id="email" className="login__input" value={email} onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div className="login__item">
                            <label htmlFor="password" className="login__label">パスワード</label>
                            <input type="password" id="password" className="login__input--password" value={password} onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <div className="text-center">
                            <input type="submit" value="ログイン" className="login__button"/>
                        </div>
                        <p className="login__register"><Link to="/register">新規登録</Link></p>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;