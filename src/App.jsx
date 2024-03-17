import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'

// import Bookmarks from './components/Bookmarks/Bookmarks'

import Carts from './components/Carts/Carts'
import Header from './components/Header/Header'

import Bookmark1 from './components/Bookmark/Bookmark1';
import PrepareMark from './components/PrepareMark/PrepareMark'


function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [prepareIteam, setPrepareIteam] = useState([]);

  const [prepareTime, setPrepareTime] = useState(0);
  const [prepareCalorie, setPrepareCalorie] = useState(0);

  // let comment='';




  const handleAddBookmark = cart => {




    const isExist = bookmarks.find(item => item.recipe_id == cart.recipe_id);
    if (!isExist) {
      const newBookmarks = [...bookmarks, cart];
      setBookmarks(newBookmarks);
    }
    else {
      toast("Already exist!");
    }


  }

  const handleRemove = (bookmark) => {

    const newBookmark = bookmarks.filter(item => item.recipe_id != bookmark.recipe_id)
    setBookmarks(newBookmark);



    const newBookmarks = [...prepareIteam, bookmark];
    setPrepareIteam(newBookmarks);


    // const newPrepareTime = prepareTime+bookmark.prepare_time;
    setPrepareTime(prepareTime + bookmark.prepare_time);


    const newCalories = prepareCalorie + bookmark.calories;
    setPrepareCalorie(newCalories);



  }







  return (
    <>
      <div className='container mx-auto'>
        <Header></Header>

        <Banner></Banner>


        <div className='my-20 '>
          <div className='md:w-2/3'>
            <div className='text-center'>
              <h3 className='font-extrabold text-4xl mb-10'>Our Recipes</h3>
              <p className='text-gray-600 md:w-3/4 mx-auto '>Our Recipes is a platform dedicated to sharing a wide array of culinary creations, ranging from traditional favorites to innovative dishes .Our goal is to inspire and empower individuals to explore the world of cooking, regardless of their level of experience in the kitchen.</p>
            </div>
          </div>

          <div className='md:flex'>
            <Carts handleAddBookmark={handleAddBookmark}></Carts>


            {/* side bar */}
            <div className="md:w-1/3 lg:m-10 m-6 ">
              <ToastContainer />
              <div className='border bg-base-200 shadow-xl ' >

                {/* <Comment comment={comment}></Comment> */}

                <h2 className="text-2xl font-semibold text-center">Want to cook:{bookmarks.length}</h2>

                <div className='border border-solid border-gray-200 my-4'>

                </div>

                {/* table */}
                <div className=''>
                  <div className='flex justify-around'>
                    <p></p>
                    <p>Name</p>
                    <p>Time</p>
                    <p>Calories</p>
                    <p></p>
                  </div>
                </div>


                {
                  bookmarks.map((bookmark, i) => <Bookmark1
                    key={bookmark.recipe_id}
                    bookmark={bookmark}
                    handleRemove={handleRemove}
                    index={i + 1}
                  > </Bookmark1>)

                }
                <h2 className="text-2xl mt-8 font-semibold text-center">Currently cooking:{prepareIteam.length}</h2>

                <div className='border border-solid border-gray-200 my-4'> </div>







                {/* table */}
                <div className=''>
                  <div className='flex justify-around'>
                    <p></p>
                    <p>Namee</p>
                    <p>Time</p>
                    <p>Calories</p>
                    <p></p>
                  </div>
                </div>

                <div>
                  {
                    prepareIteam.map((prepare, i) => <PrepareMark
                      key={prepare.recipe_id}
                      bookmark={prepare}
                      index={i + 1}
                    > </PrepareMark>)

                  }
                </div>

                {/* table   */}

                <div className='border border-solid border-gray-200 my-4'> </div>


                {/* 2nd table */}
                <div>

                  {/* {
                prepareIteam.map(prepareIteam, j => (
                  <div>
                    <div className='bg-slate-200 p-4 m-4 rounded-xl'>
                      <h3 className='text-2xl'></h3>


                      <table className="table">
                        <tbody>

                          <tr className="bg-base-200">
                            <th className='pr-3'>{j}</th>
                            <td className='pr-3'>{prepareIteam.recipe_name}</td>
                            <td className='pr-3'>{prepareIteam.prepare_time}</td>
                            <td className='pr-3'>{prepareIteam.calories}</td>
                          </tr>

                        </tbody>
                      </table>


                    </div>
                  </div>)
                )
              } */}

                </div>


                <div className='flex justify-between font-bold pb-10 px-1'>
                  <div>Total Time=
                    <span>
                      {prepareTime}

                    </span> Minutes</div>


                  <div>Total Calories=<span>{prepareCalorie}</span> Calories</div>
                </div>




              </div >
            </div>
          </div>
          <div>

          </div>

        </div>
      </div>
    </>
  )
}

export default App
