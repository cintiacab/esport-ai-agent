import {askAI} from "./src/server/ask-ai.js"

const form = document.getElementById("form")
const apiKeyInput = document.getElementById('apiKey')
const gameSelect = document.getElementById('gameSelector')
const questionInput = document.getElementById("questionInput")
const askButton = document.getElementById("askButton")
const aiResponse = document.getElementById("aiResponse")

form.addEventListener('submit', async (event) => {
  event.preventDefault()

  const apiKey = apiKeyInput.value
  const game = gameSelect.value
  const question = questionInput.value
  
  if (apiKey == "" || game == "" || question == "") {
    alert("Please fill up all fields")
    return
  }

  askButton.disabled = true
  askButton.textContent = "Asking..."
  askButton.classList.add("loading")

  try {
    const text = await askAI(apiKey, game, question)
    aiResponse.querySelector('.response-content').innerHTML = text
  } catch (error) {
    alert("Sorry, I'm still connecting. Please try again.")
    console.log(error)
  } finally{
    askButton.disabled = false
    askButton.textContent = "Ask"
    askButton.classList.remove("loading")
  }
})
