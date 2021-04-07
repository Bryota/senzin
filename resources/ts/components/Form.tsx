import React from 'react';
import Header from './Header';

const Form:React.FC = () => {
    return (
        <>
            <Header />
            <div className="form">
                <h1 className="form__title">投稿フォーム</h1>
                <form className="form__wrap">
                    <div className="form__items">
                        <div className="form__item">
                            <label htmlFor="category" className="form__label">カテゴリ<span className="form__required">必須</span></label>
                            <select name="category" id="category" className="form__select">
                                <option value="food">食べ物</option>
                                <option value="clean">掃除</option>
                                <option value="health">健康</option>
                                <option value="sport">スポーツ</option>
                                <option value="machine">機械</option>
                                <option value="other">その他</option>
                            </select>
                        </div>
                        <div className="form__item">
                            <label htmlFor="name" className="form__label">投稿者名</label>
                            <input type="text" id="name" className="form__input" />
                        </div>
                        <div className="form__item">
                            <label htmlFor="content" className="form__label">内容<span className="form__required">必須</span></label>
                            <textarea name="content" id="content" className="form__textarea" ></textarea>
                        </div>
                        <div className="text-center">
                            <input type="button" value="投稿する" className="form__button"/>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form;