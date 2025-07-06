import { useState } from "react";
import loadingDog from '../img/animated-dog-image-0931.gif'
import prof from '../img/a.jpg'
import axios from "axios";
function FactSection() {
    const API_KEY = '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'; // Replace with your actual API key
    const API_ENDPOINT = 'https://openrouter.ai/api/v1/chat/completions'; // Example endpoint
    const [fact , setFact ] = useState("Dogs have about 1,700 taste buds compared to humans who have about 9,000. While they can taste sweet, sour, salty and bitter, their preferences are different from ours.")
    const [loading , setLoading ] = useState(false)
    async function getAianswer(messageContent) {
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

    const handler = ()=>{
        setLoading(true)
        getAianswer("just state a fact about dogs (without title)")
        .then(res=>{
         
            setLoading(false)
            setFact(res.choices[0].message.content)
        })
    }

    return (<section id="Fact" className="py-16 bg-deep">
        <div className="container mx-auto px-4">
            <div className="bg-ocean rounded-2xl p-8 md:p-12 text-cream w-2/3 mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-8 ">
                    <div className=" md:w-2/3">
                        <h2 className="text-3xl font-bold mb-4">Did You Know?</h2>
                      {
                        loading?<img src={loadingDog} alt="" /> : <p className="text-xl mb-6">{fact}</p>
                      
                      }
                        <button onClick={handler} className="bg-deep hover:bg-cream text-clay font-semibold py-3 px-6 rounded-lg transition duration-300">
                            Get Another Fact
                        </button>
                    </div>
                    <div className="md:w-1/3 mt-6 md:mt-0">
                        <img src={prof}
                            alt="Dog with tongue out"
                            className="w-full rounded-lg shadow-lg" />
                    </div>
                </div>
            </div>
        </div>
    </section>);
}

export default FactSection;