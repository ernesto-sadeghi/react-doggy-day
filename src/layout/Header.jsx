import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../logo.svg'
import Light from '../img/icons8-sun.svg'
import dark from '../img/icons8-moon-100.png'
import { NavLink } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContex';
function Header() {
   const { darkMode, setDarkMode } = useDarkMode();



    return (

        <header className="bg-deep dark:bg-creamdark text-cream shadow-lg">
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
                                <button className='ml-8' onClick={() => { setDarkMode(darkMode => !darkMode) }}>
                                    {
                                        darkMode ? <img width={70} src={Light} alt="light" /> : <img width={70} src={dark} alt="dark" />
                                    }
                                </button>
                           
                    </div>


                    <nav className="w-full md:w-auto">
                        <ul className='flex md:flex-row  flex-col' >
                           

                            <li className="flex flex-wrap items-center space-x-1 md:space-x-6">
                                <NavLink to="/" className=" mt-8 md:mt-0  px-4 py-2 rounded-full flex items-center hover:bg-ocean hover:bg-opacity-20 transition duration-300">
                                    <FontAwesomeIcon icon="home" className="mr-2 text-clay" />
                                    <span>Home</span>
                                </NavLink>

                                <NavLink to="/fun" className=" mt-8 md:mt-0  px-4 py-2 rounded-full flex items-center hover:bg-ocean hover:bg-opacity-20 transition duration-300">
                                    <FontAwesomeIcon icon="bone" className="mr-2 text-clay" />
                                    <span>Fun</span>
                                </NavLink>



                                <NavLink to="/breeds" className=" mt-8 md:mt-0   px-4 py-2 rounded-full flex items-center hover:bg-ocean hover:bg-opacity-20 transition duration-300">
                                    <FontAwesomeIcon icon="dog" className="mr-2 text-clay" />
                                    <span>All Breeds</span>
                                </NavLink>
                            
                                <a href="https://github.com/ernesto-sadeghi" className="w-full md:w-auto  ml-4 mt-8 lg:mt-0 px-6 py-2 bg-clay text-deep font-bold rounded-full flex items-center justify-center hover:bg-cream hover:text-deep transition duration-300">
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