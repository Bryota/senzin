import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import axios from 'axios';
import Pagination from 'react-js-pagination';
import Header from './Header';
import getCategoryIcon from '../util/CategoryIcon';

type PropsType = RouteComponentProps<{
    category_id: string;
}>;

interface PostListType {
    title: string;
    post_id: number
    category_id: number;
    username: string;
    content: string;
}

const Category: React.FC<PropsType> = (props) => {
    const category_id = {category_id: props.match.params.category_id};
    const [categoryIcon, setCategoryIcon] = useState<string>();
    const [categoryName, setCategoryName] = useState<string>();
    const [currentPostList, setCurrentPostList] = useState<PostListType[]>();
    const [activePage, setActivePage] = useState<number>(1);
    const [totalItemsCount, setTotalItemsCount] = useState<number>(0);

    useEffect(() => {
        axios.get(`/api/getCategoryName/${category_id.category_id}`)
        .then((res) => {
            setCategoryName(res.data.category_name);
        });
        setCategoryIcon(getCategoryIcon(category_id.category_id));
        axios.get(`/api/getPostDataInCategory/${category_id.category_id}?page=${activePage}`)
        .then((res) => {
            setCurrentPostList(res.data.data);
        });
        axios.get(`/api/getPostDataTotalNumInCategory/${category_id.category_id}`)
        .then((res) => {
            setTotalItemsCount(res.data);
        });
    },[]);

    const pageChange = (pageNum: number) => {
        axios.get(`/api/getPostDataInCategory/${category_id.category_id}?page=${pageNum}`)
        .then((res) => {
            setCurrentPostList(res.data.data);
            setActivePage(pageNum);
        });
    }
    return (
        <>
            <Header />
            <div className="category">
                <h1 className="category__title"><span className="category__icon"><i className={categoryIcon}></i></span>{categoryName}</h1>
                <div className="category-ideas">
                    <div className="container">
                        <div className="row category-ideas__items">
                            {currentPostList?.map((data) => {
                                return (
                                    <div className="category-ideas__item col-12 col-md-4">
                                        <div className="category-ideas__item--balloon">
                                            <p className="category-ideas__item--title">{data.title}</p>
                                            <p className="category-ideas__item--content">{data.content}</p>
                                        </div>
                                        <div>
                                            <i className="far fa-user fa-5x category-ideas__item--icon"></i>
                                        </div>
                                        <p className="category-ideas__item--username">{data.username}</p>
                                    </div>
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

export default Category;