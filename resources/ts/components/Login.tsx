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
    const [emailValidationFlg, setEmailValidationFlg] = useState<boolean>(false);
    const [passwordValidationFlg, setPasswordValidationFlg] = useState<boolean>(false);

    useEffect(() => {
        switch (loginState) {
            case 'logined':
                let cookieDate = new Date();
                cookieDate  = new Date(cookieDate.setDate(cookieDate.getDate() + 1));
                setCookie('loginState', loginState, { expires: cookieDate });
                setCookie('userId', userId, { expires: cookieDate });
                props.history.push('/mylist');
                break;
            case 'invalid-email':
                setEmailValidationFlg(true);
                break;
            case 'invalid-password':
                setPasswordValidationFlg(true);
                break;
            default:
                setEmailValidationFlg(false);
                setPasswordValidationFlg(false);
                break;
        }
    },[loginState, email, password]);

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
        setEmailValidationFlg(false);
        setPasswordValidationFlg(false);
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
                            <label htmlFor="email" className="login__label">
                                メールアドレス
                                {  emailValidationFlg ?
                                <p className="validation">メールアドレスを正しく入力してください</p>
                                :
                                <></>
                                }
                            </label>
                            <input type="email" id="email" className="login__input" value={email} onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div className="login__item">
                            <label htmlFor="password" className="login__label">
                                パスワード
                                {  passwordValidationFlg ?
                                <p className="validation">パスワードを正しく入力してください</p>
                                :
                                <></>
                                }
                            </label>
                            <input type="password" id="password" className="login__input" value={password} onChange={e => setPassword(e.target.value)}/>
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