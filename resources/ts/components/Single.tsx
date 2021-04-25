import React, { useState, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import Header from './Header';
import getCategoryIcon from '../util/CategoryIcon';
import { TwitterShareButton, TwitterIcon } from 'react-share';
import PostListType from '../util/PostListType';

type PropsType = RouteComponentProps<{
    id: string;
}>;

const Single:React.FC<PropsType> = (props) => {
    const [postData, setPostData] = useState<PostListType>();
    const id = {id: props.match.params.id};
    const [categoryIcon, setCategoryIcon] = useState<string>();
    const [cookies] = useCookies();
    const [canSetMylist, setCanSetMylist] = useState<boolean>(false);
    const url = location.href;

    useEffect(() => {
        axios.get(`/api/getSinglePostData/${id.id}`)
        .then((res) => {
            setPostData(res.data);
            setCategoryIcon(getCategoryIcon(res.data.category.category_id.toString()));
        });
        if (cookies.loginState) {
            setCanSetMylist(true);
        }
        axios.get(`/api/checkMylistData/${cookies.userId}/${id.id}`)
        .then((res) => {
            if (res.data === "saved") {
                setCanSetMylist(false);
            }
        })
    },[]);

    const sendMylistDataToDB = () => {
        axios.post('/api/setMylistData', {
            postId: id.id,
            userId: cookies.userId
        })
        .then(() => {
            setCanSetMylist(false);
        })
    }
    return (
        <>
            <Header />
            <div className="single">
                <h1 className="single__title">
                    {postData?.title}<br className="sp"/>/{postData?.username}
                    <TwitterShareButton url={url} title={postData?.title} hashtags={["先人の知恵"]} className="single__twitter"><TwitterIcon size={28} round/></TwitterShareButton>
                </h1>
                <p className="single__category"><span className="single__icon"><i className={categoryIcon}></i></span>{postData?.category.category_name}</p>
                <p className="single__content">
                    {postData?.content}
                </p>
                <p className="text-center">
                    {canSetMylist ?
                        <input type="button" className="single__button" value="マイリストに追加" onClick={sendMylistDataToDB}/>
                        :
                        <input type="button" className="single__button--disable" value="マイリストに追加" disabled/>
                    }
                </p>                
                <p className="text-center">
                    <Link className="single__button--back" to="/">
                        戻る
                    </Link>
                </p>
            </div>
        </>
    )
}

export default Single;