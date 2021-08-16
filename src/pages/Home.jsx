import React from 'react';
import Card from '../components/Card';

function Home({items, searchValue, setSearchValue, onChangeSearchInput, onAddToFavorite, onAddToCart}) {
    return (
        <div className="content p-40">
            <div className='mb-40 d-flex align-center justify-between'>
                <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кросовки'}</h1>
                <div className='search-block d-flex'>
                    <img src="/img/search.svg" alt="Search"/>
                    {searchValue && (
                        <img
                            onClick={() => setSearchValue('')}
                            className='clear cu-p'
                            src="/img/btn-remove.svg" alt="remove"
                        />
                    )}
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder='Поиск...'/>
                </div>

            </div>

            <div className="d-flex flex-wrap">
                {items
                    .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                    .map((item, index) =>
                        <Card
                            key = {index}
                            onFavorite = {(obj) => onAddToFavorite(obj)}
                            onPlus = {(obj) => onAddToCart(obj)}
                            {...item}
                        />
                    )}
            </div>
        </div>
    )
}

export default Home