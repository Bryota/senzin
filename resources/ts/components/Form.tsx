import React, { useState, useEffect, FormEvent } from 'react';
import axios from 'axios';
import * as History from 'history';
import Header from './Header';
import Validation from '../util/Validation';

interface PropsType {
    history: History.History;
}

interface CategoryType {
    category: '1' | '2' | '3' | '4' | '5' | '6';
}

interface PostType {
    title: string
    category: CategoryType;
    username: string;
    content: string;
}

const Form = (props: PropsType) => {
    const [title, setTitle] = useState<string>();
    const [category, setCotegory] = useState<CategoryType | string>("1");
    const [username, setUsername] = useState<string>('匿名希望');
    const [content, setContent] = useState<string>();
    const [titleValidationFlg, setTitleValidationFlg] = useState<boolean>(false);
    const [categoryValidationFlg, setCategoryValidationFlg] = useState<boolean>(false);
    const [usernameValidationFlg, setUsernameValidationFlg] = useState<boolean>(false);
    const [contentValidationFlg, setContentValidationFlg] = useState<boolean>(false);

    useEffect(() => {
        checkValidation();
    },[title, category, username, content])

    const checkValidation = () => {
        Validation(title as string, setTitleValidationFlg);
        Validation(category as string, setCategoryValidationFlg);
        Validation(username as string, setUsernameValidationFlg);
        Validation(content as string, setContentValidationFlg);
    }

    const sendPostDataToDB = async(data: PostType) => {
        await axios.post('/api/setPostData', data)
        .then(() => {
            setTitle('');
            setCotegory('');
            setUsername('');
            setContent('');
        })
    }

    const submitPostData = async(e: FormEvent) => {
        e.preventDefault();
        await sendPostDataToDB({
            title: title as string,
            category: category as CategoryType,
            username: username as string,
            content: content as string
        });
        props.history.push('/');
    }

    return (
        <>
            <Header />
            <div className="form">
                <h1 className="form__title">登稿フォーム</h1>
                <form className="form__wrap" onSubmit={(e) => {submitPostData(e)}}>
                    <div className="form__items">
                        <div className="form__item">
                            <label htmlFor="title" className="form__label ">
                                投稿タイトル<span className="form__required">必須</span>
                                { titleValidationFlg ?
                                <p className="validation">投稿タイトルを入力してください</p>
                                :
                                <></>
                                }
                            </label>
                            <input type="text" id="title" className="form__input" value={title} onChange={e => setTitle(e.target.value)} />
                        </div>
                        <div className="form__item">
                            <label htmlFor="category" className="form__label">
                                カテゴリ<span className="form__required">必須</span>
                                { categoryValidationFlg ?
                                <p className="validation">カテゴリを選択してください</p>
                                :
                                <></>
                                }
                            </label>
                            <select name="category" id="category" className="form__select" onChange={e => setCotegory(e.target.value)} defaultValue="1">
                                <option value="1">食べ物</option>
                                <option value="2">掃除</option>
                                <option value="3">健康</option>
                                <option value="4">スポーツ</option>
                                <option value="5">機械</option>
                                <option value="6">その他</option>
                            </select>
                        </div>
                        <div className="form__item">
                            <label htmlFor="username" className="form__label">
                                投稿者名<span className="form__required">必須</span>
                                { usernameValidationFlg ?
                                <p className="validation">投稿者名を入力してください</p>
                                :
                                <></>
                                }
                            </label>
                            <input type="text" id="username" className="form__input" value={username} onChange={e => setUsername(e.target.value)} />
                        </div>
                        <div className="form__item">
                            <label htmlFor="content" className="form__label">
                                内容<span className="form__required">必須</span>
                                { contentValidationFlg ?
                                <p className="validation">内容を入力してください</p>
                                :
                                <></>
                                }
                            </label>
                            <textarea name="content" id="content" className="form__textarea" value={content} onChange={e => setContent(e.target.value)}></textarea>
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