import {geminiURL} from "./ai-api-config.js"

export const askAI = async (apiKey, game, question) => {
  const aiURL = `${geminiURL}${apiKey}`
  const query = `You're specialist at the egame ${game}, 
  answer this query: ${question}`
  const contents = [{
    parts: [{
      text: query
    }]
  }]
  const response = await fetch(aiURL, {
    method: "POST",
    headers:{"Content-Type": "application/json"},
    body: JSON.stringify({contents})
  })
  const data = await response.json()
  console.log([{data}])
  return data.candidates[0].content.parts[0].text 
}