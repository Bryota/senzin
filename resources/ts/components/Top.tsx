import React from 'react';
import Header from './Header';

const Top:React.FC = () => {
    return (
        <>
            <Header />
            <div className="top-bgimg">
                <h1 className="top-bgimg__title">先人の知恵</h1>
            </div>
            <div className="top-ideas">
                <div className="container">
                    <div className="row top-ideas__items pc">
                        <div className="top-ideas__item col-4">
                            <div className="top-ideas__item--balloon">
                                <p className="top-ideas__item--title">テスト投稿</p>
                                <p className="top-ideas__item--category">食べ物</p>
                                <p className="top-ideas__item--content">てすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすと・・・</p>
                            </div>
                            <div>
                                <i className="far fa-user fa-5x top-ideas__item--icon"></i>
                            </div>
                            <p className="top-ideas__item--username">テストユーザー</p>
                        </div>
                        <div className="top-ideas__item col-4">
                            <div className="top-ideas__item--balloon">
                                <p className="top-ideas__item--title">テスト投稿</p>
                                <p className="top-ideas__item--category">食べ物</p>
                                <p className="top-ideas__item--content">てすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすと・・・</p>
                            </div>
                            <div>
                                <i className="far fa-user fa-5x top-ideas__item--icon"></i>
                            </div>
                            <p className="top-ideas__item--username">テストユーザー</p>
                        </div>
                        <div className="top-ideas__item col-4">
                            <div className="top-ideas__item--balloon">
                                <p className="top-ideas__item--title">テスト投稿</p>
                                <p className="top-ideas__item--category">食べ物</p>
                                <p className="top-ideas__item--content">てすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすと・・・</p>
                            </div>
                            <div>
                                <i className="far fa-user fa-5x top-ideas__item--icon"></i>
                            </div>
                            <p className="top-ideas__item--username">テストユーザー</p>
                        </div>
                    </div>
                    <div className="row top-ideas__items sp">
                        <div className="top-ideas__item col-12">
                            <div className="top-ideas__item--balloon">
                                <p className="top-ideas__item--title">テスト投稿</p>
                                <p className="top-ideas__item--category">食べ物</p>
                                <p className="top-ideas__item--content">てすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすと・・・</p>
                            </div>
                            <div>
                                <i className="far fa-user fa-5x top-ideas__item--icon"></i>
                            </div>
                            <p className="top-ideas__item--username">テストユーザー</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="top-category">
                <div className="container">
                    <h2 className="top-category__title">＜カテゴリ＞</h2>
                    <div className="top-category__items pc">
                        <div className="row justify-content-between">
                            <div className="col-2 col-md-3 top-category__item">
                                <p className="top-category__icon--food"><i className="fas fa-utensils"></i></p>
                                <p className="top-category__name">食べ物</p>
                            </div>
                            <div className="col-2 col-md-3 top-category__item">
                                <p className="top-category__icon--clean"><i className="fas fa-broom"></i></p>
                                <p className="top-category__name">掃除</p>
                            </div>
                            <div className="col-2 col-md-3 top-category__item">
                                <p className="top-category__icon--health"><i className="fas fa-plus-square"></i></p>
                                <p className="top-category__name">健康</p>
                            </div>
                        </div>
                        <div className="row justify-content-between">
                            <div className="col-2 col-md-3 top-category__item">
                                <p className="top-category__icon--sport"><i className="fas fa-running"></i></p>
                                <p className="top-category__name">スポーツ</p>
                            </div>
                            <div className="col-2 col-md-3 top-category__item">
                                <p className="top-category__icon--machine"><i className="fas fa-tv"></i></p>
                                <p className="top-category__name">機械</p>
                            </div>
                            <div className="col-2 col-md-3 top-category__item">
                                <p className="top-category__icon--other"><i className="fas fa-ellipsis-h"></i></p>
                                <p className="top-category__name">その他</p>
                            </div>
                        </div>
                    </div>
                    <div className="top-category__items sp">
                        <div className="row">
                            <div className="col-11 top-category__item">
                                <p className="top-category__icon--food"><i className="fas fa-utensils"></i></p>
                                <p className="top-category__name">食べ物</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="top-use">
                <h2 className="top-use__title">＜使い方＞</h2>
                <p className="top-use__content">先人の知恵として、皆さんが様々なアイデア・豆知識を投稿していくサービスです。</p>
                <p className="top-use__content">１.投稿されているアイデア・豆知識を見てみましょう！<br/>普段の生活で使えるものが見つかるかも知れません。</p>
                <p className="top-use__content">２.投稿してみましょう！<br/>あなたの投稿が誰かの生活の助けになるかも知れません。</p>
                <p className="top-use__content">３.アカウントを作って、マイリストを作りましょう！<br/></p>
            </div>
        </>
    )
}

export default Top;