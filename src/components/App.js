import React from 'react';
import '../stylesheets/App.css';
import { Route, Switch } from 'react-router-dom';
import CharList from './CharList';
import CharDetail from './CharDetail';
import fetchChar from '../services/fetchChar';
import Header from './Header';

class Loader extends React.Component {
  render() {
    return <p className='loading'>Loading...</p>;
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      inputGender: '',
      checked: '',
      inputValue: '',
      loading: true
    }
  }

  componentDidMount() {
    fetchChar().then(charData => {
      if (charData === undefined) {
        this.setState({
          loading: true
        })
      } else {
        this.setState({
          characters: charData,
          loading: false
        })
      }
    })
  }
  //eventos

  handleGender = (inputGender) => {
    this.setState({
      inputGender
    })
    console.log(inputGender)
  }

  handleName = (inputValue) => {
    this.setState({
      inputValue
    })
    console.log(inputValue)
  }

  resetBtn = () => {
    this.setState({
      inputGender: '',
      inputValue: ''
    })
  }

  //filter

  filterChar() {
    const characters = [...this.state.characters]
    const search = this.state.inputValue
    const gender = this.state.inputGender
    return characters
      .filter(character => {
        return gender === '' ? true : character.gender === gender
      })
      .filter(character => {
        return character.name.toLowerCase().includes(search)
      })
  }



  //Render

  renderCharDetails = (props) => {
    const routeName = props.match.params.name;
    const character = this.state.characters.find(item => {
      return item.name === routeName
    })
    if (character === undefined) {
      return <p>El personaje no existe</p>
    } else {
      return <CharDetail
        characters={character} />
    }

  }


  render() {
    console.log(this.state.characters)
    return (
      <div className="all">
        {this.state.loading
          ? (<Loader />)
          : (<Switch>
            <Route exact path="/">
              <Header
                handleGender={this.handleGender}
                checked={this.state.inputGender}
                handleName={this.handleName}
                value={this.state.inputValue}
                resetBtn={this.resetBtn}

              />
              <CharList
                characters={this.filterChar()}
              />
            </Route>
            <Route path="/char/:name"
              render={this.renderCharDetails}>
            </Route>
          </Switch>)
        }
      </div>
    );
  }
}

export default App;
