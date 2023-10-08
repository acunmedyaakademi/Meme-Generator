import React, { useEffect, useState } from 'react';
import './Meme.css';

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    memeImage: 'http://i.imgflip.com/1bij.jpg',
  });

  function handleChange(e) {
    setMeme(prev => {
      const { name, value } = e.target;
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes));
  }, []);

  function getMemeImg() {
    const memesArr = allMemes;

    const randomNumber = Math.floor(Math.random() * memesArr.length);

    const randomMemeImg = memesArr[randomNumber].url;

    setMeme(prev => ({ ...prev, memeImage: randomMemeImg }));
  }

  return (
    <div className="memeInput-wrapper">
      <div className="meme--inputs">
        <input
          type="text"
          onChange={handleChange}
          name="topText"
          value={meme.topText}
          placeholder="Top text"
        />
        <input
          type="text"
          onChange={handleChange}
          name="bottomText"
          value={meme.bottomText}
          placeholder="Bottom text"
        />

        <div className="meme-btn">
          <button className="meme--button" onClick={getMemeImg}>
            Get a new Meme Image
          </button>
        </div>
      </div>
      <div className="meme">
        <img className="meme-img" src={meme.memeImage} alt="" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
