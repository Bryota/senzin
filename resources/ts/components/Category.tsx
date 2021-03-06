import React, { useState, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import axios from 'axios';
import Pagination from 'react-js-pagination';
import Header from './Header';
import getCategoryIcon from '../util/CategoryIcon';
import OmitValue from '../util/OmitValue';
import PostListType from '../util/PostListType';

type PropsType = RouteComponentProps<{
    category_id: string;
}>;

const Category: React.FC<PropsType> = (props) => {
    const [categoryId, setCategoryId] = useState({category_id: props.match.params.category_id});
    const [categoryIcon, setCategoryIcon] = useState<string>();
    const [categoryName, setCategoryName] = useState<string>();
    const [currentPostList, setCurrentPostList] = useState<PostListType[]>();
    const [activePage, setActivePage] = useState<number>(1);
    const [totalItemsCount, setTotalItemsCount] = useState<number>(0);

    useEffect(() => {
        axios.get(`/api/getCategoryName/${categoryId.category_id}`)
        .then((res) => {
            setCategoryName(res.data.category_name);
        });
        setCategoryIcon(getCategoryIcon(categoryId.category_id));
        axios.get(`/api/getPostDataInCategory/${categoryId.category_id}?page=${activePage}`)
        .then((res) => {
            setCurrentPostList(res.data.data);
        });
        axios.get(`/api/getPostDataTotalNumInCategory/${categoryId.category_id}`)
        .then((res) => {
            setTotalItemsCount(res.data);
        });
    },[categoryId]);

    if (categoryId.category_id !== props.match.params.category_id) {
        setCategoryId({ category_id: props.match.params.category_id });
    }

    const pageChange = (pageNum: number) => {
        axios.get(`/api/getPostDataInCategory/${categoryId.category_id}?page=${pageNum}`)
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
                            {currentPostList?.map((post) => {
                                return (
                                    <Link className="category-ideas__item col-12 col-md-4" key={post.post_id} to={'/single/' + post.post_id}>
                                        <div className="category-ideas__item--balloon">
                                            <p className="category-ideas__item--title">{OmitValue(post.title, 6)}</p>
                                            <p className="category-ideas__item--content">{OmitValue(post.content, 40)}</p>
                                        </div>
                                        <div>
                                            <i className="far fa-user fa-5x category-ideas__item--icon"></i>
                                        </div>
                                        <p className="category-ideas__item--username">{post.username}</p>
                                    </Link>
                                )
                            })}
                        </div>
                        {(() => {
                            if (currentPostList?.length === 0) {
                                return <p className="category-ideas__noposts">????????????????????????</p>
                            }
                        })()}
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