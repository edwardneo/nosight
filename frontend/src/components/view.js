import './view.css';

function View() {
  return (
    <div className="view">
      {getImages()}
    </div>
  );
}

function getImages() {
  fetch("https://us-central1-nosight-c105e.cloudfunctions.net/app/getImages")
    .then(res => res.json())
    .then(res => {
      return (res.images.map((image, i) => 
        (
          <div key={i}>
            <img className="close" src="./x.svg" alt="Close"></img>
            <img src={image.uri} alt="Filler"></img>
          </div>
        )
      ))
    }).catch(err => console.error(err));
}

export default View;
