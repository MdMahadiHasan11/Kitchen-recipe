import profile from '../../assets/images/profile.png'
import search from '../../assets/images/search.png'
const Header = () => {
    return (
        <div>
            <div className="my-6">
                <div className="flex justify-between items-center">
                    <div className="flex">
                        <div>
                            <a href="" className="text-4xl font-extrabold">Kitchen Recipe</a>
                        </div>
                    </div>
                    <div className=" hidden lg:flex">
                        <ul className="px-1 text-lg flex">
                            <li><a href="" className="text-btn-color ">Home</a></li>
                            <li className="mx-8"><a  href="" className="text-text-gray">Recipes</a></li>
                            <li><a href=""  className="text-text-gray">About</a></li>
                            <li className="mx-8"><a href=""  className="text-text-gray">Search</a></li>
                        </ul>
                    </div>
                    <div className="flex justify-between items-center">

                        <div className="form-control relative">
                        <img src={search} alt="" className='absolute top-3 left-3' />
                            <input type="text" placeholder="Search" className=" py-3 pr-6 pl-10   rounded-full bg-[#150B2B0D]" />
                        </div>

                        <button
                            className="md:ml-4 md:p-4 p-5 ml-4 mx-auto bg-[#0BE58A] rounded-full text-xl font-bold flex items-center"> <img src={profile} alt="" className='w-full h-full text-4xl' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;