import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import getCategoryIcon from '../util/CategoryIcon';

type PropsType = RouteComponentProps<{
    category_id: string;
}>;

const Category: React.FC<PropsType> = (props) => {
    const category_id = {category_id: props.match.params.category_id};
    const [categoryIcon, setCategoryIcon] = useState<string>();
    const [categoryName, setCategoryName] = useState<string>();

    useEffect(() => {
        axios.get(`/api/getCategoryName/${category_id.category_id}`)
        .then((res) => {
            setCategoryName(res.data.category_name);
        });
        setCategoryIcon(getCategoryIcon(category_id.category_id));
    },[]);
    return (
        <>
            <Header />
            <div className="category">
                <h1 className="category__title"><span className="category__icon"><i className={categoryIcon}></i></span>{categoryName}</h1>
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