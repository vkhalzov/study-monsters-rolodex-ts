import React, { Component } from 'react';
import './App.css';
import SearchBox from "./components/search-box/search-box.component";
import { CardList } from "./components/card-list/card-list.component";
import { Monster } from "./models";

interface Props {}

interface State {
  monsters: Monster[],
  searchField: string
}

class App extends Component<Props, State> {

  state: State = {
    monsters: [],
    searchField: ''
  }

  constructor(props: Props) {
    super(props);
    this.getFilteredMonsters = this.getFilteredMonsters.bind(this);
  }

  loadMonsters = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState({ monsters: users.map((user: {
            id: number;
            email: string;
            name: string;
          }) => new Monster(user.id, user.name, user.email)) })
      });
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ searchField: event.target.value })
  }

  getFilteredMonsters(): Monster[] {
    const { monsters, searchField } = this.state;
    return monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
  }

  // Lifecycle. Called immediately after a component is mounted. Setting state here will trigger re-rendering.
  componentDidMount(): void {
    this.loadMonsters();
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Monsters Rolodex (TypeScript)</h1>
        </header>
        <div className="content">
          <SearchBox placeHolder="Search monsters" changeHandler={this.handleChange} />
          <CardList monsters={this.getFilteredMonsters()} />
        </div>
        <footer className="footer">
          <a href="https://github.com/vkhalzov/study-monsters-rolodex-ts">Github Repo</a>
        </footer>
      </div>
    );
  }
}

export default App;
