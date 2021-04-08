import React from 'react';
import { Link } from 'react-router-dom';

const Header:React.FC = () => {
    return (
        <header className="header__wrap">
            <div className="container"> 
                <div className="row">
                    <div className="col-md-5 col-9">
                        <h2 className="header__title"><Link to="/">先人の知恵</Link></h2>
                    </div>
                    <div className="col-md-7 col-3">
                        <nav className="pc__nav">
                            <ul className="header__nav">
                                <li><Link to="/">トップ</Link></li>
                                <li><Link to="/category">カテゴリ</Link></li>
                                <li><Link to="/post">投稿</Link></li>
                                <li><Link to="/search">検索</Link></li>
                                <li>
                                    <Link to="/mylist">マイリスト</Link>
                                    <Link to="/login"><span className="ml-3"><i className="fas fa-sign-in-alt"></i></span></Link>
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