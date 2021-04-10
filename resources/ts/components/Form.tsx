import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import Header from './Header';

interface PostType {
    category: '1' | '2' | '3' | '4' | '5' | '6';
    user: string;
    content: string;
}
const Form:React.FC = () => {
    const [category, setCotegory] = useState<string>();
    const [user, setUser] = useState<string>();
    const [content, setContent] = useState<string>();
    const setPostData = async(data: PostType) => {
        await axios.post('/api/setPostData', data)
        .then(() => {
            console.log('yyy');
        })
    }
    const submitPostData = (e: FormEvent) => {
        e.preventDefault();
    }
    return (
        <>
            <Header />
            <div className="form">
                <h1 className="form__title">投稿フォーム</h1>
                <form className="form__wrap" onSubmit={(e) => {submitPostData(e)}}>
                    <div className="form__items">
                        <div className="form__item">
                            <label htmlFor="category" className="form__label">カテゴリ<span className="form__required">必須</span></label>
                            <select name="category" id="category" className="form__select" onChange={e => setCotegory(e.target.value)}>
                                <option value="1">食べ物</option>
                                <option value="2">掃除</option>
                                <option value="3">健康</option>
                                <option value="4">スポーツ</option>
                                <option value="5">機械</option>
                                <option value="6">その他</option>
                            </select>
                        </div>
                        <div className="form__item">
                            <label htmlFor="user" className="form__label">投稿者名</label>
                            <input type="text" id="user" className="form__input" onChange={e => setUser(e.target.value)} />
                        </div>
                        <div className="form__item">
                            <label htmlFor="content" className="form__label">内容<span className="form__required">必須</span></label>
                            <textarea name="content" id="content" className="form__textarea" onChange={e => setContent(e.target.value)}></textarea>
                        </div>
                        <div className="text-center">
                            <input type="submit" value="投稿する" className="form__button" />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form;