import { Component } from "react";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import "./DestinationStyles.css";

class DestinationData extends Component {
  render() {
    return (
        <div className="first-des">
        <div className="des-text">
          <h2>Taal Volcano, Batangas</h2>
          <p>
            One of the most iconic views in Luzon, Mt. Taal boasts a volcano
            inside a lake inside an island. If you fancy a closer look, the hike
            up to the crater is a mere 45 minutes, and is easy enough for
            beginners. Guides will{" "}
          </p>
        </div>
        <div className="image">
          <img alt="img" src={Mountain1}/>
          <img alt="img" src={Mountain2}/>
        </div>
      </div>
    );
  }
}

export default DestinationData;