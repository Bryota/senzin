import React from 'react';
import Header from './Header';

const Search:React.FC = () => {
    return (
        <>
            <Header />
            <div className="search">
                <h1 className="search__title">検索</h1>
                <form className="search__wrap">
                    <div className="search__items">
                        <div className="search__item">
                            <label htmlFor="category" className="search__label">カテゴリ<span className="search__required">必須</span></label>
                            <select name="category" id="category" className="search__select">
                                <option value="food">食べ物</option>
                                <option value="clean">掃除</option>
                                <option value="health">健康</option>
                                <option value="sport">スポーツ</option>
                                <option value="machine">機械</option>
                                <option value="other">その他</option>
                            </select>
                        </div>
                        <div className="search__item">
                            <label htmlFor="freeword" className="search__label">フリーワード</label>
                            <input type="text" id="freeword" className="search__input" />
                        </div>
                        <div className="text-center">
                            <input type="button" value="検索する" className="search__button"/>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Search;
