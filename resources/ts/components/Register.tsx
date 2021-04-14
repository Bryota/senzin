import React, { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

interface RegisterDataType {
    email: string,
    name: string,
    password: string
}

const Register:React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const sendRegisterDataToDB = async(data: RegisterDataType) => {
        console.log(data);
        await axios.post('/api/setNewUser', data)
        .then(() => {
            setEmail('');
            setName('');
            setPassword('');
        })
    }

    const submitRegisterData = (e: FormEvent) => {
        e.preventDefault();
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
                <h1 className="register__title">ログイン</h1>
                <div className="register__wrap">
                    <form className="register__items" onSubmit={submitRegisterData}>
                        <div className="register__item">
                            <label htmlFor="email" className="register__label">メールアドレス</label>
                            <input type="email" id="email" className="register__input" onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div className="register__item">
                            <label htmlFor="name" className="register__label">ユーザー名</label>
                            <input type="text" id="name" className="register__input--name" onChange={e => setName(e.target.value)}/>
                        </div>
                        <div className="register__item">
                            <label htmlFor="password" className="register__label">パスワード</label>
                            <input type="password" id="password" className="register__input--password" onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <div className="register__item">
                            <label htmlFor="passwordComfire" className="register__label">パスワード確認</label>
                            <input type="password" id="passwordComfire" className="register__input--passwordComfire" />
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