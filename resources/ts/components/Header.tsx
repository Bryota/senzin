import React from 'react';

const Header:React.FC = () => {
    return (
        <header className="header__wrap">
            <div className="container"> 
                <div className="row">
                    <div className="col-md-5 col-9">
                        <h2 className="header__title">先人の知恵</h2>
                    </div>
                    <div className="col-md-7 col-3">
                        <nav className="pc__nav">
                            <ul className="header__nav">
                                <li>トップ</li>
                                <li>カテゴリ</li>
                                <li>投稿</li>
                                <li>検索</li>
                                <li>
                                    マイリスト
                                    <span className="ml-3"><i className="fas fa-sign-in-alt"></i></span>
                                </li>
                            </ul>
                        </nav>
                        <div className="sp__nav">
                            <i className="fas fa-bars fa-3x"></i>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;