import Profile from '../assets/profile.jpg'

function About() {

    return (
        // grid grid-cols-1 sm:grid-cols-2 gap-8 text-gray-300
        <section className="my-32 mx-auto px-8 md:px-20 lg:px-24 max-w-5xl ">
            {/* container for centering */}
            <h3 className="text-4xl w-full mb-6 text-gray-300 font-bold"> About Me </h3>
            <div className="grid sm:grid-cols-[3fr_2fr] gap-8">

                <div>
                    <p className="text-gray-400">As a Junior Front-End Developer, I possess an impressive arsenal of
                        skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS.
                        I excel in designing and maintaining responsive websites that
                        offer a smooth user experience. My expertise lies in crafting dynamic,
                        engaging interfaces through writing clean and optimized code and utilizing
                        cutting-edge development tools and techniques. I am also a team player who thrives
                        in collaborating with cross-functional teams to produce
                        outstanding web applications.
                    </p>

                    <div className="flex flex-wrap text-gray-400 mt-4">
                        <div className="w-full md:w-1/2">
                            <ul className="list-disc list-inside">
                                <li className="my-1 text-my-text">HTML/CSS</li>
                                <li className="my-1">React</li>
                                <li className="my-1">Tailwind CSS</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <ul className="list-disc list-inside">
                                <li className="my-1">Javascript</li>
                                <li className="my-1">Angular</li>

                            </ul>
                        </div>
                    </div>

                </div>

                <div className="max-w-xs">
                    <img src={Profile} alt="profile" className='rounded-full w-60 h-60' />
                </div>

            </div>


        </section>
    )
}

export default About;