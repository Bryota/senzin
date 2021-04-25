import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const Header:React.FC = () => {
    const [anchorEl, setAnchorEl] =useState(null);
    const [anchorElSp, setAnchorElSp] =useState(null);
    const [anchorElSpCategory, setAnchorElSpCategory] = useState(null);

    const openCategoryMenu = (e: any) => {
        setAnchorEl(e.currentTarget);
    }

    const closeCategoryMenu = () => {
        setAnchorEl(null);
    }

    const openHamMenu = (e: any) => {
        setAnchorElSp(e.currentTarget);
    }

    const closeHamMenu = () => {
        setAnchorElSp(null);
    }

    const openCateogryMenuForSp = (e: any) => {
        setAnchorElSpCategory(e.currentTarget);
    }

    const closeCategoryMenuForSp = () => {
        setAnchorElSpCategory(null);
    }

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
                                <li>
                                    <p onMouseEnter={openCategoryMenu}>カテゴリ</p>
                                    <Menu
                                        anchorEl={anchorEl}
                                        open={Boolean(anchorEl)}
                                        onClose={closeCategoryMenu}
                                    >
                                        <MenuItem><Link className="header__nav--button" to="/category/1">食べ物</Link></MenuItem>
                                        <MenuItem><Link className="header__nav--button" to="/category/2">掃除</Link></MenuItem>
                                        <MenuItem><Link className="header__nav--button" to="/category/3">健康</Link></MenuItem>
                                        <MenuItem><Link className="header__nav--button" to="/category/4">スポーツ</Link></MenuItem>
                                        <MenuItem><Link className="header__nav--button" to="/category/5">機械</Link></MenuItem>
                                        <MenuItem><Link className="header__nav--button" to="/category/6">その他</Link></MenuItem>
                                    </Menu>
                                </li>
                                <li><Link to="/post">投稿</Link></li>
                                <li><Link to="/search">検索</Link></li>
                                <li>
                                    <Link to="/mylist">マイリスト</Link>
                                    <Link to="/login"><span className="ml-3"><i className="fas fa-sign-in-alt"></i></span></Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="sp__nav">
                            <i className="fas fa-bars fa-3x" onClick={openHamMenu}></i>
                            <Menu
                                anchorEl={anchorElSp}
                                open={Boolean(anchorElSp)}
                                onClose={closeHamMenu}
                            >
                                <MenuItem><Link to="/">トップ</Link></MenuItem>
                                <MenuItem>
                                    <p onClick={openCateogryMenuForSp}>カテゴリ</p>
                                    <Menu
                                        anchorEl={anchorElSpCategory}
                                        open={Boolean(anchorElSpCategory)}
                                        onClose={closeCategoryMenuForSp}
                                    >
                                        <MenuItem><Link className="header__nav--button" to="/category/1">食べ物</Link></MenuItem>
                                        <MenuItem><Link className="header__nav--button" to="/category/2">掃除</Link></MenuItem>
                                        <MenuItem><Link className="header__nav--button" to="/category/3">健康</Link></MenuItem>
                                        <MenuItem><Link className="header__nav--button" to="/category/4">スポーツ</Link></MenuItem>
                                        <MenuItem><Link className="header__nav--button" to="/category/5">機械</Link></MenuItem>
                                        <MenuItem><Link className="header__nav--button" to="/category/6">その他</Link></MenuItem>
                                    </Menu>
                                </MenuItem>
                                <MenuItem><Link to="/post">投稿</Link></MenuItem>
                                <MenuItem><Link to="/search">検索</Link></MenuItem>
                                <MenuItem><Link to="/mylist">マイリスト</Link></MenuItem>
                                <MenuItem><Link to="/login">ログイン</Link></MenuItem>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;