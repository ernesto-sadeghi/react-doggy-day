import axios from "axios";

const API_KEY = process.env.REACT_APP_KEY;
const API_ENDPOINT = 'https://openrouter.ai/api/v1/chat/completions';
export async function AIrequest(messageContent) {
    try {
        const response = await axios.post(API_ENDPOINT, {
            model: 'mistralai/mistral-small-3.2-24b-instruct:free',
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
        console.error('AI API error:', error);
        throw new Error('Failed to get dog description');
    }
}