import React from 'react';
import Card from '../components/Card'
import AppContext from '../context'

function Favorites() {
    const { favorites, onAddToFavorite } = React.useContext(AppContext)
    return (
        <div className="content p-40">
            <div className='mb-40 d-flex align-center justify-between'>
                  <h1>Мои закладки</h1>
            </div>

            <div className="d-flex flex-wrap">
                {favorites.map((item, index) => (
                    <Card key={index} favorited={true} onFavorite={onAddToFavorite} {...item} />
                ))}
            </div>
        </div>
    )
}

export default Favorites