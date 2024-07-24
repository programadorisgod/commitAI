import express, { json, Request, Response } from 'express'

import ollama from 'ollama'

const PORT = process.env.PORT || process.argv[3] || 4000
export function bootstrap() {

  const app = express()
  app.disable('x-powered-by')
  app.use(json())

  app.post('/ask-query/chat', async (req: Request, res: Response) => {
    const { messages } = req.body
    const { content: question } = messages.at(-1)

    if (!question)
      res.status(403).json({ err: 'Por favor proporcione una pregunta' })

    const response = await ollama.chat({
      model: 'commit',
      messages: [{ role: 'user', content: question }]
    })

    if (response instanceof Error) console.log('error')

    res.json(response)
  })

  app.listen(PORT, () => {})
}


