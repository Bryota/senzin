import React from 'react';
import Header from './Header';

const Single:React.FC = () => {
    return (
        <>
            <Header />
            <div className="single">
                <h1 className="single__title">テスト投稿/テストユーザー</h1>
                <p className="single__category"><span className="single__icon--food"><i className="fas fa-utensils"></i></span>食べ物</p>
                <p className="single__content">
                    テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
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