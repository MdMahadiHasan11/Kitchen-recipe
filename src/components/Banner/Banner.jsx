
import bannerImg from '../../assets/images/background.png'
const Banner = () => {
    return (
        <div>

            <div className=" relative w-full" >

                <img src={bannerImg} alt="" className='w-full h-auto' />
                <div className="hero-overlay bg-opacity-60"></div>
                <div className=" w-4/5 text-center text-neutral-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className=" text-white">
                        <h1 className="lg:mb-5 mb-2 lg:text-5xl md:text-xl text-lg font-bold">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="lg:mb-5 mb-2">A recipe kitchen is a space dedicated to the creation, experimentation, and enjoyment of culinary delights.</p>


                        <div>
                            <div className=" flex text-center items-center lg:py-4 py-2 ">
                                <div className='flex mx-auto py-4 gap-6 font-bold text-2xl'>
                                    <button className="lg:p-5 p-2  bg-[#0BE58A] rounded-full text-black">Explore Now</button>

                                    <button className="lg:p-5 p-2 border border-solid border-white rounded-full">Our Feedback</button>
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