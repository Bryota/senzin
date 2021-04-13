import React, { useState } from 'react';
import * as History from 'history';
import Header from './Header';

interface PropsType {
    history: History.History;
}

const Search = (props: PropsType) => {
    const [categoryId, setCategoryId] = useState<string>();
    const [freeword, setFreeword] = useState<string>();

    const sendSearchDataToResultPage = () => {
        props.history.push({
            pathname: '/result',
            state: {
                categoryId: categoryId,
                freeword: freeword
            }
        })
    }
    return (
        <>
            <Header />
            <div className="search">
                <h1 className="search__title">検索</h1>
                <div className="search__wrap">
                    <div className="search__items">
                        <div className="search__item">
                            <label htmlFor="category" className="search__label">カテゴリ<span className="search__required">必須</span></label>
                            <select name="category" id="category" className="search__select" onChange={e => setCategoryId(e.target.value)}>
                                <option value="1">食べ物</option>
                                <option value="2">掃除</option>
                                <option value="3">健康</option>
                                <option value="4">スポーツ</option>
                                <option value="5">機械</option>
                                <option value="6">その他</option>
                            </select>
                        </div>
                        <div className="search__item">
                            <label htmlFor="freeword" className="search__label">フリーワード</label>
                            <input type="text" id="freeword" value={freeword} className="search__input" onChange={e => setFreeword(e.target.value)}/>
                        </div>
                        <div className="text-center">
                            <input type="button" value="検索する" className="search__button" onClick={sendSearchDataToResultPage}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search;
