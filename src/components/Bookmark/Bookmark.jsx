import PropTypes from 'prop-types'

const Bookmark = (props) => {
    const {bookmark , index , handlePrepare }=props;

    // const {index} = index;
    const { recipe_name, prepare_time, calories } = bookmark;
    return (
        <div>


            <div className='bg-slate-200 p-4 m-4 rounded-xl'>
                <h3 className='text-2xl'></h3>


                <table className="table">

                    <thead>
                        {/* <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr> */}
                    </thead>
                    <tbody>

                        <tr className="bg-base-200">
                            <th className='pr-3'>{index}</th>
                            <td className='pr-3'>{recipe_name}</td>
                            <td className='pr-3'>{prepare_time}</td>
                            <td className='pr-3'>{calories}</td>
                            <td className='pr-3'><button onClick={()=>handlePrepare(recipe_name)} className='py-2 px-4 mx-auto bg-[#0BE58A] rounded-full'>Preparing</button></td>
                        </tr>

                    </tbody>
                </table>


            </div>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object,
    index:PropTypes.number,
    handlePrepare:PropTypes.func
}

export default Bookmark;