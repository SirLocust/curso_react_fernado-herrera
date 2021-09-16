import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import { Gif } from '../interfaces/GIf'
import GifGridItem from './GifGridItem'

const GifGrid = (props: AppProps) => {
  const [gifs, setGifs] = useState<Gif[]>([])

  useEffect(() => {
    getGifs(props.category).then((gifs) => setGifs(gifs))
  }, [props.category])

  return (
    <div>
      <h3>{props.category}</h3>
      <ol>
        {gifs.map((gif) => {
          return <GifGridItem key={gif.id} gif={gif} />
        })}
      </ol>
    </div>
  )
}

type AppProps = {
  category: string
}

export default GifGrid
