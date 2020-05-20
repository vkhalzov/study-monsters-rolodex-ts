import React from "react";
import { Monster } from "../../models";
import "./card.styles.css";

interface CardProps {
  monster: Monster
}

export const Card: React.FunctionComponent<CardProps> = (props) => (
  <div className="card-container">
    <img alt={props.monster.name} src={`https://robohash.org/${props.monster.id}?set=set2`} />
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
)
