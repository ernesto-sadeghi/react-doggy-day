import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../logo.svg'
function Footer() {
    return (

        <footer className="bg-deep text-cream pt-16 pb-10 border-y-4 border-solid border-clay">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                    {/* Footer Column 1 - About */}
                    <div className="md:col-span-2">
                        <div className="flex items-center group mb-5">
                            <div className="w-12 h-12 bg-creamdark rounded-full flex items-center justify-center mr-3 transform group-hover:-rotate-[360deg] transition duration-[2s]">
                                <img src={logo} alt="" />
                            </div>
                            <h2 className="text-2xl font-display font-bold">Doggy-Day.jsx</h2>
                        </div>
                        <p className="mb-6">Where every dog has its perfect day! We provide premium care, boarding, and grooming services for your furry friends.</p>
                        <div className="flex space-x-4">
                            <a href="https://ernestoshop.liara.run" className="w-10 h-10 rounded-full bg-ocean bg-opacity-20 flex items-center justify-center hover:bg-clay hover:text-deep transition duration-300">
                                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                            </a>
                            <a href="https://ernestoshop.liara.run" className="w-10 h-10 rounded-full bg-ocean bg-opacity-20 flex items-center justify-center hover:bg-clay hover:text-deep transition duration-300">
                                <FontAwesomeIcon icon={['fab', 'instagram']} />
                            </a>
                            <a href="https://ernestoshop.liara.run" className="w-10 h-10 rounded-full bg-ocean bg-opacity-20 flex items-center justify-center hover:bg-clay hover:text-deep transition duration-300">
                                <FontAwesomeIcon icon={['fab', 'github']} />
                            </a>
                            <a href="https://ernestoshop.liara.run" className="w-10 h-10 rounded-full bg-ocean bg-opacity-20 flex items-center justify-center hover:bg-clay hover:text-deep transition duration-300">
                                <FontAwesomeIcon icon={['fab', 'tiktok']} />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-display font-bold mb-5 flex items-center">
                            <FontAwesomeIcon icon="paw" className="mr-2 text-clay" />
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            <li><a href="https://ahmadinejjjj.freehost.io" className="hover:text-clay transition duration-300 flex items-center">
                               
                                Ernesto-dictionary.vue
                            </a></li>
                            <li><a href="https://ernestoshop.liara.run" className="hover:text-clay transition duration-300 flex items-center">
                               
                                Ernesto-shop.nuxt
                            </a></li>
                           
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-lg font-display font-bold mb-5 flex items-center">
                            <FontAwesomeIcon icon="bone" className="mr-2 text-clay" />
                            Contact Us
                        </h3>
                        <address className="not-italic space-y-3">
                            <p className="flex items-center">
                                <FontAwesomeIcon icon="map-marker-alt" className="mr-3 text-clay" />
                                123 Bark Avenue, Dogtown
                            </p>
                            <p className="flex items-center">
                                <FontAwesomeIcon icon="phone-alt" className="mr-3 text-clay" />
                                (555) WOOF-WOOF
                            </p>
                            <p className="flex items-center">
                                <FontAwesomeIcon icon="envelope" className="mr-3 text-clay" />
                                ernestosadeghi@gmail.com
                            </p>
                            <p className="flex items-center">
                                <FontAwesomeIcon icon="clock" className="mr-3 text-clay" />
                                Mon-Sun: 7am-7pm
                            </p>
                        </address>
                    </div>
                </div>


                <div className="border-t border-cream border-opacity-20 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="mb-4 md:mb-0 text-clay text-sm">
                        <FontAwesomeIcon icon="copyright" className="mr-1" /> 2025 Doggy-Day. made by ernesto .
                    </p>
                    <div className="flex space-x-4 text-sm">
                        <a href="https://ernestoshop.liara.run" className="hover:text-clay transition duration-300">Privacy Policy</a>
                        <a href="https://ernestoshop.liara.run" className="hover:text-clay transition duration-300">Terms of Service</a>
                        <a href="https://ernestoshop.liara.run" className="hover:text-clay transition duration-300">FAQ</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;