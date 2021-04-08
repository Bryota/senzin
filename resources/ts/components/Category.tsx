import React from 'react';
import Header from './Header';

const Category:React.FC = () => {
    return (
        <>
            <Header />
            <div className="category">
                <h1 className="category__title"><span className="category__icon--food"><i className="fas fa-utensils"></i></span>食べ物</h1>
                <div className="category-ideas">
                    <div className="container">
                        <div className="row category-ideas__items">
                            <div className="category-ideas__item col-12 col-md-4">
                                <div className="category-ideas__item--balloon">
                                    <p className="category-ideas__item--title">テスト投稿</p>
                                    <p className="category-ideas__item--category">食べ物</p>
                                    <p className="category-ideas__item--content">てすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすと・・・</p>
                                </div>
                                <div>
                                    <i className="far fa-user fa-5x category-ideas__item--icon"></i>
                                </div>
                                <p className="category-ideas__item--username">テストユーザー</p>
                            </div>
                            <div className="category-ideas__item col-12 col-md-4">
                                <div className="category-ideas__item--balloon">
                                    <p className="category-ideas__item--title">テスト投稿</p>
                                    <p className="category-ideas__item--category">食べ物</p>
                                    <p className="category-ideas__item--content">てすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすと・・・</p>
                                </div>
                                <div>
                                    <i className="far fa-user fa-5x category-ideas__item--icon"></i>
                                </div>
                                <p className="category-ideas__item--username">テストユーザー</p>
                            </div>
                            <div className="category-ideas__item col-12 col-md-4">
                                <div className="category-ideas__item--balloon">
                                    <p className="category-ideas__item--title">テスト投稿</p>
                                    <p className="category-ideas__item--category">食べ物</p>
                                    <p className="category-ideas__item--content">てすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすと・・・</p>
                                </div>
                                <div>
                                    <i className="far fa-user fa-5x category-ideas__item--icon"></i>
                                </div>
                                <p className="category-ideas__item--username">テストユーザー</p>
                            </div>
                        </div>
                        <div className="row category__ideas--items">
                            <div className="category-ideas__item col-12 col-md-4">
                                <div className="category-ideas__item--balloon">
                                    <p className="category-ideas__item--title">テスト投稿</p>
                                    <p className="category-ideas__item--category">食べ物</p>
                                    <p className="category-ideas__item--content">てすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすと・・・</p>
                                </div>
                                <div>
                                    <i className="far fa-user fa-5x category-ideas__item--icon"></i>
                                </div>
                                <p className="category-ideas__item--username">テストユーザー</p>
                            </div>
                            <div className="category-ideas__item col-12 col-md-4">
                                <div className="category-ideas__item--balloon">
                                    <p className="category-ideas__item--title">テスト投稿</p>
                                    <p className="category-ideas__item--category">食べ物</p>
                                    <p className="category-ideas__item--content">てすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすと・・・</p>
                                </div>
                                <div>
                                    <i className="far fa-user fa-5x category-ideas__item--icon"></i>
                                </div>
                                <p className="category-ideas__item--username">テストユーザー</p>
                            </div>
                            <div className="category-ideas__item col-12 col-md-4">
                                <div className="category-ideas__item--balloon">
                                    <p className="category-ideas__item--title">テスト投稿</p>
                                    <p className="category-ideas__item--category">食べ物</p>
                                    <p className="category-ideas__item--content">てすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすとてすと・・・</p>
                                </div>
                                <div>
                                    <i className="far fa-user fa-5x category-ideas__item--icon"></i>
                                </div>
                                <p className="category-ideas__item--username">テストユーザー</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="category-pager">
                    <div className="category-pager__wrap"><span className="category-pager__num">1</span><span className="category-pager__num">2</span><span className="category-pager__num">3</span><span className="category-pager__num">4</span></div>
                </div>
            </div>
        </>
    )
}

export default Category;