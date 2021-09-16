import { Gif } from '../interfaces/GIf'

const GifGridItem = (props: AppProps) => {
  return (
    <div>
      <img src={props.gif.url} alt={props.gif.title} />
      <p>{props.gif.title}</p>
    </div>
  )
}

type AppProps = {
  gif: Gif
}

export default GifGridItem
