import PropTypes from 'prop-types'
import Bookmark from '../../components/Bookmark/Bookmark'
// import Comment from '../../components/Comment/Comment'  

const Bookmarks = ({ bookmarks , handlePrepare }) => {
    return (
        <div className="md:w-1/3 lg:m-10 m-6 bg-base-200 shadow-xl">

            {/* <Comment comment={comment}></Comment> */}

            <h2 className="text-2xl font-semibold text-center">Want to cook:{bookmarks.length}</h2>

            <div className='border border-solid border-gray-200 my-4'>

            </div>

            {/* table */}
            <div className="">
                <div className='flex justify-around'>
                    <p></p>
                    <p>Name</p>
                    <p>Time</p>
                    <p>Calories</p>
                    <p></p>
                </div>
            </div>

            {/* table   */}


            {
                bookmarks.map((bookmark, i) => <Bookmark key={bookmark.recipe_id} bookmark={bookmark} index={i + 1}> handlePrepare={handlePrepare}</Bookmark>)

            }



            <h2 className="text-2xl mt-8 font-semibold text-center">Currently cooking:{bookmarks.length}</h2>

            <div className='border border-solid border-gray-200 my-4'>

            </div>
            {/* table */}
            <div className="">
                <div className='flex justify-around'>
                    <p></p>
                    <p>Name</p>
                    <p>Time</p>
                    <p>Calories</p>
                    <p></p>
                </div>
            </div>

            {/* table   */}

            {
                bookmarks.map((bookmark, i) => <Bookmark key={bookmark.recipe_id} bookmark={bookmark} index={i + 1}></Bookmark>)

            }

            <div className='border border-solid border-gray-200 my-4'>

            </div>
            <div className='flex justify-between font-bold'  >
                <div>Total Time= 20 Minutes</div>
                <div>Total Calories= 400 Calories</div>
            </div>




        </div >
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    handlePrepare: PropTypes.func
}

export default Bookmarks;