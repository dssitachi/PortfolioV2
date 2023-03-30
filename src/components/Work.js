import { FiGithub } from 'react-icons/fi';
import { HiOutlineExternalLink } from 'react-icons/hi';
import PathVis from '../assets/pathvis.png';
import Ecommerce from '../assets/Ecommerce.png';

function Work() {
    const projects = [
        {
            id: 1,
            title: 'Workspace Essentials',
            description:
                'Workspace Essentials is an ecommerce application built using React and Tailwind CSS. Strapi is used as the CMS, providing easy content management and customization options. We have integrated Stripe for secure and hassle-free payments. With a seamless checkout process and easy navigation, our ecommerce application offers an exceptional user experience',
            imageUrl: Ecommerce,
            demoUrl: 'https://ecommerce-dssitachi.vercel.app/',
            githubUrl: 'https://github.com/dssitachi/Ecommerce'
        },
        {
            id: 2,
            title: 'Path Visualizer',
            description:
                'The path visualizer site enables users to select a source and destination point, draw walls to simulate obstacles, and then generates a path between the two points. It provides an intuitive interface for exploring and analyzing different pathfinding algorithms.',
            imageUrl: PathVis,
            demoUrl: 'https://dssitachi.github.io/Grid-Path-Finding-Visualizer/',
            githubUrl: 'https://github.com/dssitachi/Grid-Path-Finding-Visualizer'
        },
        {
            id: 3,
            title: 'Re / Member',
            description:
                'Re / Member built with React and Tailwind is a fun and engaging way to test your memory skills. It presents a grid of cards, each with a hidden image, and challenges you to flip over two cards at a time to find a match. Designed with customizable difficulty levels and attractive animations, making it suitable for players of all ages.',
            imageUrl: 'https://picsum.photos/800/602',
            demoUrl: 'https://example.com/demo',
            githubUrl: 'https://github.com/dssitachi'
        },
    ]

    return (
        <section className="my-64 mx-auto px-8 md:px-20 lg:px-24 max-w-5xl">
            <h3 className="text-4xl w-full mb-6 text-gray-300 font-bold">My Work</h3>

            <div className="max-w-7xl mx-auto py-12">
                <div className="grid grid-cols-1 gap-12">
                    {projects.map((project) => (
                        <div key={project.id} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className={project.id % 2 ? `md:order-1` : `md:order-0`} >
                                {/* Add content for the first column here */}
                                <img
                                    className="max-h-64 w-full object-cover"
                                    src={project.imageUrl}
                                    alt={project.title}
                                />
                            </div>
                            <div className={`flex flex-col justify-between ${project.id % 2 ? '' : 'text-right'}`}>
                                <div className="mb-4">
                                <h3 className="text-xl font-medium text-my-text truncate">{project.title}</h3>
                                <p className="mt-2 text-gray-400 bg-[#112A50] p-2">{project.description}</p>
                                </div>
                                <div className={`flex flex-row gap-x-4 ${project.id % 2 ? '' : 'justify-end'} `}>
                                    <a href={project.githubUrl} target="_blank"> <FiGithub className='w-6 h-6 text-gray-100 cursor-pointer hover:text-my-text' /> </a>
                                    <a href={project.demoUrl} target="_blank"> <HiOutlineExternalLink className='w-7 h-6 text-gray-100 cursor-pointer hover:text-my-text' /> </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Work;