import { useState } from "react";
import places from "../data/data";
import "../review.css";
function Reviews() {
  const [homes, setHomes] = useState(places);
  const [index, setIndex] = useState(0);

  const changeReview = (e) => {
    let newIndex;
    if (e.target.className == "prev") {
      newIndex = index === 0 ? homes.length - 1 : index - 1;
    }
    if (e.target.className == "next") {
      newIndex = index === homes.length - 1 ? 0 : index + 1;
    }
    setIndex(newIndex);
  };
  return (
    <div className="reviews">
      {homes.map((home, positionIndex) => {
        const { id, image, name, address } = home;

        let position =
          index == positionIndex
            ? "activeSlide"
            : positionIndex == index - 1 ||
              (index == 0 && positionIndex === homes.length - 1)
            ? "prevSlide"
            : "nextSlide";

        return (
          <article className={position} key={id}>
            <img src={image} alt="" className="reImg" />
            <h3>{name}</h3>
            <p>{address}</p>
          </article>
        );
      })}
      <button className="prev" onClick={changeReview}>
        left
      </button>
      <button className="next" onClick={changeReview}>
        right
      </button>
    </div>
  );
}

export default Reviews;
