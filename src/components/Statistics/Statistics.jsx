import PropTypes from 'prop-types';
import style from 'components/Statistics/statistics.module.css'

const Statistics = ({ good, neutral, bad, countTotalFeedback, countPositiveFeedbackPercentage }) => (

    <div>
        <ul className={style.list}>
            <li className={style.item}>Good: {good}</li>
            <li className={style.item}>Neutral:{neutral}</li>
            <li className={style.item}>Bad: {bad}</li>
            <li className={style.item}>Total: {countTotalFeedback}</li>
            <li className={style.item}>Positive Feedback: {countTotalFeedback ? countPositiveFeedbackPercentage : 0}%</li>
        </ul>
    </div>
)

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    countTotalFeedback: PropTypes.number.isRequired,
    countPositiveFeedbackPercentage: PropTypes.number.isRequired,
};

export default Statistics

