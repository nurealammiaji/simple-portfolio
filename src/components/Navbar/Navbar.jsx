
const Navbar = () => {
    return (
        <div className="h-[50px] flex items-center justify-between">
            <div>
                <h3 className="text-3xl">Nure Alam</h3>
            </div>
            <ul className="flex [&>*]:mx-5 hover:[&>*]:underline underline-offset-8 hover:[&>*]:text-slate-500 text-2xl">
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Experience</a>
                </li>
                <li>
                    <a href="#">Projects</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;