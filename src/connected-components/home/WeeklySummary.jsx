import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import WeeklyLogSummary from 'view-components/weekly-log-summary';
import { selectors as logsSelectors } from 'redux-modules/logs';
import { selectors as logTypesSelectors } from 'redux-modules/logTypes';

const styles = {
  container: {
    position: 'absolute',
    top: 64 + 48,
  },
};

const WeeklySummary = ({ logTypes, stats }) => {
  return (
    <div
      style={styles.container}
    >
      {
        Object.keys(stats).map((key) => {
          return (
            <WeeklyLogSummary
              key={key}
              logType={logTypes[key]}
              {...stats[key]}
            />
          );
        })
      }
    </div>
  );
};

WeeklySummary.propTypes = {
  logTypes: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.string,
    mark: PropTypes.string,
    name: PropTypes.string,
    ts: PropTypes.number,
  })).isRequired,
  stats: PropTypes.objectOf(PropTypes.shape({
    avg: PropTypes.number,
    max: PropTypes.number,
    nonzeroes: PropTypes.number,
    sum: PropTypes.number,
  })),
};

function mapStateToProps(state) {
  const logTypes = logTypesSelectors.logTypesSelector(state);
  const stats = logsSelectors.thisWeeksLogsStatisticsSelector(state);

  return {
    logTypes,
    stats,
  };
}

const ConnectedWeeklySummary = connect(
  mapStateToProps
)(WeeklySummary);

export default ConnectedWeeklySummary;
