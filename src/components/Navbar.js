import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logopf1.png';
import { Link } from 'react-scroll';

function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false)
    function handleClick() {
        setMobileMenu(!mobileMenu);
    }


    return (
        <nav className="fixed w-full h-20 flex justify-between bg-my-bg items-center px-4 text-gray-300">

            <div className="w-8 h-8 cursor-pointer"><img src={Logo} alt="Logo" /> </div>
            <motion.div
                initial={{ opacity: 0, y: -70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <ul className="hidden md:flex">
                    <li className="px-4 cursor-pointer hover:text-my-text">
                        <Link to="about" smooth={true} offset={-100} duration={500}>
                            About
                        </Link>
                    </li>
                    <li className="px-4 cursor-pointer hover:text-my-text">
                        <Link to="experience" smooth={true} offset={-100} duration={500}>
                            Experience
                        </Link>
                    </li>
                    <li className="px-4 cursor-pointer hover:text-my-text">
                        <Link to="work" smooth={true} offset={-100} duration={500}>
                            Work
                        </Link>
                    </li>
                    <li className="px-4 cursor-pointer hover:text-my-text">
                        <Link to="contact" smooth={true} offset={-100} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </motion.div>
            {/* Hamburger */}
            <div onClick={handleClick} className="md:hidden z-10">
                {mobileMenu ? <FaTimes /> : <FaBars />}
            </div>

            {/* Mobile Menu */}
            <ul className={mobileMenu ? 'absolute top-0 left-0 w-full h-screen bg-my-bg flex flex-col justify-center items-center' : 'hidden'}>
             
                <li className="py-6 text-2xl">
                        <Link to="about" smooth={true} offset={-100} duration={500}>
                            About
                        </Link>
                    </li>
                    <li className="py-6 text-2xl">
                        <Link to="experience" smooth={true} offset={-100} duration={500}>
                            Experience
                        </Link>
                    </li>
                    <li className="py-6 text-2xl">
                        <Link to="work" smooth={true} offset={-100} duration={500}>
                            Work
                        </Link>
                    </li>
                    <li className="py-6 text-2xl">
                        <Link to="contact" smooth={true} offset={-100} duration={500}>
                            Contact
                        </Link>
                    </li>
            </ul>
        </nav>
    )
}

export default Navbar;