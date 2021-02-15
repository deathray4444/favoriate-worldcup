import React, { useState, useEffect } from "react";
import { FlexBox } from "./style";
import imgA from "../img/햄버거.jpg";
import imgB from "../img/라면.jpg";
import imgC from "../img/파스타.jpg";
import imgD from "../img/볶음밥.jpg";

const items = [
  {
    name: "햄버거",
    src: imgA,
  },
  {
    name: "볶음밥",
    src: imgD,
  },
  {
    name: "파스타",
    src: imgC,
  },
  {
    name: "라면",
    src: imgB,
  },
];

const Game = () => {
  const [foods, setFoods] = useState([]);
  const [displays, setDisplays] = useState([]);
  const [winners, setWinners] = useState([]);
  useEffect(() => {
    items.sort(() => Math.random() - 0.5);
    setFoods(items);
    setDisplays([items[0], items[1]]);
  }, []);
  const clickHandler = (food) => () => {
    if (foods.length <= 2) {
      if (winners.length === 0) {
        setDisplays([food]);
        alert("되냐");
      } else {
        let updateFood = [...winners, food];
        setFoods(updateFood);
        setDisplays([updateFood[0], updateFood[1]]);
        setWinners([]);
        alert("되냐2");
      }
    } else if (foods.length > 2) {
      setWinners([...winners, food]);
      setDisplays([foods[2], foods[3]]);
      setFoods(foods.slice(2));
      alert("되냐3");
    }
  };

  return (
    <FlexBox>
      <h1 className="title">Favorite WorldCup</h1>
      {displays.map((d) => {
        return (
          <div className="flex-1" key={d.name} onClick={clickHandler(d)}>
            <img className="food-image" src={d.src} />
            <div className="name">{d.name}</div>
          </div>
        );
      })}
    </FlexBox>
  );
};

export default Game;
