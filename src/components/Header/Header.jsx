import profile from '../../assets/images/profile.png'
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

                        <div className="form-control">
                            <input type="text" placeholder="Search" className=" py-3 px-6  rounded-full bg-[#150B2B0D]" />
                        </div>

                        <button
                            className="ml-3 p-4 mx-auto bg-[#0BE58A] rounded-full text-xl font-bold flex items-center"> <img src={profile} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;