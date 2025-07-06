import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../logo.svg'
import { NavLink } from 'react-router-dom';
function Header() {
    return (
       
            <header className="bg-deep text-cream shadow-lg">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex flex-col md:flex-row justify-between items-center">

                        <div className="flex items-center mb-4 md:mb-0 group">
                            <div className="w-12 h-12 bg-creamdark rounded-full flex items-center justify-center mr-3 transform group-hover:-rotate-[360deg] transition duration-[2s]">
                                <img src={logo} alt="" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-display font-bold">Doggy-Day.jsx</h1>
                                <p className="text-xs text-clay">made by Ernesto </p>
                            </div>
                        </div>


                        <nav className="w-full md:w-auto">
                            <ul className="flex flex-wrap items-center space-x-1 md:space-x-6">
                                <li>
                                    <NavLink to="/" className="px-4 py-2 rounded-full flex items-center hover:bg-ocean hover:bg-opacity-20 transition duration-300">
                                        <FontAwesomeIcon icon="home" className="mr-2 text-clay" />
                                        <span>Home</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/fun" className="px-4 py-2 rounded-full flex items-center hover:bg-ocean hover:bg-opacity-20 transition duration-300">
                                        <FontAwesomeIcon icon="bone" className="mr-2 text-clay" />
                                        <span>Fun</span>
                                    </NavLink>
                                </li>

                                <li className='flex-shrink-0'>
                                    <NavLink to="/breeds" className="px-4 py-2 rounded-full flex items-center hover:bg-ocean hover:bg-opacity-20 transition duration-300">
                                        <FontAwesomeIcon icon="dog" className="mr-2 text-clay" />
                                        <span>All Breeds</span>
                                    </NavLink>
                                </li>
                                <li className="ml-2 flex flex-shrink-1">
                                    <a href="https://github.com/ernesto-sadeghi" className="px-6 py-2 bg-clay text-deep font-bold rounded-full flex items-center hover:bg-cream hover:text-deep transition duration-300">
                                        <FontAwesomeIcon icon="phone-alt" className="mr-2" />
                                        <span>Contact</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
       
    );
}

export default Header;