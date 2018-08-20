import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Questions from './components/Questions/Questions'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      questionsList: []
     }
     this.handleGetQuestions = this.handleGetQuestions.bind(this);
  }

  componentDidMount() {
    axios.get('https://opentdb.com/api.php?amount=10')
    .then(resp => {
      return axios.post('/api/questionslist', {resp})
        .then(res => {
          this.setState({
            questionsList: res.data
          })
          
        })
    })
  }

  handleGetQuestions() {
    axios.get('https://opentdb.com/api.php?amount=10')
      .then(resp => {
        return axios.post('/api/questionslist', {resp})
          .then(res => {
            this.setState({
              questionsList: res.data
            })
            
          })
      })
  }

  render() { 
    let { questionsList } = this.state;
    console.log(this.state.questionsList);
    
    return ( 
      <div>
      <Questions questionsList={questionsList} />
      </div>
     );
  }
}
 
export default App;
