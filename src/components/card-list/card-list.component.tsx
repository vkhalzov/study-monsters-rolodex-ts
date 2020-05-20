import React from "react";
import { Card } from "../card/card.component";
import { Monster } from "../../models";
import "./card-list.styles.css";

interface CardListProps {
  monsters: Monster[]
}

export const CardList: React.FunctionComponent<CardListProps> = (props) => (
  <div className="card-list">
    {props.monsters.map(monster => <Card key={monster.id} monster={monster} />)}
  </div>
)
