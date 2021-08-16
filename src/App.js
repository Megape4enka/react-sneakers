import React from 'react';
import './index.scss'
import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'
import {Route} from 'react-router-dom'
import axios from 'axios'
import Home from './pages/Home';
import Favorites from './pages/Favorites';

// const arr = [
//   {"title": "Мужские Кроссовки Nike Blazer Mid Suede", "price": 12999, "imageUrl": "/img/sneakers/1.jpg"},
//   {"title": "Мужские Кроссовки Nike Air Max 270", "price": 12999, "imageUrl": "/img/sneakers/2.jpg"},
//   {"title": "Мужские Кроссовки Nike Blazer Mid Suede", "price": 8499, "imageUrl": "/img/sneakers/3.jpg"},
//   {"title": "Кроссовки Puma X Aka Boku Future Rider", "price": 8999, "imageUrl": "/img/sneakers/4.jpg"},
//   {"title": "Мужские Кроссовки Under Armour Curry 8", "price": 15199, "imageUrl": "/img/sneakers/5.jpg"},
//   {"title": "Мужские Кроссовки Nike Kyrie 7", "price": 11299, "imageUrl": "/img/sneakers/6.jpg"},
//   {"title": "Мужские Кроссовки Jordan Air Jordan 11", "price": 10799, "imageUrl": "/img/sneakers/7.jpg"},
//   {"title": "Мужские Кроссовки Nike LeBron XVIII", "price": 16499, "imageUrl": "/img/sneakers/8.jpg"},
//   {"title": "Мужские Кроссовки Nike Lebron XVIII Low", "price": 13999, "imageUrl": "/img/sneakers/9.jpg"},
//   {"title": "Мужские Кроссовки Nike Blazer Mid Suede", "price": 8499, "imageUrl": "/img/sneakers/10.jpg"},
//   {"title": "Кроссовки Puma X Aka Boku Future Rider", "price": 8999, "imageUrl": "/img/sneakers/1.jpg"},
//   {"title": "Мужские Кроссовки Nike Kyrie Flytrap IV", "price": 11299, "imageUrl": "/img/sneakers/2.jpg"},
// ]

function App() {

  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false)

  React.useEffect(() => {
    axios.get('https://6115823a8f38520017a38536.mockapi.io/items').then(res => {
      setItems(res.data)
    })
    axios.get('https://6115823a8f38520017a38536.mockapi.io/cart').then(res => {
      setCartItems(res.data)
    })
    axios.get('https://6115823a8f38520017a38536.mockapi.io/favorites').then(res => {
      setFavorites(res.data)
    })
  }, [])

  const onAddToCart = (obj) => {
    axios.post('https://6115823a8f38520017a38536.mockapi.io/cart', obj)
    setCartItems(prev => [...prev, obj])
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://6115823a8f38520017a38536.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter((item) => item.id !== id))
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(favObj => favObj.id === obj.id)) {
        axios.delete(`https://6115823a8f38520017a38536.mockapi.io/favorites/${obj.id}`)
      } else {
        const { data } = await axios.post('https://6115823a8f38520017a38536.mockapi.io/favorites', obj)
        setFavorites(prev => [...prev, data])
      }
    } catch (error) {
      alert('Не удалось добавить в фавориты')
    }
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper clear">

      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
      
      <Header onClickCart={() => setCartOpened(true)} />
      
      <Route path='/' exact>
        <Home
            items={items}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToFavorite={onAddToFavorite}
            onAddToCart={onAddToCart}
        />
      </Route>

      <Route path='/favorites' exact>
        <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
      </Route>
      
    </div>
  );
}

export default App;