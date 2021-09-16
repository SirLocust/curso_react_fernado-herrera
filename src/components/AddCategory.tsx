import React, { useState } from 'react'

export const AddCategory = (props: AppProps) => {
  const [inputValue, setinputValue] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setinputValue(e.target.value)
  }

  const handleSubmint = (event: React.SyntheticEvent): void => {
    event.preventDefault()
    props.setCategories((categories: string[]) => {
      return [...categories, inputValue]
    })
  }

  return (
    <form onSubmit={handleSubmint}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  )
}

type AppProps = {
  setCategories: React.Dispatch<React.SetStateAction<string[]>>
}
