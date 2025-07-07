import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { Suspense, lazy } from 'react';
import dog from '../img/dog-walking-61.svg'
import loadingdog from '../img/animated-dog-image-0931.gif'
const LazyComponent = lazy(() => import('../components/BreedCard'));

function Breeds() {
    const [breedsObj, setBreedsObj] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [displayCount, setDisplayCount] = useState(12); // Start with 12 breeds
    const [allBreedsLoaded, setAllBreedsLoaded] = useState(false);

    const breedsCount = Object.keys(breedsObj).length;
    const displayedBreeds = Object.keys(breedsObj).slice(0, displayCount);

    // Load more breeds when reaching bottom
    const loadMoreBreeds = useCallback(() => {

        if (displayCount >= breedsCount) {
            setAllBreedsLoaded(true);
            return;
        }
        setDisplayCount(prev => prev + 12); // Load 12 more breeds
    }, [displayCount, breedsCount]);

    // Initial data fetch
    useEffect(() => {

        axios.get('https://dog.ceo/api/breeds/list/all')
            .then(res => {
                setBreedsObj(res.data.message);
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Error fetching breeds:", error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return (
            <div className=" h-[70vh] dark:bg-creamdark flex flex-col-reverse flex-wrap content-center  ">

                <img src={loadingdog} className='max-w-60' alt="" />
            </div>


        );
    }

    return (
        <>
            <div className=" top-4 left-4  w-full">
                <div className="bg-cream border-4 dark:bg-darkBrown border-ocean dark:border-lightCream p-4 rounded-lg shadow-md">
                    <div className="flex">
                        <div className="flex-shrink-0">

                            <svg className="h-5 w-5 text-ocean dark:text-clay" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <h3 className="text-sm font-medium text-ocean dark:text-clay">Information</h3>
                            <div className="mt-1 text-sm text-ocean dark:text-clay">
                                <p>if you are opening this site in IR.Iran , you might need to turn on your vpn .</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-[#F9F3EF] dark:bg-creamdark">
                <section className=" flex justify-center">
                    <div className=' px-12 grid md:grid-cols-2 grid-cols-1'>
                        <div className="p-5  pt-10 md:pt-[10rem]">
                            <h1 className='text-2xl my-1 md:my-5 font-bold text-ocean dark:text-lightTeal'>All breeds are here </h1>
                            <p className='text-md my-5 text-ocean dark:text-lightTeal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quam adipisci molestias explicabo eveniet error suscipit ipsa facere! Nostrum vero reiciendis rerum incidunt officia cupiditate magnam fugiat sapiente laudantium voluptas quibusdam nisi porro, dolor obcaecati qui deleniti, et ullam quo reprehenderit. Error eaque rem repudiandae culpa perferendis magni est sequi.</p>
                        </div>
                        <img src={dog} className='h-100 justify-self-center' alt="" />
                    </div>
                </section>
                <div className="grid  sm:gap-8  grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container m-auto justify-items-center pb-14">
                    {displayedBreeds.map((breedName, index) => (
                        <Suspense key={`suspense-${index}`} fallback={<div>Loading...</div>}>
                            <LazyComponent
                                key={index}
                                breed={breedName}
                                subBreeds={breedsObj[breedName]}
                            />
                        </Suspense>
                    ))}
                </div>
                {!allBreedsLoaded && (
                    <div className="flex justify-center pb-10">
                        <button
                            onClick={loadMoreBreeds}
                            className="px-4 py-2 bg-blue-500 dark:bg-lightTeal transition-colors ease duration-500 text-white rounded dark:hover:bg-slate-800 hover:bg-blue-600"
                        >
                            Load More Breeds
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

export default Breeds;