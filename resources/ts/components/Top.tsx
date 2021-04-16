import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Slider from 'react-slick';
import Header from './Header';
import OmitContent from '../util/OmitContent';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface PostListType {
    title: string;
    post_id: number;
    category_id: number;
    username: string;
    content: string;
    category: {
        category_id: number,
        category_name: string
    }
}

const Top:React.FC = () => {
    const [postList, setPostList] = useState<PostListType[]>();
    useEffect(() => {
        axios.get('/api/getPostData')
        .then((res) => {
            setPostList(res.data);
        })
    },[]);
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 2000,
    }
    return (
        <>
            <Header />
            <div className="top-bgimg">
                <h1 className="top-bgimg__title">先人の知恵</h1>
            </div>
            <div className="top-ideas">
                <div className="container">
                    <Slider className="row top-ideas__items pc" { ...sliderSettings }>
                        {postList?.map((post) => {
                            return (
                                <Link className="top-ideas__item" key={post.post_id} to={'/single/' + post.post_id}>
                                    <div className="top-ideas__item--balloon">
                                        <p className="top-ideas__item--title">{post.title}</p>
                                        <p className="top-ideas__item--category">{post.category.category_name}</p>
                                        <p className="top-ideas__item--content">{OmitContent(post.content)}</p>
                                    </div>
                                    <div>
                                        <i className="far fa-user fa-5x top-ideas__item--icon"></i>
                                    </div>
                                    <p className="top-ideas__item--username">{post.username}</p>
                                </Link>
                            )
                        })}
                    </Slider>
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
                            <Link className="col-2 col-md-3 top-category__item" to="/category/1">
                                <p className="top-category__icon--food"><i className="fas fa-utensils"></i></p>
                                <p className="top-category__name">食べ物</p>
                            </Link>
                            <Link className="col-2 col-md-3 top-category__item" to="/category/2">
                                <p className="top-category__icon--clean"><i className="fas fa-broom"></i></p>
                                <p className="top-category__name">掃除</p>
                            </Link>
                            <Link className="col-2 col-md-3 top-category__item" to="/category/3">
                                <p className="top-category__icon--health"><i className="fas fa-plus-square"></i></p>
                                <p className="top-category__name">健康</p>
                            </Link>
                        </div>
                        <div className="row justify-content-between">
                            <Link className="col-2 col-md-3 top-category__item" to="/category/4">
                                <p className="top-category__icon--sport"><i className="fas fa-running"></i></p>
                                <p className="top-category__name">スポーツ</p>
                            </Link>
                            <Link className="col-2 col-md-3 top-category__item" to="/category/5">
                                <p className="top-category__icon--machine"><i className="fas fa-tv"></i></p>
                                <p className="top-category__name">機械</p>
                            </Link>
                            <Link className="col-2 col-md-3 top-category__item" to="/category/6">
                                <p className="top-category__icon--other"><i className="fas fa-ellipsis-h"></i></p>
                                <p className="top-category__name">その他</p>
                            </Link>
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