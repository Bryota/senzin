import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import getCategoryIcon from '../util/CategoryIcon';

type PropsType = RouteComponentProps<{
    id: string;
}>;

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

const Single:React.FC<PropsType> = (props) => {
    const [postData, setPostData] = useState<PostDataType>();
    const id = {id: props.match.params.id};
    const [categoryIcon, setCategoryIcon] = useState<string>();

    useEffect(() => {
        axios.get(`/api/getSinglePostData/${id.id}`)
        .then((res) => {
            setPostData(res.data);
            setCategoryIcon(getCategoryIcon(res.data.category.category_id.toString()));
        });
    },[]);
    return (
        <>
            <Header />
            <div className="single">
                <h1 className="single__title">{postData?.title}<br className="sp"/>/{postData?.username}</h1>
                <p className="single__category"><span className="single__icon"><i className={categoryIcon}></i></span>{postData?.category.category_name}</p>
                <p className="single__content">
                    {postData?.content}
                </p>
                <p className="text-center">
                    <input type="button" className="single__button" value="マイリストに追加"/>
                </p>                
                <p className="text-center">
                    <input type="button" className="single__button" value="戻る"/>
                </p>
            </div>
        </>
    )
}

export default Single;