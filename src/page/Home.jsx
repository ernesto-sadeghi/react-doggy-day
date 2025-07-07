import snoop from '../img/snoopdooog.jpg'
import FactSection from '../components/FactSection';
import { Link } from 'react-router-dom';
function Home() {
    return (

    <main className="min-h-screen bg-cream dark:bg-darkSlate">

    <section className="bg-clay text-cream dark:bg-darkBrown dark:text-lightCream py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-lightCream">Discover the Wonderful World of Dogs</h1>
                    <p className="text-xl mb-8 text-deep dark:text-lightBrown">Explore breeds, learn fun facts, and find your perfect canine companion.</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/breeds" className="bg-ocean hover:bg-deep text-cream font-semibold py-3 px-6 rounded-lg transition duration-300 dark:bg-darkTeal dark:hover:bg-darkOcean dark:text-lightCream">
                            Browse Breeds
                        </Link>
                        <a href='#Fact' className="border-2 border-deep text-deep hover:bg-deep dark:hover:bg-lightBrown hover:text-clay font-semibold py-3 px-6 rounded-lg transition duration-300 dark:border-lightBrown dark:text-lightBrown dark:hover:bg-darkBrown dark:hover:text-lightCream">
                            Random Fact
                        </a>
                    </div>
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0">
                    <div className="bg-white/20 p-2 rounded-xl dark:bg-black/30">
                        <img src={snoop}
                            alt="Happy golden retriever"
                            className="w-full h-auto rounded-lg shadow-xl dark:shadow-darkShadow"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <FactSection />

    <section className="py-16 bg-cream dark:bg-darkSlate">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-clay dark:text-lightCream mb-6">Ready to Find Your Perfect Dog?</h2>
            <p className="text-xl text-ocean dark:text-lightTeal max-w-2xl mx-auto mb-8">Use our advanced breed finder to match with dogs that fit your lifestyle and preferences.</p>
            <Link to='/fun' className="bg-clay hover:bg-ocean text-cream font-semibold py-4 px-8 rounded-lg text-lg transition duration-300 dark:bg-darkOcean dark:hover:bg-lightTeal dark:text-lightCream">
                Start Breed Finder
            </Link>
        </div>
    </section>
</main>
    );
}

export default Home;