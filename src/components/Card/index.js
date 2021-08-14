import React from 'react';
import styles from './Card.module.scss'

function Card({ title, imageUrl, price, onFavorite, onPlus}) {

    const [isAdded, setIsAdded] = React.useState(false)

    const onClickPlus = () => {
        onPlus({title, imageUrl, price})
        setIsAdded(!isAdded)
    }

    React.useEffect(() => {

    }, [isAdded])

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onFavorite}>
                <img src="/img/unliked.svg" alt="unliked"/>
            </div>
            <img src={imageUrl} width={133} height={112} alt='sneakers' />
            <h5>{title}</h5>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column'>
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img
                    className={styles.plus}
                    onClick={onClickPlus}
                    src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
                    alt='button'
                />
            </div>
        </div>
    );
};

export default Card;