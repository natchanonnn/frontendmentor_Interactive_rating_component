import React from 'react';
import './App.css';
import icon from './images/icon-star.svg'
import icon2 from './images/illustration-thank-you.svg'

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      isSubmitted: false,
      select: -1
    };
  }
  
  render() {
    if (this.state.isSubmitted) {
      return (
        <div className="App">
          <div className='Center'>
            <img src={icon2} alt="Thankyou Icon"/>
          </div>
          <div className='Result Center'>
            <p className=''>
              You selected {this.state.select+1} out of 5 
            </p>   
          </div>
          <h1 className='Center'>Thank you!</h1>
          <p className='Center op50'> We appreciate you taking the time to give a rating.
            If you ever need more support, don't hesitate 
            to get in touch!
          </p>
        </div>
      );
    }
    else {
      return (
        <div className="App">
          <div className='UpperStar'>
            <div className='Star'>
              <img src={icon} alt='star'/>  
            </div>
          </div>
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support
            request. All feedback is appreciated to help us
            improve our offering!
          </p>
          <div className='NumContainer'>
          {[...Array(5)].map((i,idx) => (
            <button 
              className={this.state.select === idx ? 'Num active' : 'Num'}
              key={idx}
              onClick={() => this.setState({select: idx})}
            >
                {idx+1}
            </button>
          ))}
          </div>
          <button 
            onClick={() => this.setState({isSubmitted: true})}
            className='SubmitButton'
            >Submit</button>
        </div>
      );
    }
    
  }
}

export default App;
