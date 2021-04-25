import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Pagination from 'react-js-pagination';
import Header from './Header';
import OmitValue from '../util/OmitValue';
import PostListType from '../util/PostListType';

interface PropsType {
    location: {
        state: {
            categoryId: string,
            freeword: string
        }
    }
}

const Result= (props: PropsType) => {
    const [currentPostList, setCurrentPostList] = useState<PostListType[]>();
    const [activePage, setActivePage] = useState<number>(1);
    const [totalItemsCount, setTotalItemsCount] = useState<number>(0);
    const searchData = {
        category_id: props.location.state.categoryId,
        freeword: props.location.state.freeword
    }
    useEffect(() => {
        axios.post('api/getResultPostDataTotalNum', searchData)
        .then((res) => {
            setTotalItemsCount(res.data);
        });
        axios.post(`api/getResultPostData?page=${activePage}`, searchData)
        .then((res) => {
            setCurrentPostList(res.data.data);
        })
    },[]);

    const pageChange = (pageNum: number) => {
        axios.post(`api/getResultPostData?page=${pageNum}`, searchData)
        .then((res) => {
            setCurrentPostList(res.data.data);
            setActivePage(pageNum);
        });
    }
    return (
        <>
            <Header />
            <div className="result">
                <h1 className="result__title">検索結果</h1>
                <div className="result-ideas">
                    <div className="container">
                        <div className="row result-ideas__items">
                            {currentPostList?.map((post) => {
                                return (
                                    <Link className="result-ideas__item col-12 col-md-4" key={post.post_id} to={'/single/' + post.post_id}>
                                        <div className="result-ideas__item--balloon">
                                            <p className="result-ideas__item--title">{OmitValue(post.title, 6)}</p>
                                            <p className="result-ideas__item--result">{post.category.category_name}</p>
                                            <p className="result-ideas__item--content">{OmitValue(post.content, 40)}</p>
                                        </div>
                                        <div>
                                            <i className="far fa-user fa-5x result-ideas__item--icon"></i>
                                        </div>
                                        <p className="result-ideas__item--username">{post.username}</p>
                                    </Link>
                                )
                            })}
                        </div>
                        {(() => {
                            if (currentPostList?.length === 0) {
                                return <p className="result-ideas__noposts">該当する投稿がありません</p>
                            }
                        })()}
                    </div>
                </div>
                <div className="result-pager">
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

export default Result;