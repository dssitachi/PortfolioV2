import wImage from '../assets/w1.png';
import { FiGithub } from 'react-icons/fi';
import { HiOutlineExternalLink } from 'react-icons/hi';
function Work() {
    const projects = [
        {
            id: 1,
            title: 'E-commerce Website',
            description:
                'The ecommerce website is developed using React, Tailwind CSS, with Strapi used as the CMS. The website utilizes context API for state management.',
            imageUrl: 'https://picsum.photos/800/600',
            demoUrl: 'https://example.com/demo',
        },
        {
            id: 2,
            title: 'Path Visualizer',
            description:
                'The path visualizer site enables users to select a source and destination point, draw walls to simulate obstacles, and then generates a path between the two points. It provides an intuitive interface for exploring and analyzing different pathfinding algorithms.',
            imageUrl: 'https://picsum.photos/800/601',
            demoUrl: 'https://example.com/demo',
        },
        {
            id: 3,
            title: 'Re / Member',
            description:
                'Re / Member built with React and Tailwind is a fun and engaging way to test your memory skills. It presents a grid of cards, each with a hidden image, and challenges you to flip over two cards at a time to find a match. Designed with customizable difficulty levels and attractive animations, making it suitable for players of all ages.',
            imageUrl: 'https://picsum.photos/800/602',
            demoUrl: 'https://example.com/demo',
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
                                    <a href={project.demoUrl}> <FiGithub className='w-6 h-6 text-gray-100 cursor-pointer hover:text-my-text' /> </a>
                                    <a href={project.demoUrl}> <HiOutlineExternalLink className='w-7 h-6 text-gray-100 cursor-pointer hover:text-my-text' /> </a>
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