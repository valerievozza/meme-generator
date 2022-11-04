import memesData from '../assets/memesData.js'

export default function Meme() {
  
  function getRandomMeme() {
    const memes = memesData.data.memes
    const random = Math.floor(Math.random() * memes.length)
    const randomMeme = memes[random].url
    console.log(randomMeme)
    return randomMeme
  }
  
  return (
    <div className="form">
      <div className="form--input">
        <input
          className="input--top-text"
          type="text"
          placeholder="Top text"
        />
        <input
          className="input--bottom-text"
          type="text"
          placeholder="Bottom text"
        />
      </div>
      <button
        className="form--button"
        onClick={getRandomMeme}
      >
        Get a new meme image
      </button>
    </div>
  )
}