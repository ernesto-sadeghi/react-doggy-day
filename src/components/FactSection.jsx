import { useState } from "react";
import loadingDog from '../img/animated-dog-image-0931.gif'
import prof from '../img/a.jpg'

import { AIrequest } from "../composable/useAIanswer";
function FactSection() {
   
    const [fact , setFact ] = useState("Dogs have about 1,700 taste buds compared to humans who have about 9,000. While they can taste sweet, sour, salty and bitter, their preferences are different from ours.")
    const [loading , setLoading ] = useState(false)
   
    const handler = ()=>{
        setLoading(true)
        AIrequest("just state a fact about dogs (without title)")
        .then(res=>{
         
            setLoading(false)
            setFact(res.choices[0].message.content)
        })
    }

    return (<section id="Fact" className="py-16 bg-deep">
        <div className="container mx-auto px-4">
            <div className="bg-ocean rounded-2xl p-8 md:p-12 text-cream w-11/12 md:w-2/3 mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-8 ">
                    <div className=" md:w-2/3 ">
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