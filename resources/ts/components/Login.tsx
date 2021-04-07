import React from 'react';
import Header from './Header';

const Login:React.FC = () => {
    return (
        <>
            <Header />
            <div className="login">
                <h1 className="login__title">ログイン</h1>
                <form className="login__wrap">
                    <div className="login__items">
                        <div className="login__item">
                            <label htmlFor="email" className="login__label">メールアドレス</label>
                            <input type="email" id="email" className="login__input" />
                        </div>
                        <div className="login__item">
                            <label htmlFor="password" className="login__label">パスワード</label>
                            <input type="password" id="password" className="login__input--password" />
                        </div>
                        <div className="text-center">
                            <input type="button" value="ログイン" className="login__button"/>
                        </div>
                        <p className="login__register">新規登録</p>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;