import Image from "next/image";

const Header = () => {
    return (
        <div className='px-8 py-5 grid grid-cols-3 text-sm'>
            <Image
                src={'/logo.svg'}
                alt='page logo'
                width={100}
                height={30}
            />
            <div className="flex justify-between items-center uppercase tracking-wider">
                <button type="button" className="bg-primary hover:bg-white text-white border border-primary 
                    hover:text-primary shadow-xl py-2 px-6 rounded-3xl
                    inline-flex items-center
                    transition uppercase tracking-wide">
                    <svg className="w-3 h-3 text-gray-800 me-2 hover:text-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                    </svg>  
                    New recipe
                </button>
                <div className="px-2 py-4">Recipes</div>
                <div className="px-2 py-4">Ingredients</div>
            </div>
            <div className="flex justify-end items-center gap-5">
                <Image
                    src={'/bell.png'}
                    alt='notification icon'
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '25px', height: '25px'}}
                />
                <button className="bg-primary hover:bg-white text-white border hover:text-primary shadow-xl border-primary py-2 px-6 rounded-3xl transition">
                    Login
                </button>
            </div>
        </div>
    )
}

export default Header;