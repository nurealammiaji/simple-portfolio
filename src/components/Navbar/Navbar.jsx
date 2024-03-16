
const Navbar = () => {
    return (
        <div className="h-[50px] flex items-center justify-between w-11/12 mx-auto">
            <div>
                <h3 className="text-3xl font-medium">Nure Alam Miaji</h3>
            </div>
            <ul className="flex [&>*]:mx-5 hover:[&>*]:underline underline-offset-8 hover:[&>*]:text-slate-500 text-2xl">
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;