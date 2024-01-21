import { useState } from "react"
import { getImageFor } from "../pexels"

function Cuisine(props) {
  const [image, setImage] = useState("");
  getImageFor(props.cuisine + "%20" + props.dish).then((res) => {
    console.log(res);
    setImage(res);
  });
  return (
    <div style={{backgroundColor: "white", backgroundImage: "url(\"" + image +"\")"}}>
      <h3>{props.cuisine}</h3>
      <p>{props.dish}</p>
    </div>
  )
}

export default Cuisine