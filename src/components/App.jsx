import React, { Component } from 'react';
import Statistics from 'components/Statistics/Statistics.jsx';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions.jsx';
import Section from 'components/SectionTitle/SectionTitle.jsx'; 
import Notification from 'components/Notification/Notification.jsx';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state
    return good + neutral + bad
}

countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad
    return Math.round(good * 100 / total)
}

onLeaveFeedback = event => {
  const currentButton = event.currentTarget.value;
  this.setState(prevState => ({
    ...prevState,
    [currentButton]: prevState[currentButton] + 1,
  }));
};

  render(){

    return (
      <>
        <Section title="Please leave feedback">
           <FeedbackOptions
              onLeaveFeedback ={this.onLeaveFeedback}
              options={Object.keys(this.state)}
           />
        </Section>
         {this.countTotalFeedback() !== 0 ?
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            countTotalFeedback={this.countTotalFeedback()}
            countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
        : <Notification message="There is no feedback" />
      }
      </>
    )
  
};
}

export default App;
