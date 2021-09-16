import React from 'react'

import { AddCategory } from './AddCategory'
import GifGrid from './GifGrid'

export const GifExpertApp = () => {
  const [categories, setCategories] = React.useState<string[]>([])

  return (
    <div>
      <h2> GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category, index) => (
          <GifGrid key={index} category={category} />
        ))}
      </ol>
    </div>
  )
}
