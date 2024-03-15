
const Hero = () => {
    return (
        <div className="flex items-center justify-center mt-60">
            <div className="w-2/6">
                <img className="w-full rounded-full" src="https://avatars.githubusercontent.com/u/8621487?v=4" alt="" />
            </div>
            <div className="ml-20 text-center">
                <p className="text-lg">Hello, I'm</p>
                <h4 className="my-4 text-3xl font-medium">Nure Alam Miaji</h4>
                <h5 className="text-2xl font-semibold text-slate-500">Frontend Developer</h5>
                <div className="flex mt-4">
                    <button className="p-3 font-medium border border-black rounded-full">Download CV</button>                    <button className="p-3 ml-4 font-medium border border-black rounded-full">Contact Info</button>
                </div>
                <div className="flex justify-center mt-4">
                    <button className="w-8">
                        <a href="#">
                            <img src="https://tangerine-hummingbird-1479b6.netlify.app/assets/linkedin.png" alt="" />
                        </a>
                    </button>
                    <button className="w-8 ml-4">
                        <a href="#">
                            <img src="https://tangerine-hummingbird-1479b6.netlify.app/assets/github.png" alt="" />
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;