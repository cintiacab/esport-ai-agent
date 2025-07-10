import {geminiURL} from "./ai-api-config.js"
import { makePrompt } from "./prompt-engineer.js"

export async function askAI(apiKey, game, question){
  const aiURL = `${geminiURL}${apiKey}`
  const query = makePrompt(game, question)
  const contents = [{
    role: "user",
    parts: [{
      text: query
    }]
  }]
  console.log({contents})
  const tools = [{
    google_search: {}
  }]

  const response = await fetch(aiURL, {
    method: "POST",
    headers:{"Content-Type": "application/json"},
    body: JSON.stringify({contents, tools})
  })
  const data = await response.json()

  return data.candidates[0].content.parts[0].text 
}