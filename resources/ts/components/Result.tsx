import React from 'react';
import Header from './Header';

const Result:React.FC = () => {
    return (
        <>
            <Header />
            <div className="result">
                <h1 className="result__title">検索結果</h1>
                <div className="result-ideas">
                    <div className="container">
                        <div className="row result-ideas__items">
                            <div className="result-ideas__item col-4">
                                <div className="result-ideas__item--balloon">
                                    <p className="result-ideas__item--title">テスト投稿</p>
                                    <p className="result-ideas__item--result">食べ物</p>
                                    <p className="result-ideas__item--content">てすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすと・・・</p>
                                </div>
                                <div>
                                    <i className="far fa-user fa-5x result-ideas__item--icon"></i>
                                </div>
                                <p className="result-ideas__item--username">テストユーザー</p>
                            </div>
                            <div className="result-ideas__item col-4">
                                <div className="result-ideas__item--balloon">
                                    <p className="result-ideas__item--title">テスト投稿</p>
                                    <p className="result-ideas__item--result">食べ物</p>
                                    <p className="result-ideas__item--content">てすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすと・・・</p>
                                </div>
                                <div>
                                    <i className="far fa-user fa-5x result-ideas__item--icon"></i>
                                </div>
                                <p className="result-ideas__item--username">テストユーザー</p>
                            </div>
                            <div className="result-ideas__item col-4">
                                <div className="result-ideas__item--balloon">
                                    <p className="result-ideas__item--title">テスト投稿</p>
                                    <p className="result-ideas__item--result">食べ物</p>
                                    <p className="result-ideas__item--content">てすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすと・・・</p>
                                </div>
                                <div>
                                    <i className="far fa-user fa-5x result-ideas__item--icon"></i>
                                </div>
                                <p className="result-ideas__item--username">テストユーザー</p>
                            </div>
                        </div>
                        <div className="row result__ideas--items">
                            <div className="result-ideas__item col-4">
                                <div className="result-ideas__item--balloon">
                                    <p className="result-ideas__item--title">テスト投稿</p>
                                    <p className="result-ideas__item--result">食べ物</p>
                                    <p className="result-ideas__item--content">てすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすと・・・</p>
                                </div>
                                <div>
                                    <i className="far fa-user fa-5x result-ideas__item--icon"></i>
                                </div>
                                <p className="result-ideas__item--username">テストユーザー</p>
                            </div>
                            <div className="result-ideas__item col-4">
                                <div className="result-ideas__item--balloon">
                                    <p className="result-ideas__item--title">テスト投稿</p>
                                    <p className="result-ideas__item--result">食べ物</p>
                                    <p className="result-ideas__item--content">てすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすと・・・</p>
                                </div>
                                <div>
                                    <i className="far fa-user fa-5x result-ideas__item--icon"></i>
                                </div>
                                <p className="result-ideas__item--username">テストユーザー</p>
                            </div>
                            <div className="result-ideas__item col-4">
                                <div className="result-ideas__item--balloon">
                                    <p className="result-ideas__item--title">テスト投稿</p>
                                    <p className="result-ideas__item--result">食べ物</p>
                                    <p className="result-ideas__item--content">てすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすと・・・</p>
                                </div>
                                <div>
                                    <i className="far fa-user fa-5x result-ideas__item--icon"></i>
                                </div>
                                <p className="result-ideas__item--username">テストユーザー</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="result-pager">
                    <div className="result-pager__wrap"><span className="result-pager__num">1</span><span className="result-pager__num">2</span><span className="result-pager__num">3</span><span className="result-pager__num">4</span></div>
                </div>
            </div>
        </>
    )
}

export default Result;