import PropTypes from 'prop-types';

const PrepareMark = ({bookmark , index}) => {



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
                            <td className=''>{recipe_name} </td>
                            <td className='pl-6'>{prepare_time} Minutes</td>
                            <td className='pl-8'>{calories} Calories</td> 
                        </tr>

                    </tbody>
                </table>


            </div>
        </div>
    );
};


PrepareMark.propTypes = {
    bookmark: PropTypes.object,
    index: PropTypes.number,


    handlePrepare1: PropTypes.object,
    handleRemove: PropTypes.func

}

export default PrepareMark;