import axios from "axios";
import  { OPENAI_API_KEY }  from  "@env" 
// openAI APIにHTTPリクエストを送信し、そのレスポンスを取得する関数
export const requestOpenAi = () => {
    {try{
        // openAI apiへのHTTPリクエストを作成 返り値はPromise
        axios.post("https://api.openai.com/v1/chat/completions",{
            "model": "gpt-4o-mini",
            "messages": [{"role": "user", "content": "こんにちは"}]
        },
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${OPENAI_API_KEY}`,
            },
         },).then((data) => { // レスポンスを表示
            console.log(data)
         }).catch((error) => { 
            console.log(error)
         })
    }catch (error) {
        console.log(error)
    }}
}