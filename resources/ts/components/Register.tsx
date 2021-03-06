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
        Validation(email, setEmailValidationFlg);
        Validation(name, setNameValidationFlg);
        Validation(password, setPasswordValidationFlg);
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
                <h1 className="register__title">????????????</h1>
                <div className="register__wrap">
                    <form className="register__items" onSubmit={submitRegisterData}>
                        <div className="register__item">
                            <label htmlFor="email" className="register__label">
                                ?????????????????????<span className="form__required">??????</span>
                                {  emailValidationFlg ?
                                <p className="validation">????????????????????????????????????????????????</p>
                                :
                                <></>
                                }
                                {  uniqueEmailFlg ?
                                    <p className="validation">???????????????????????????????????????????????????</p>
                                    :
                                    <></>
                                }
                            </label>
                            <input type="email" id="email" className="register__input" value={email} onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div className="register__item">
                            <label htmlFor="name" className="register__label">
                                ???????????????<span className="form__required">??????</span>
                                {  nameValidationFlg ?
                                <p className="validation">??????????????????????????????????????????</p>
                                :
                                <></>
                                }
                            </label>
                            <input type="text" id="name" className="register__input" value={name} onChange={e => setName(e.target.value)}/>
                        </div>
                        <div className="register__item">
                            <label htmlFor="password" className="register__label">
                                ???????????????<span className="form__required">??????</span>
                                {  passwordValidationFlg ?
                                <p className="validation">??????????????????????????????????????????</p>
                                :
                                <></>
                                }
                            </label>
                            <input type="password" id="password" className="register__input" value={password} onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <div className="register__item">
                            <label htmlFor="passwordComfire" className="register__label">
                                ?????????????????????
                                {  passwordComfireValidationFlg ?
                                <p className="validation">???????????????????????????????????????</p>
                                :
                                <></>
                                }
                            </label>
                            <input type="password" id="passwordComfire" className="register__input" value={passwordComfire} onChange={e => setPasswordComfire(e.target.value)}/>
                        </div>
                        <div className="text-center">
                            <input type="submit" value="????????????" className="register__button" />
                        </div>
                        <p className="register__register"><Link to="login">????????????</Link></p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register;