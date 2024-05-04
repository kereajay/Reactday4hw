let Header = () => {
    return (
        <>
            <div className="border-4 bg-black ">
                <div className="bg-white w-[90%] m-auto">
                    <div className="m-auto w-3/5 grid-cols-lg-3 grid-cols-md-2 grid-cols-sm-1 flex flex-row ">
                        <br />
                        <div className="w-2/6 m-auto mt-10">
                            <img
                                src="https://www.svgrepo.com/show/384676/account-avatar-profile-user-6.svg"
                                alt=""
                                width={"100px"}
                            />
                            <h1 className="text-xl font-bold ml-5">Profile</h1>
                        </div>
                        <div className="w-3/6 m-auto border-r-4 border-b-4 border-black p-20">
                            <h1 className="text-3xl font-bold ">
                                JESSICA <br />
                                GREENE
                            </h1>
                            <p className="text-xl">Freelance Writer</p>
                        </div>
                        <div className="w-2/6 border-b-4 border-black p-4">
                            <p>
                                I specialize in writing long-form blog content, case studies,
                                e-books, and white papers for B2Bs, tech startups, and marketing
                                agencies.
                            </p>
                            <ul type="none">
                                <li>
                                    Email: <span className="ml-5">abc123@gmail.com</span>
                                </li>
                                <li>
                                    website: <span className="ml-5">mywebsite.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="m-auto w-3/5  flex flex-row">
                        <div className="w-96  ">
                            <img
                                src="https://www.svgrepo.com/show/466974/work.svg"
                                alt=""
                                width={"100px"}
                            />
                            <h1 className="text-xl font-bold ml-5">Work</h1>
                        </div>
                        <div className="item-left w-3/6">
                            <ul type="none">
                                <li>Present</li>
                                <br />
                                <br />
                                <br />
                                <li>
                                    2016<span></span>
                                </li>
                                <br />
                                <br />
                                <li>
                                    2013-2015<span></span>
                                </li>
                            </ul>
                        </div>
                        <div className="w-3/6">
                            <ul type="none">
                                <li>
                                    <b>Jessica Greene Marketing⚫ Freelance Writer</b> <br />
                                    Create blog posts, landing pages, e-books, and case studies for
                                    clients
                                </li>
                                <br />
                                <li>
                                    <b>Kaiser Permanente.⚫ Lead Agile Product Owner</b>
                                    <br />
                                    Created and socialized best practices for Agile software
                                    development
                                </li>
                                <li>
                                    <b>Humana⚫ Agile Product Owner</b>
                                    <br />
                                    Oversaw the implementation of six major web development projects
                                </li>
                            </ul>
                        </div>
                    </div>
                    <br />
                    <div className="m-auto w-3/5  flex flex-row">
                        <div className="w-96 ">
                            <img
                                src="https://www.svgrepo.com/show/204622/padnote-check-box.svg"
                                alt=""
                                width={"100px"}
                            />
                            <h1 className="text-xl font-bold ml-5">
                                Skills & <br /> Samples
                            </h1>
                        </div>
                        <div className="w-3/6 border-t-4 border-b-4 border-r-4 border-black p-5">
                            <ul type="none">
                                <li>
                                    Writing: <span className="ml-12">⭐⭐⭐⭐⭐</span>
                                </li>
                                <li>
                                    Editing <span className="ml-14">⭐⭐⭐⭐</span>
                                </li>
                                <li>
                                    SocialMedia <span className="ml-5">⭐⭐⭐</span>
                                </li>
                                <li>
                                    Researching <span className="ml-5">⭐⭐⭐⭐⭐</span>
                                </li>
                                <li>
                                    SEO <span className="ml-20">⭐⭐⭐</span>
                                </li>
                            </ul>
                        </div>

                        <div className="w-3/6 border-t-4 border-b-4 border-black flex p-2">
                            <ul type="none">
                                <li>Zapier</li>
                                <br />
                                <li>Spoke</li>
                                <br />
                                <br />
                                <li>nDash</li>
                            </ul>
                            <ul type="none" className="ml-10">
                                <li> Organize Your Life with the Agile Method</li>
                                <li>
                                    Is 40 hours a week too much? Here's what history and science
                                    say.
                                </li>
                                <li>Why Generalist Writers Lead to Lost Profits in B2B Tech</li>
                            </ul>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="flex w-3/5 m-auto justify-between">
                        <img
                            src="https://www.svgrepo.com/show/227062/light-bulb-idea.svg"
                            alt=""
                            width={"100px"}
                        />
                        <img
                            src="https://www.svgrepo.com/show/129172/suitcase.svg"
                            alt=""
                            width={"100px"}
                        />
                        <img
                            src="https://www.svgrepo.com/show/213583/protest-shout.svg"
                            alt=""
                            width={"100px"}
                        />
                        <img
                            src="https://www.svgrepo.com/show/355475/laptop.svg"
                            alt=""
                            width={"100px"}
                        />
                        <img
                            src="https://www.svgrepo.com/show/190864/light-bulb-idea.svg"
                            alt=""
                            width={"100px"}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Header;
