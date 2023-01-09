import CareScale from "./CareScale";
import "../styles/PlantItem.css";

function PlantItem({ id, cover, name, light, water }) {
  return (
    <li key={id} className="lmj-plant-item">
      <img className="lmj-plant-item-cover" src={cover} alt=""></img>
      {name}
      <div>
        <CareScale careType="light" scaleValue={light} />
        <CareScale careType="water" scaleValue={water} />
      </div>
    </li>
  );
}

export default PlantItem;
