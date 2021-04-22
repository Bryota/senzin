import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import * as History from 'history';
import Pagination from 'react-js-pagination';
import Header from './Header';
import OmitContent from '../util/OmitContent';
import OmitTitle from '../util/OmitTitle';


interface PropsType {
    history: History.History;
}

interface DataListType {
    mylist_id: number;
    post_id: number;
    user_id: number;
    post: {
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

}

const MyList= (props: PropsType) => {
    const [currentDataList, setCurrentDataList] = useState<DataListType[]>();
    const [cookies, setCookies, removeCookies] = useCookies();
    const [activePage, setActivePage] = useState<number>(1);
    const [totalItemsCount, setTotalItemsCount] = useState<number>(0);
    const [isCategoryData, setIsCategoryData] = useState<boolean>(false);
    const [categoryId, setCategoryId] = useState<number>();

    useEffect(() => {
        if (cookies.loginState !== 'logined') {
            props.history.push('/login');
        }
        axios.get(`/api/getMylistDataTotalNum/${cookies.userId}`)
        .then((res) => {
            setTotalItemsCount(res.data);
        })
        axios.get(`/api/getMylistData/${cookies.userId}?page=${activePage}`)
        .then((res) => {
            setCurrentDataList(res.data.data);
        })
    },[]);

    const changeMylistData = async(category_id: number) => {
        setIsCategoryData(true);
        setCategoryId(category_id);
        setActivePage(1);
        await axios.get(`/api/getMylistDataFromCategoryIdTotalNum/${cookies.userId}/${category_id}`)
        .then((res) => {
            setTotalItemsCount(res.data);
        })
        await axios.get(`/api/getMylistDataFromCategoryId/${cookies.userId}/${category_id}?page=1`)
        .then((res) => {
            setCurrentDataList(res.data.data);
        })
    }

    const pageChange = async(pageNum: number) => {
        if (isCategoryData) {
            await axios.get(`/api/getMylistDataFromCategoryId/${cookies.userId}/${categoryId}?page=${pageNum}`)
            .then((res) => {
                setCurrentDataList(res.data.data);
                setActivePage(pageNum);
            });
        } else {
            axios.get(`/api/getMylistData/${cookies.userId}}?page=${pageNum}`)
            .then((res) => {
                setCurrentDataList(res.data.data);
                setActivePage(pageNum);
            });
        }
    }

    const logOut = () => {
        removeCookies('loginState');
        removeCookies('userId');
        props.history.push('/login');
    }
    return (
        <>
            <Header />
            <div className="mylist">
                <h1 className="mylist__title">マイリスト<span className="mylist__logout" onClick={logOut}>ログアウト</span></h1>
                <div className="mylist-nav">
                    <ul className="mylist-nav__items">
                        <li className="mylist-nav__item" onClick={() => changeMylistData(1)}>
                            <p className="mylist-nav__title"><span className="mylist-nav__icon--food"><i className="fas fa-utensils"></i></span>食べ物</p>
                        </li>
                        <li className="mylist-nav__item" onClick={() => changeMylistData(2)}>
                            <p className="mylist-nav__title"><span className="mylist-nav__icon--clean"><i className="fas fa-broom"></i></span>掃除</p>
                        </li>
                        <li className="mylist-nav__item" onClick={() => changeMylistData(3)}>
                            <p className="mylist-nav__title"><span className="mylist-nav__icon--health"><i className="fas fa-plus-square"></i></span>健康</p>
                        </li>
                        <li className="mylist-nav__item" onClick={() => changeMylistData(4)}>
                            <p className="mylist-nav__title"><span className="mylist-nav__icon--sport"><i className="fas fa-running"></i></span>スポーツ</p>
                        </li>
                        <li className="mylist-nav__item" onClick={() => changeMylistData(5)}>
                            <p className="mylist-nav__title"><span className="mylist-nav__icon--machine"><i className="fas fa-tv"></i></span>機械</p>
                        </li>
                        <li className="mylist-nav__item" onClick={() => changeMylistData(6)}>
                            <p className="mylist-nav__title"><span className="mylist-nav__icon--other"><i className="fas fa-ellipsis-h"></i></span>その他</p>
                        </li>
                    </ul>
                </div>
                <div className="mylist-ideas">
                    <div className="container">
                        <div className="row mylist-ideas__items">
                            {currentDataList?.map((data) => {
                                return (
                                    <Link className="mylist-ideas__item col-12 col-md-4" to={'/single/' + data.post.post_id} key={data.mylist_id}>
                                        <div className="mylist-ideas__item--balloon">
                                            <p className="mylist-ideas__item--title">{OmitTitle(data.post.title)}</p>
                                            <p className="mylist-ideas__item--category">{data.post.category.category_name}</p>
                                            <p className="mylist-ideas__item--content">{OmitContent(data.post.content)}</p>
                                        </div>
                                        <div>
                                            <i className="far fa-user fa-5x mylist-ideas__item--icon"></i>
                                        </div>
                                        <p className="mylist-ideas__item--username">{data.post.username}</p>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="category-pager">
                    <Pagination
                        activePage={activePage}
                        itemsCountPerPage={6}
                        pageRangeDisplayed={5}
                        totalItemsCount={totalItemsCount}
                        onChange={pageChange}
                        itemClass='page-item'
                        linkClass='page-link'
                    />
                </div>
            </div>
        </>
    )
}

export default MyList;