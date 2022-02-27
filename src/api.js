import axios from 'axios'
console.log(process.env.REACT_APP_YT_API_KEY)
const request = axios.create({
   baseURL: 'https://youtube.googleapis.com/youtube/v3/',
   params: {
      key: 'AIzaSyB3iwb2_X0NeaO_EnqOVl52G5BR2CuiR-4',
   },
})

export default request
