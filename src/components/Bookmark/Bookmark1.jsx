// import PropTypes  from 'prop-types'
import PropTypes from 'prop-types';

const Bookmark1 = ({ bookmark, index, handleRemove }) => {
    // const {bookmark , index , handleRemove }=props
    // const { bookmark , index}=props;

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
                                <td className='pr-3'>{index}</td>
                                <td className=''>{recipe_name}</td>
                                <td className='pl-3'>{prepare_time} Minutes</td>
                                <td className='pl-3'>{calories} Calories</td>
                                {/* <td className='pr-3'><button onClick={()=>handlePrepare1(bookmark)}  className='py-2 px-4 mx-auto bg-[#0BE58A] rounded-full'>Preparing</button></td> */}

                                <td className='pr-3'><button onClick={() => handleRemove(bookmark)} className='py-2 px-4 mx-auto bg-[#0BE58A] rounded-full'>Preparing
                                </button></td>
                            </tr>

                        

                    </tbody>
                </table>


            </div>
        </div>
    );
};
Bookmark1.propTypes = {
    bookmark: PropTypes.object,
    index: PropTypes.number,


    handlePrepare1: PropTypes.object,
    handleRemove: PropTypes.func

}

export default Bookmark1;