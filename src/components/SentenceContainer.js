import React from 'react';
import axios from 'axios';

export default class SentenceContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allSentences: [],
      currentSentence: null
    }
  }

componentDidMount() {
  let me = this;
  axios.get('http://localhost:3001/api/v1/sentences.json')
  .then(response => {
    console.log(response);
    me.setState({allSentences: response.data, currentSentence: response.data[Math.floor(Math.random() * response.data.length)]})
  })
  .catch(error => {
    console.log(error)
  })
}

  changeSentence = () => {
    let newSentence = this.state.allSentences[Math.floor(Math.random() * this.state.allSentences.length)]
    this.setState({currentSentence: newSentence});
  }

render() {
  return (
    <div>
    {this.state.currentSentence &&
      this.state.currentSentence.content
    }

    <button onClick={this.changeSentence}>New
    </button>
    </div>
  )
}

}
