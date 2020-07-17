import React, { Component } from 'react';
import CardList from './component/card-list/card-list.component';
import './App.css';
import SearchBox from './component/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = (event) => {
    this.setState({searchField: event.target.value});
  }

  render() {
      const { monsters, searchField } = this.state;
      const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
      return (
        <div className="App">
          <h1>Monsters Collection</h1>
          <SearchBox 
            placeholder='search monsters'
            handleChange = {this.handleChange}
          />
          <CardList monsters={filteredMonsters} />
        </div>
      );
  }
}

export default App;
