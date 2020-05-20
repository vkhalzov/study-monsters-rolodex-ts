import React from "react";
import "./search-box.styles.css";

interface SearchBoxProps {
  placeHolder: string,
  changeHandler(event: React.ChangeEvent<HTMLInputElement>): void
}

const SearchBox: React.FunctionComponent<SearchBoxProps> = (props) => (
  <input className="search" type="search" placeholder={props.placeHolder} onChange={props.changeHandler} />
)

export default SearchBox;
