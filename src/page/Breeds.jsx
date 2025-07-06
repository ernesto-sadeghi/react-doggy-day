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
            <div className=" h-[70vh] flex flex-col-reverse flex-wrap content-center  ">

             <img src={loadingdog} className='max-w-60'  alt="" />
            </div>


        );
    }

    return (
        <div className="min-h-screen bg-[#F9F3EF]">
            <section className="h-96 d-flex justify-center">
                <div className='container px-12 grid md:grid-cols-2 grid-cols-1'>
                <div className="p-10 pt-10 md:pt-[10rem]">
                    <h1 className='text-2xl my-5 font-bold text-deep'>All breeds are here </h1>
                    <p className='text-md my-5 text-ocean'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quam adipisci molestias explicabo eveniet error suscipit ipsa facere! Nostrum vero reiciendis rerum incidunt officia cupiditate magnam fugiat sapiente laudantium voluptas quibusdam nisi porro, dolor obcaecati qui deleniti, et ullam quo reprehenderit. Error eaque rem repudiandae culpa perferendis magni est sequi.</p>
                </div>
                <img src={dog} className='h-100 justify-self-center' alt="" />
                </div>
            </section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container m-auto justify-items-center mt-60 md:mt-4 py-14">
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
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Load More Breeds
                    </button>
                </div>
            )}
        </div>
    );
}

export default Breeds;