import React, { FormEvent, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as History from 'history';
import Header from './Header';
import Validation from '../util/Validation';

interface PropsType {
    history: History.History;
}

interface RegisterDataType {
    email: string,
    name: string,
    password: string
}

const Register = (props: PropsType) => {
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordComfire, setPasswordComfire] = useState<string>();
    const [emailValidationFlg, setEmailValidationFlg] = useState<boolean>(false);
    const [nameValidationFlg, setNameValidationFlg] = useState<boolean>(false);
    const [passwordValidationFlg, setPasswordValidationFlg] = useState<boolean>(false);
    const [passwordComfireValidationFlg, setPasswordComfireValidationFlg] = useState<boolean>(false);
    const [uniqueEmailFlg, setUniqueEmailFlg] = useState<boolean>(false);

    useEffect(() => {
        checkInputValidation();
    },[email,name,password])

    const checkInputValidation = () => {
        Validation('required', email, setEmailValidationFlg);
        Validation('required', name, setNameValidationFlg);
        Validation('required', password, setPasswordValidationFlg);
    }

    const checkSendValidation = () => {
        setPasswordComfireValidationFlg(false);
        if (password !== passwordComfire) {
            setPasswordComfireValidationFlg(true);
            return true;
        } else {
            return false;
        }
    }

    const sendRegisterDataToDB = async(data: RegisterDataType) => {
        await axios.post('/api/setNewUser', data)
        .then((res) => {
            if (res.data === 'invalid-email') {
                setUniqueEmailFlg(true);
                setPassword('');
                setPasswordComfire('');
            } else {
                setEmail('');
                setName('');
                setPassword('');
                setPasswordComfire('');
                props.history.push('login');
            }
        })
    }

    const submitRegisterData = (e: FormEvent) => {
        e.preventDefault();
        if (checkSendValidation()) {
            return;
        }
        sendRegisterDataToDB({
            email: email,
            name: name,
            password: password
        });
    }

    return (
        <>
            <Header />
            <div className="register">
                <h1 className="register__title">新規登録</h1>
                <div className="register__wrap">
                    <form className="register__items" onSubmit={submitRegisterData}>
                        <div className="register__item">
                            <label htmlFor="email" className="register__label">
                                メールアドレス<span className="form__required">必須</span>
                                {  emailValidationFlg ?
                                <p className="validation">メールアドレスを入力してください</p>
                                :
                                <></>
                                }
                                {  uniqueEmailFlg ?
                                    <p className="validation">メールアドレスが既に使われています</p>
                                    :
                                    <></>
                                }
                            </label>
                            <input type="email" id="email" className="register__input" value={email} onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div className="register__item">
                            <label htmlFor="name" className="register__label">
                                ユーザー名<span className="form__required">必須</span>
                                {  nameValidationFlg ?
                                <p className="validation">ユーザー名を入力してください</p>
                                :
                                <></>
                                }
                            </label>
                            <input type="text" id="name" className="register__input" value={name} onChange={e => setName(e.target.value)}/>
                        </div>
                        <div className="register__item">
                            <label htmlFor="password" className="register__label">
                                パスワード<span className="form__required">必須</span>
                                {  passwordValidationFlg ?
                                <p className="validation">パスワードを入力してください</p>
                                :
                                <></>
                                }
                            </label>
                            <input type="password" id="password" className="register__input" value={password} onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <div className="register__item">
                            <label htmlFor="passwordComfire" className="register__label">
                                パスワード確認
                                {  passwordComfireValidationFlg ?
                                <p className="validation">パスワードが一致しません。</p>
                                :
                                <></>
                                }
                            </label>
                            <input type="password" id="passwordComfire" className="register__input" value={passwordComfire} onChange={e => setPasswordComfire(e.target.value)}/>
                        </div>
                        <div className="text-center">
                            <input type="submit" value="新規登録" className="register__button" />
                        </div>
                        <p className="register__register"><Link to="login">ログイン</Link></p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register;