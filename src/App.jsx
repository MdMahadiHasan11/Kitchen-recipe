
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Bookmarks from '../../components/Bookmarks/Bookmarks'
import Carts from './components/Carts/Carts'
import Header from './components/Header/Header'


function App() {

  const [bookmarks, setBookmarks] = useState([]);
  // let comment='';


  const handleAddBookmark = cart => {

    const isExist = bookmarks.find(item => item.recipe_id == cart.recipe_id);
    if (!isExist) {
      const newBookmarks = [...bookmarks, cart];
      setBookmarks(newBookmarks);
    }
    else {
      // comment=`hasan`;
      // <Bookmarks comment={comment}></Bookmarks>
      alert('Double click');
    }


  }

  const handlePrepare = cartid =>{
    console.log(cartid);
  }



  return (
    <>
      <Header></Header>

      <Banner></Banner>

      <div className='md:flex'>
        <Carts handleAddBookmark={handleAddBookmark}></Carts>

        <Bookmarks bookmarks={bookmarks } handlePrepare={handlePrepare}></Bookmarks>
      </div>

    </>
  )
}

export default App
