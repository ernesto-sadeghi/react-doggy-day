
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

import { useEffect, useState } from 'react';
import logo from '../logo.svg'
import pattern from '../img/vecteezy_leaf-background-palm-leaf-pattern-nature-summer_6526674.jpg'
import littleDog from '../img/animated-dog-image-0931.gif'
import Swal from 'sweetalert2';
function BreedCard({ breed, subBreeds }) {
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(true)
    const [loadingAIanswer, setLoadingAIanswer] = useState(false)


    const API_KEY = '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'; // Replace with your actual API key
    const API_ENDPOINT = 'https://openrouter.ai/api/v1/chat/completions'; // Example endpoint

    async function getDeepSeekCompletion(messageContent) {
        try {
            const response = await axios.post(API_ENDPOINT, {
                model: 'openrouter/cypher-alpha:free',
                messages: [
                    { role: 'user', content: messageContent }
                ]
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error making DeepSeek API request:', error.response ? error.response.data : error.message);
            throw error;
        }
    }

    const giveInfo = (breed) => {
        setLoadingAIanswer(true)
        getDeepSeekCompletion(`give me very short information about ${breed} dog `)
            .then(data => {
                setLoadingAIanswer(false)


                Swal.fire({
                    title: breed,
                    text: data.choices[0].message.content,
                    width: 600,
                    padding: "3em",
                    color: "#1B3C53",
                    background: `#fff url(${pattern})`,

                })


            })
            .catch(err => {
                console.error('Failed to get completion:', err)
                setLoadingAIanswer(false)
            });







    }
    useEffect(() => {


        axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
            .then(res => {
                setImage(res.data.message)
                setLoading(false)
            })
            .catch(err => {
                console.error("Error fetching breed image :", err);
                setLoading(false);
            })
    }, [breed])
    if (loading) {
        return (
            <div className="mx-auto  max-w-sm animate-pulse w-80 h-96 mt-16 flex flex-col-reverse rounded-2xl shadow-md  border ">

                <div className=" bg-gradient-to-t mt-30 from-[#1B3C53] rounded-b-2xl h-[4.5rem] to-transparent pt-8 ps-4">
                    <div className="text-xl font-bold text-white w-32 h-5 bg-slate-300 rounded-md"></div>
                </div>


            </div>
        );
    }
    return (

        
        < div className = "flip-card w-80 h-96 mt-16" >
            <div className="flip-card-inner w-full h-full">

                <div className="flip-card-front">

                    <img
                        src={image ? image : logo}
                        alt={breed}
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1B3C53] to-transparent p-4">
                        <h2 className="text-xl font-bold text-white">{breed}</h2>
                    </div>
                </div>

                <div className="flip-card-back bg-[#1B3C53] text-white p-6 flex flex-col justify-between">
                    <div>

                        <div className="flex justify-between items-start mb-4">
                            <h2 className="text-2xl font-bold flex items-center">
                                <FontAwesomeIcon icon='paw' className="text-[#D2C1B6] mr-2" />
                                {breed}
                            </h2>

                        </div>

                        <div className="space-y-3">
                            <div>
                                <h3 className="font-semibold mb-6 text-[#D2C1B6] flex items-center">
                                    <FontAwesomeIcon icon='bone' className="mr-2" />
                                    sub-breeds :
                                </h3>
                                {subBreeds.map(sub => {
                                    return <p key={sub}>-{sub}</p>
                                })}

                            </div>
                            {loadingAIanswer?<img src={littleDog} alt="loading"/> : false}
                        </div>
                    </div>

                    {/* Action Button */}
                    <button onClick={() => giveInfo(breed)} className="mt-6 w-full bg-[#D2C1B6] hover:bg-[#456882] text-[#1B3C53] font-bold py-2 px-4 rounded-lg transition flex items-center justify-center">
                        <FontAwesomeIcon icon='bone' className="mr-2" />
                        Learn More
                    </button>
                </div>
            </div>
            <style >{`
        .flip-card {
          perspective: 1000px;
        }
        .flip-card-inner {
          transition: transform 0.6s;
          transform-style: preserve-3d;
          position: relative;
          width: 100%;
          height: 100%;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 1rem;
          overflow: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
        </div >
    );
}

export default BreedCard;