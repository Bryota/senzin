import React from 'react';
import Header from './Header';

const Top:React.FC = () => {
    return (
        <>
            <Header />
            <div className="top__bgimg">
                <h1 className="top__bgimg__title">先人の知恵</h1>
            </div>
            <div className="top__ideas">
                <div className="container">
                    <div className="row top__ideas__items">
                        <div className="top__ideas__item col-4">
                            <div className="top__ideas__item__balloon">
                                <p className="top__ideas__item__title">テスト投稿</p>
                                <p className="top__ideas__item__category">食べ物</p>
                                <p className="top__ideas__item__content">てすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすと・・・</p>
                            </div>
                            <div>
                                <i className="far fa-user fa-5x top__ideas__item__icon"></i>
                            </div>
                            <p className="top__ideas__item__username">テストユーザー</p>
                        </div>
                        <div className="top__ideas__item col-4">
                            <div className="top__ideas__item__balloon">
                                <p className="top__ideas__item__title">テスト投稿</p>
                                <p className="top__ideas__item__category">食べ物</p>
                                <p className="top__ideas__item__content">てすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすと・・・</p>
                            </div>
                            <div>
                                <i className="far fa-user fa-5x top__ideas__item__icon"></i>
                            </div>
                            <p className="top__ideas__item__username">テストユーザー</p>
                        </div>
                        <div className="top__ideas__item col-4">
                            <div className="top__ideas__item__balloon">
                                <p className="top__ideas__item__title">テスト投稿</p>
                                <p className="top__ideas__item__category">食べ物</p>
                                <p className="top__ideas__item__content">てすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすと・・・</p>
                            </div>
                            <div>
                                <i className="far fa-user fa-5x top__ideas__item__icon"></i>
                            </div>
                            <p className="top__ideas__item__username">テストユーザー</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Top;