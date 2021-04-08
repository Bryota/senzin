import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Register:React.FC = () => {
    return (
        <>
            <Header />
            <div className="register">
                <h1 className="register__title">ログイン</h1>
                <form className="register__wrap">
                    <div className="register__items">
                        <div className="register__item">
                            <label htmlFor="email" className="register__label">メールアドレス</label>
                            <input type="email" id="email" className="register__input" />
                        </div>
                        <div className="register__item">
                            <label htmlFor="username" className="register__label">ユーザー名</label>
                            <input type="text" id="username" className="register__input--username" />
                        </div>
                        <div className="register__item">
                            <label htmlFor="password" className="register__label">パスワード</label>
                            <input type="password" id="password" className="register__input--password" />
                        </div>
                        <div className="register__item">
                            <label htmlFor="passwordComfire" className="register__label">パスワード確認</label>
                            <input type="password" id="passwordComfire" className="register__input--passwordComfire" />
                        </div>
                        <div className="text-center">
                            <input type="button" value="新規登録" className="register__button"/>
                        </div>
                        <p className="register__register"><Link to="login">ログイン</Link></p>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register;