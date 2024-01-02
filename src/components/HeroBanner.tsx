import Image from "next/image";

const HeroBanner = () => {
    return (
        <div className="relative">
            <Image
                src={'/hero-banner.png'}
                alt="hero banner"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto', minHeight: '500px'}}
                objectFit="cover"
            />
            <div className="absolute top-0 w-full h-full pt-20 text-center">
                <div className="max-w-[50%] m-auto pb-10">
                    <div className='text-[42px] mb-5 font-[Cursive] font-bold'><span className='text-primary'>AI-Powered</span> Recipe Generator</div>
                    <div>Say goodbye to boring meals, with AI-powered recipe recommendations, meal plans creation and more... 100,000+ dinners saved so far</div>
                </div>
                <button className="bg-primary hover:bg-white text-white border hover:text-primary text-sm
                                border-primary shadow-xl py-2 px-6 rounded-3xl
                                transition uppercase tracking-wider">
                    Get started
                </button>
            </div>
        </div>
    )
}

export default HeroBanner;