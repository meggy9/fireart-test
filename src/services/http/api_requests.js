import axios from 'axios'

export default {
    fetchQuestions: (amount, difficulty) => {
        return axios.get(process.env.VUE_APP_API_URL,
            {
                params: {
                    amount,
                    difficulty
                }
            })
    }
}