import React from 'react';
import './index.scss'
import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

const arr = [
  {"title": "Мужские Кроссовки Nike Blazer Mid Suede", "price": 12999, "imageUrl": "/img/sneakers/1.jpg"},
  {"title": "Мужские Кроссовки Nike Air Max 270", "price": 12999, "imageUrl": "/img/sneakers/2.jpg"},
  {"title": "Мужские Кроссовки Nike Blazer Mid Suede", "price": 8499, "imageUrl": "/img/sneakers/3.jpg"},
  {"title": "Кроссовки Puma X Aka Boku Future Rider", "price": 8999, "imageUrl": "/img/sneakers/4.jpg"},
  {"title": "Мужские Кроссовки Under Armour Curry 8", "price": 15199, "imageUrl": "/img/sneakers/5.jpg"},
  {"title": "Мужские Кроссовки Nike Kyrie 7", "price": 11299, "imageUrl": "/img/sneakers/6.jpg"},
  {"title": "Мужские Кроссовки Jordan Air Jordan 11", "price": 10799, "imageUrl": "/img/sneakers/7.jpg"},
  {"title": "Мужские Кроссовки Nike LeBron XVIII", "price": 16499, "imageUrl": "/img/sneakers/8.jpg"},
  {"title": "Мужские Кроссовки Nike Lebron XVIII Low", "price": 13999, "imageUrl": "/img/sneakers/9.jpg"},
  {"title": "Мужские Кроссовки Nike Blazer Mid Suede", "price": 8499, "imageUrl": "/img/sneakers/10.jpg"},
  {"title": "Кроссовки Puma X Aka Boku Future Rider", "price": 8999, "imageUrl": "/img/sneakers/1.jpg"},
  {"title": "Мужские Кроссовки Nike Kyrie Flytrap IV", "price": 11299, "imageUrl": "/img/sneakers/2.jpg"},
]

function App() {

  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)

  React.useEffect(() => {
    fetch('https://6115823a8f38520017a38536.mockapi.io/items')
        .then(res => {
          return res.json()
    }).then((json) => {
      setItems(json)
    })
  }, [])

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj])
  }

  return (
    <div className="wrapper clear">

      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className='mb-40 d-flex align-center justify-between'>
          <h1>Все кросовки</h1>
          <div className='search-block d-flex'>
            <img src="/img/search.svg" alt="Search"/>
            <input type="text" placeholder='Поиск...'/>
          </div>

        </div>

        <div className="d-flex flex-wrap">
          {items.map((item) =>
              <Card
                  title = {item.title}
                  price = {item.price}
                  imageUrl = {item.imageUrl}
                  onFavorite = {() => console.log('Добавление в избранное')}
                  onPlus = {(obj) => onAddToCart(obj)}
              />
          )}
        </div>

      </div>

    </div>
  );
}

export default App;