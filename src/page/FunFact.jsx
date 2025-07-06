import axios from "axios";
import { useEffect, useRef, useState } from "react";
import loadingDog from '../img/animated-dog-image-0931.gif';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AIrequest } from "../composable/useAIanswer";
function FunFact() {
    const [img, setImg] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isExplained, setIsExplained] = useState(true);
    const [error, setError] = useState(null);
    const breedType = useRef('');
    const [explanation, setExplanation] = useState("");

    // These should ideally come from environment variables

 

    useEffect(() => {
        if (!img) return;

        const getDogDescription = async () => {
            setIsExplained(false);
            setError(null);

            try {
                const response = await AIrequest(`just describe in keywords very shortly my character as ${breedType.current} (without title)`);
                setExplanation(response.choices[0]?.message?.content || "No description available");
            } catch (err) {
                setError(err.message);
                setExplanation(`Sorry, we couldn't get a description for this ${breedType.current} dog.`);
            } finally {
                setIsExplained(true);
            }
        };

        getDogDescription();
    }, [img]);

    const fetchRandomDog = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.get("https://dog.ceo/api/breeds/image/random");
            setImg(response.data.message);
            breedType.current = response.data.message.split("/")[4] || 'unknown breed';
        } catch (err) {
            console.error('Dog API error:', err);
            setError('Failed to fetch dog image. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
         <div className=" top-4 left-4  w-full">
                <div className="bg-cream border-4 border-ocean p-4 rounded-lg shadow-md">
                    <div className="flex">
                        <div className="flex-shrink-0">

                            <svg className="h-5 w-5 text-ocean" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <h3 className="text-sm font-medium text-ocean">Information</h3>
                            <div className="mt-1 text-sm text-ocean">
                                <p>if you are opening this site in IR.Iran , it better to turn on your vpn .</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="w-full max-w-md rounded-2xl p-0 overflow-hidden animate-clay-pulse"
                    style={{
                        background: 'linear-gradient(145deg, #D2C1B6 0%, #D2C1B6DD 100%)',
                        boxShadow: '8px 8px 16px #C1B1A6, -8px -8px 16px #E3D1C6'
                    }}>

                    <div className="bg-[#1B3C53] text-[#F9F3EF] p-6 text-center border-b border-[#D2C1B6DD]/30">
                        <h1 className="font-serif text-2xl font-medium tracking-tight">What if you were a dog?</h1>
                        <p className="text-[#D2C1B6] mt-1">Your dog version in a parallel universe</p>
                    </div>

                    <div className="p-6">
                        <div className="mx-auto w-40 z-10 h-40 rounded-full bg-[#F9F3EF] border-4 border-[#D2C1B6DD]/50 mb-6 flex items-center justify-center">
                            {isLoading ? (
                                <div className="animate-pulse">Loading...</div>
                            ) : img ? (
                                <img
                                    className="object-cover rounded-full w-full h-full"
                                    src={img}
                                    alt={breedType.current}
                                    onError={() => setError('Failed to load dog image')}
                                />
                            ) : (
                                <FontAwesomeIcon className="text-[##D2C1B6DD] text-8xl" icon="paw" />
                            )}
                        </div>

                        <div className="bg-[#D2C1B620] backdrop-blur-sm p-5 rounded-lg border border-[#D2C1B6DD]/20 mb-6 min-h-32">
                            <h2 className="font-serif text-[#1B3C53] text-xl mb-2 capitalize">
                                {breedType.current || "my doggy character :"}
                            </h2>
                            {error ? (
                                <p className="text-red-600">{error}</p>
                            ) : isExplained ? (
                                <p className="text-[#1B3C53]/90 italic mb-3">{explanation}</p>
                            ) : (
                                <img src={loadingDog} alt="loading" className="mx-auto" />
                            )}
                        </div>

                        <button
                            className="chance-btn w-full py-3 px-4 rounded-lg text-[#1B3C53] font-medium transition-all duration-300 hover:scale-[1.02] disabled:opacity-50"
                            onClick={fetchRandomDog}
                            disabled={isLoading}
                        >
                            {isLoading ? "wait honey ..." : "Try your Luck"}
                        </button>
                    </div>

                    <div className="p-3 text-center bg-[#D2C1B6DD]/10">
                        <p className="text-xs text-[#1B3C53]/60">Share this experience with your friends</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FunFact;