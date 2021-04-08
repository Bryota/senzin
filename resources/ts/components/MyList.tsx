import React from 'react';
import Header from './Header';

const MyList: React.FC = () => {
    return (
        <>
            <Header />
            <div className="mylist">
                <h1 className="mylist__title">マイリスト</h1>
                <div className="mylist-nav">
                    <ul className="mylist-nav__items">
                        <li className="mylist-nav__item">
                            <p className="mylist-nav__title"><span className="mylist-nav__icon--food"><i className="fas fa-utensils"></i></span>食べ物</p>
                        </li>
                        <li className="mylist-nav__item">
                            <p className="mylist-nav__title"><span className="mylist-nav__icon--clean"><i className="fas fa-broom"></i></span>掃除</p>
                        </li>
                        <li className="mylist-nav__item">
                            <p className="mylist-nav__title"><span className="mylist-nav__icon--health"><i className="fas fa-plus-square"></i></span>健康</p>
                        </li>
                        <li className="mylist-nav__item">
                            <p className="mylist-nav__title"><span className="mylist-nav__icon--sport"><i className="fas fa-running"></i></span>スポーツ</p>
                        </li>
                        <li className="mylist-nav__item">
                            <p className="mylist-nav__title"><span className="mylist-nav__icon--machine"><i className="fas fa-tv"></i></span>機械</p>
                        </li>
                        <li className="mylist-nav__item">
                            <p className="mylist-nav__title"><span className="mylist-nav__icon--other"><i className="fas fa-ellipsis-h"></i></span>その他</p>
                        </li>
                    </ul>
                </div>
                <div className="mylist-ideas">
                    <div className="container">
                        <div className="row mylist-ideas__items">
                            <div className="mylist-ideas__item col-12 col-md-4">
                                <div className="mylist-ideas__item--balloon">
                                    <p className="mylist-ideas__item--title">テスト投稿</p>
                                    <p className="mylist-ideas__item--category">食べ物</p>
                                    <p className="mylist-ideas__item--content">てすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすと・・・</p>
                                </div>
                                <div>
                                    <i className="far fa-user fa-5x mylist-ideas__item--icon"></i>
                                </div>
                                <p className="mylist-ideas__item--username">テストユーザー</p>
                            </div>
                            <div className="mylist-ideas__item col-12 col-md-4">
                                <div className="mylist-ideas__item--balloon">
                                    <p className="mylist-ideas__item--title">テスト投稿</p>
                                    <p className="mylist-ideas__item--category">食べ物</p>
                                    <p className="mylist-ideas__item--content">てすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすと・・・</p>
                                </div>
                                <div>
                                    <i className="far fa-user fa-5x mylist-ideas__item--icon"></i>
                                </div>
                                <p className="mylist-ideas__item--username">テストユーザー</p>
                            </div>
                            <div className="mylist-ideas__item col-12 col-md-4">
                                <div className="mylist-ideas__item--balloon">
                                    <p className="mylist-ideas__item--title">テスト投稿</p>
                                    <p className="mylist-ideas__item--category">食べ物</p>
                                    <p className="mylist-ideas__item--content">てすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすと・・・</p>
                                </div>
                                <div>
                                    <i className="far fa-user fa-5x mylist-ideas__item--icon"></i>
                                </div>
                                <p className="mylist-ideas__item--username">テストユーザー</p>
                            </div>
                        </div>
                        <div className="row mylist__ideas--items">
                            <div className="mylist-ideas__item col-12 col-md-4">
                                <div className="mylist-ideas__item--balloon">
                                    <p className="mylist-ideas__item--title">テスト投稿</p>
                                    <p className="mylist-ideas__item--category">食べ物</p>
                                    <p className="mylist-ideas__item--content">てすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすと・・・</p>
                                </div>
                                <div>
                                    <i className="far fa-user fa-5x mylist-ideas__item--icon"></i>
                                </div>
                                <p className="mylist-ideas__item--username">テストユーザー</p>
                            </div>
                            <div className="mylist-ideas__item col-12 col-md-4">
                                <div className="mylist-ideas__item--balloon">
                                    <p className="mylist-ideas__item--title">テスト投稿</p>
                                    <p className="mylist-ideas__item--category">食べ物</p>
                                    <p className="mylist-ideas__item--content">てすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすと・・・</p>
                                </div>
                                <div>
                                    <i className="far fa-user fa-5x mylist-ideas__item--icon"></i>
                                </div>
                                <p className="mylist-ideas__item--username">テストユーザー</p>
                            </div>
                            <div className="mylist-ideas__item col-12 col-md-4">
                                <div className="mylist-ideas__item--balloon">
                                    <p className="mylist-ideas__item--title">テスト投稿</p>
                                    <p className="mylist-ideas__item--category">食べ物</p>
                                    <p className="mylist-ideas__item--content">てすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすと・・・</p>
                                </div>
                                <div>
                                    <i className="far fa-user fa-5x mylist-ideas__item--icon"></i>
                                </div>
                                <p className="mylist-ideas__item--username">テストユーザー</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mylist-pager">
                    <div className="mylist-pager__wrap"><span className="mylist-pager__num">1</span><span className="mylist-pager__num">2</span><span className="mylist-pager__num">3</span><span className="mylist-pager__num">4</span></div>
                </div>
            </div>
        </>
    )
}

export default MyList;