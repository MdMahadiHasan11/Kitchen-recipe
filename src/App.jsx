
import './App.css'
import Banner from './components/Banner/Banner'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Carts from './components/Carts/Carts'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header></Header>

      <Banner></Banner>

      <div className='md:flex'>
        <Carts></Carts>
        <Bookmarks></Bookmarks>
      </div>



    </>
  )
}

export default App
