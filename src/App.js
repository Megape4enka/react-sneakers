import React from 'react';
import './index.scss'

function App() {
  return (
    <div className="wrapper clear">
      <header className='d-flex justify-between align-center p-40'>
        <div className='d-flex aling-center'>
          <img width={40} height={40} src="/img/logo.png" />
          <div>
            <h3 className='text-uppercase'>React Sneakers</h3>
            <p className='opacity-5'>Магазин лучших кросовок</p>
          </div>
        </div>
        <ul className='d-flex'>
          <li className='mr-30'>
            <img width={18} height={18} src="/img/cart.svg" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" />
          </li>
        </ul>
      </header>

      <div className="content p-40">
        <h1 className='mb-40'>Все кросовки</h1>

        <div className="d-flex">
          <div className='card'>
              <img src="/img/sneakers/1.jpg" width={133} height={112} />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column'>
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button className='button'>
                  <img src="/img/plus.svg" width={11} height={11}/>
                </button>
              </div>
            </div>
          </div>
        </div>

    </div>
  );
}

export default App;
