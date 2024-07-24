import { generateText } from 'ai'
import { createOllama } from 'ollama-ai-provider'
import { config } from 'dotenv'
import * as readline from 'node:readline/promises'
import { bootstrap } from './API'
import loading from 'loading-cli'

bootstrap()

config()

const { BASE_URL } = process.env

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const ollama = createOllama({
  baseURL: `${BASE_URL}/ask-query`,
  headers: {
    'Content-Type': 'application/json'
  }
})

const model = ollama('commit')

async function main() {
  while (true) {
    let userInput = await terminal.question('You: ')

    if (userInput.trim() === '') {
      console.log('\x1b[33m%s\x1b[0m', 'Please enter a valid question')
      continue
    }

    const load = loading('Generating response...').start()

    const { text } = await generateText({
      model: model,
      prompt: userInput
    })

    if (text) load.stop()

    process.stdout.write('\nAssistant: ')

    process.stdout.write(text)

    process.stdout.write('\n\n')
  }
}
main().catch(console.error)

