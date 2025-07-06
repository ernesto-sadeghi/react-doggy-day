import snoop from '../img/snoopdooog.jpg'
import FactSection from '../components/FactSection';
import { Link } from 'react-router-dom';
function Home() {
    return (

        <main className="min-h-screen bg-cream">

            <section className="bg-clay text-cream py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">Discover the Wonderful World of Dogs</h1>
                            <p className="text-xl mb-8 text-deep">Explore breeds, learn fun facts, and find your perfect canine companion.</p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to="/breeds" className="bg-ocean hover:bg-deep text-cream font-semibold py-3 px-6 rounded-lg transition duration-300">
                                    Browse Breeds
                                </Link>
                                <a href='#Fact' className="border-2 border-deep text-deep hover:bg-deep hover:text-clay font-semibold py-3 px-6 rounded-lg transition duration-300">
                                    Random Fact
                                </a>
                            </div>
                        </div>
                        <div className="md:w-1/2 mt-8 md:mt-0">
                            <div className="bg-white/20 p-2 rounded-xl">
                                <img src={snoop}
                                    alt="Happy golden retriever"
                                    className="w-full h-auto rounded-lg shadow-xl"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <section className="py-16 bg-cream">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-clay text-center mb-12">Popular Dog Breeds</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                   
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                            <img src="https://images.unsplash.com/photo-1633722715463-d30f4f325e24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                                alt="Golden Retriever"
                                className="w-full h-48 object-cover"/>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-clay mb-2">Golden Retriever</h3>
                                    <p className="text-ocean mb-4">Friendly, Intelligent, Devoted</p>
                                    <button className="text-deep font-medium hover:text-clay transition duration-300">
                                        Learn More →
                                    </button>
                                </div>
                        </div>

             
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                            <img src="https://images.unsplash.com/photo-1601758003122-53c40e686a19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                                alt="French Bulldog"
                                className="w-full h-48 object-cover"/>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-clay mb-2">French Bulldog</h3>
                                    <p className="text-ocean mb-4">Adaptable, Playful, Smart</p>
                                    <button className="text-deep font-medium hover:text-clay transition duration-300">
                                        Learn More →
                                    </button>
                                </div>
                        </div>


                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                            <img src="https://images.unsplash.com/photo-1594149929911-78975a43d4f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                                alt="German Shepherd"
                                className="w-full h-48 object-cover"/>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-clay mb-2">German Shepherd</h3>
                                    <p className="text-ocean mb-4">Confident, Courageous, Smart</p>
                                    <button className="text-deep font-medium hover:text-clay transition duration-300">
                                        Learn More →
                                    </button>
                                </div>
                        </div>

                        
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                            <img src="https://images.unsplash.com/photo-1530046339911-1e0d5f4c5b7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                                alt="Labrador Retriever"
                                className="w-full h-48 object-cover"/>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-clay mb-2">Labrador Retriever</h3>
                                    <p className="text-ocean mb-4">Friendly, Active, Outgoing</p>
                                    <button className="text-deep font-medium hover:text-clay transition duration-300">
                                        Learn More →
                                    </button>
                                </div>
                        </div>
                    </div>
                </div>
            </section> */}


           < FactSection />


            <section className="py-16 bg-cream">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-clay mb-6">Ready to Find Your Perfect Dog?</h2>
                    <p className="text-xl text-ocean max-w-2xl mx-auto mb-8">Use our advanced breed finder to match with dogs that fit your lifestyle and preferences.</p>
                    <Link to='/fun' className="bg-clay hover:bg-ocean text-cream font-semibold py-4 px-8 rounded-lg text-lg transition duration-300">
                        Start Breed Finder
                    </Link>
                </div>
            </section>
        </main>
    );
}

export default Home;