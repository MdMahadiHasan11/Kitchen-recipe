
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
// import Bookmarks from '../../components/Bookmarks/Bookmarks'
import Bookmarks from './components/Bookmarks/Bookmarks'
// import Bookmark from './components/bookmark/bookmark'
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

  // const handlePrepare = bookmark =>{
  //   console.log(bookmark);
  // }



  return (
    <>
      <Header></Header>

      <Banner></Banner>

      <div className='md:flex'>
        <Carts handleAddBookmark={handleAddBookmark}></Carts>
{/* handlePrepare={handlePrepare} */}
        <Bookmarks bookmarks={bookmarks } ></Bookmarks>
      </div>

    </>
  )
}

export default App
