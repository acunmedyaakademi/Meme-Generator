import React, { useState } from 'react';

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    memeImage: 'http://i.imgflip.com/1bij.jpg',
  });

  return <div>Meme</div>;
}
