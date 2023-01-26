import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = e => {
    const { name } = e.target;
    setFeedback(prevState => ({
      ...prevState,
      [name]: prevState[name] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((feedback.good / countTotalFeedback()) * 100);
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={Object.keys(feedback)}
        onLeaveFeedback={onLeaveFeedback}
      />
      <Statistics
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        total={countTotalFeedback()}
        positivePercentage={countPositiveFeedbackPercentage()}
      />
    </Section>
  );
};

export default App;