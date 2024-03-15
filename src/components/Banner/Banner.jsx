
import bannerImg from '../../assets/images/background.png'
const Banner = () => {
    return (
        <div>

            <div className=" relative w-full" >

                <img src={bannerImg} alt="" className='w-full h-auto' />
                <div className="hero-overlay bg-opacity-60"></div>
                <div className=" w-4/5 text-center text-neutral-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className=" text-white">
                        <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-5">A recipe kitchen is a space dedicated to the creation, experimentation, and enjoyment of culinary delights.</p>


                        <div>
                            <div className=" flex text-center items-center py-4 ">
                                <div className='flex mx-auto py-4 gap-6 font-bold text-2xl'>
                                    <button className="p-5  bg-[#0BE58A] rounded-full text-black">Explore Now</button>

                                    <button className="p-5 border border-solid border-white rounded-full">Our Feedback</button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;