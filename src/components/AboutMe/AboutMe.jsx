import SectionHeader from "../SectionHeader/SectionHeader";

const AboutMe = () => {
    return (
        <div id="about" className="w-11/12 mx-auto">
            <SectionHeader subtitle={"Get To Know More"} title={"About Me"} />
            <div className="flex items-center justify-center gap-10">
                <div className="w-[40%]">
                    <img className="w-full" src="https://nurealammiaji.github.io/developer-portfolio/images/my-bg2.png" alt="Nure Alam Miaji" />
                </div>
                <div className="w-[60%]">
                    <div className="flex items-center justify-between gap-5">
                        <div className="p-5 border rounded-3xl w-[50%]">
                            <div className="w-10 mx-auto">
                                <img src="https://tangerine-hummingbird-1479b6.netlify.app/assets/experience.png" alt="" />
                            </div>
                            <div className="text-center">
                                <h5 className="text-2xl font-semibold">Experience</h5>
                                <p>2+ Years</p>
                                <p>Frontend Development</p>
                            </div>
                        </div>
                        <div className="w-[50%] p-5 border rounded-3xl">
                            <div className="w-10 mx-auto">
                                <img className="w-full" src="https://tangerine-hummingbird-1479b6.netlify.app/assets/experience.png" alt="" />
                            </div>
                            <div className="text-center">
                                <h5 className="text-2xl font-semibold">Education</h5>
                                <p>B.Sc in IT</p>
                                <p>Azteca University</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-5">
                        <p className="text-justify">Nure Alam Miaji, a tech enthusiast and web developer from Bangladesh, holds a Bachelor’s degree in Information Technology from Azteca University. He is currently mastering the MERN Stack. His journey exemplifies continuous learning and community engagement in the tech world .</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;