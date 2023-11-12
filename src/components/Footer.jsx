import React from "react";
// images
import Logo from '../assets/footer.svg';
// icons
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
// link
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className="h-fit bg-[#0A0314] w-full">
            <div className="container mx-auto">
                <div className="flex flex-col py-12 mt-28 text-center">
                    {/* Logo */}
                    <a href="#" className="flex justify-center ml-6"><img src={Logo} alt='' /></a>
                    {/* permalinks */}
                    <ul className="flex flex-col md:flex-row justify-center font-semibold gap-6 lg:gap-8 mx-auto my-12">
                        <li><Link to='home' className="text-[#8F50BB] hover:text-white">Home</Link></li>
                        <li><Link to='about' className="text-[#8F50BB] hover:text-white">About</Link></li>
                        <li><Link to='services' className="text-[#8F50BB] hover:text-white">Services</Link></li>
                        <li><Link to='skill' className="text-[#8F50BB] hover:text-white">Skills</Link></li>
                        <li><Link to='work' className="text-[#8F50BB] hover:text-white">Project</Link></li>
                        <li><Link to='contact' className="text-[#8F50BB] hover:text-white">Contact</Link></li>
                    </ul>
                    {/* social */}
                    <div className="flex justify-center gap-4 mb-11 lg:mb-16">
                        <a href='https://github.com/SofiaFei' className="bg-[#592A8F] text-white p-3 rounded-xl flex border-solid border border-transparent hover:bg-transparent hover:text-[#703DAB] hover:border-[#431D74]">
                            <FaGithub />
                        </a>
                        <a href='https://www.instagram.com/soofyaaa__/' className="bg-[#8F50BB] text-white p-3 rounded-xl flex border-solid border border-transparent hover:bg-transparent hover:text-[#8F50BB] hover:border-[#8F50BB]">
                            <FaInstagram />
                        </a>
                        <a href='https://www.linkedin.com/in/sofiafei/' className="bg-accent/90 text-white p-3 rounded-xl flex border-solid border border-transparent hover:bg-transparent hover:text-accent/90 hover:border-accent/90">
                            <FaLinkedin />
                        </a>
                    </div>
                    {/* copyright */}
                    <div className="mb-16 text-white font-light">
                        <small className="">&copy; Fei Sofia. All rights reserved.</small>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;