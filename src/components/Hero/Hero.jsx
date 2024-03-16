
const Hero = () => {
    return (
        <div className="flex items-center justify-center mt-32">
            <div className="w-2/6">
                <img className="w-full rounded-full" src="https://avatars.githubusercontent.com/u/8621487?v=4" alt="" />
            </div>
            <div className="ml-24 text-center">
                <p className="text-sm font-semibold text-slate-600">Hello, I'm</p>
                <h4 className="my-2 text-4xl font-bold">Nure Alam Miaji</h4>
                <h5 className="text-2xl font-semibold text-slate-600">Frontend Developer</h5>
                <div className="flex mt-6">
                    <a href="#" target="blank">
                        <button className="p-3 text-sm font-medium border border-black rounded-full hover:border-slate-600 hover:bg-slate-600 hover:text-white">Download CV</button>
                    </a>
                    <a href="#">
                        <button className="p-3 ml-4 text-sm font-medium text-white border rounded-full hover:border-black border-slate-600 bg-slate-600 hover:bg-black">Contact Info</button>
                    </a>
                </div>
                <div className="flex justify-center mt-6">
                    <button className="w-8">
                        <a href="https://linkedin.com/in/nurealammiaji">
                            <img src="https://tangerine-hummingbird-1479b6.netlify.app/assets/linkedin.png" alt="" />
                        </a>
                    </button>
                    <button className="w-8 ml-4">
                        <a href="https://github.com/nurealammiaji">
                            <img src="https://tangerine-hummingbird-1479b6.netlify.app/assets/github.png" alt="" />
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;