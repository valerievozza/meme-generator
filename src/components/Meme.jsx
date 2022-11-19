import memesData from '../assets/memesData.js'
import React from 'react'

export default function Meme() {
  // const [memeImage, setMemeImage] = React.useState('')
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: ""
  })
  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  function handleChange(event) {
    const {name, value} = event.target

    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [name]: value
      }
    })
  }
  
  return (
    <main>
      <div className="form">
        <div className="form--input">
          <input
            className="input--top-text"
            name="topText"
            type="text"
            placeholder="Top text"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            className="input--bottom-text"
            name="bottomText"
            type="text"
            placeholder="Bottom text"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>
        <button
          className="form--button"
          onClick={getMemeImage}
        >
          Get a new meme image
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" alt="" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
}