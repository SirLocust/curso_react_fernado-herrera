import { Gif } from '../interfaces/GIf'

export const getGifs = async (category: string): Promise<Gif[]> => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=O7yepbUfVev2kj0h1qqepx8RPIdutVvT&q=${category}`
  const resp = await fetch(url)
  const { data } = await resp.json()

  const gifs = data.map((img: any) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }
  }) as Gif[]

  return gifs
}
