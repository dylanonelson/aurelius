import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const WeeklySummary = ({ totals }) => {
  return (
    <div>
      <h2>This week</h2>
      {
        Object.keys(totals).map((key) => {
          return (<p key={key}>{key} {totals[key] || 0}</p>);
        })
      }
    </div>
  );
};

WeeklySummary.propTypes = {
  totals: PropTypes.objectOf(PropTypes.number),
};

function mapStateToProps(state, props) {
  const { logTypes } = props;

  const totals = Object.keys(logTypes).reduce((acc, key) => {
    const logType = logTypes[key];
    const logsByDay = state.logs;
    Object.keys(logsByDay).forEach((day) => {
      const daysLogs = logsByDay[day];
      const { id, name } = logType;
      const count = daysLogs[id] || 0;
      acc[name] = acc[name] === undefined ? count : acc[name] + count;
    });
    return acc;
  }, {});

  return { totals };
}

const ConnectedWeeklySummary = connect(
  mapStateToProps
)(WeeklySummary);

ConnectedWeeklySummary.propTypes = {
  logTypes: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.string,
    mark: PropTypes.string,
    name: PropTypes.string,
    ts: PropTypes.number,
  })).isRequired,
};

export default ConnectedWeeklySummary;
