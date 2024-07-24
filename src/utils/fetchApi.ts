interface Imessage {
  role: string
  content: string
}

interface Iresponse {
  response: string
}

export const customOllamaAPI = async (
  message: Imessage
): Promise<Iresponse | null> => {
  const response = await fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ question: message })
  })

  if (!response.ok) return null

  const data = await response.json()
  return data
}
