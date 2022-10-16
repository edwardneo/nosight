import './view.css';
import { useState, useEffect } from 'react';

function View() {
  const [ imageArr, setImageArr ] = useState([]);

  const getImages = () => {
    fetch("https://us-central1-nosight-c105e.cloudfunctions.net/app/getImages")
    .then(res => res.json())
    .then(res => {
      const images = [];
      res.images.forEach((image, i) => {
          images.push((
            <div className="content" key={i}>
              <h1 className="close">X</h1>
              <img className="img" src={image.data.uri} alt="Filler" />
            </div>
          ));
          
          if (image.data.uri2 !== undefined) {
            images.push((
              <div className="content" key={i}>
                <h1 className="close">X</h1>
                <img className="img" src={image.data.uri2} alt="Filler" />
              </div>
            ))
          }
        }
      );
      setImageArr(images);
    }).catch(err => console.error(err));
  }

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="view">
      {imageArr}
    </div>
  );
}

export default View;
