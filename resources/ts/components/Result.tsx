import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Pagination from 'react-js-pagination';
import Header from './Header';

interface PropsType {
    location: {
        state: {
            categoryId: string,
            freeword: string
        }
    }
}

interface PostDataType {
    post_id: number;
    title: string;
    category_id: number;
    username: string;
    content: string;
    category: {
        category_id: number,
        category_name: string
    }
}

const Result= (props: PropsType) => {
    const [currentPostDataList, setCurrentPostDataList] = useState<PostDataType[]>();
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
            setCurrentPostDataList(res.data.data);
        })
    },[]);

    const pageChange = (pageNum: number) => {
        axios.post(`api/getResultPostData?page=${pageNum}`, searchData)
        .then((res) => {
            setCurrentPostDataList(res.data.data);
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
                            {currentPostDataList?.map((data) => {
                                return (
                                    <Link className="result-ideas__item col-12 col-md-4" key={data.post_id} to={'/single/' + data.post_id}>
                                        <div className="result-ideas__item--balloon">
                                            <p className="result-ideas__item--title">{data.title}</p>
                                            <p className="result-ideas__item--result">{data.category.category_name}</p>
                                            <p className="result-ideas__item--content">{data.content}</p>
                                        </div>
                                        <div>
                                            <i className="far fa-user fa-5x result-ideas__item--icon"></i>
                                        </div>
                                        <p className="result-ideas__item--username">{data.username}</p>
                                    </Link>
                                )
                            })}
                        </div>
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