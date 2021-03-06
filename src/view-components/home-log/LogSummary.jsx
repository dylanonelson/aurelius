import PropTypes from 'prop-types';
import React from 'react';

const getStyles = ({ active }) => {
  return {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 20px',
    },
    title: {
      lineHeight: '56px',
      fontFamily: 'Roboto',
      fontSize: 20,
      fontWeight: 400,
    },
    count: {
      fontFamily: 'Roboto Mono, monospace',
      lineHeight: '56px',
      fontSize: 24,
      fontWeight: 400,
    },
  };
};

const LogSummary = (props) => {
  const { logType } = props;
  const styles = getStyles({ active: true });

  return (
    <div
      id="log-summary"
      style={styles.container}
    >
      <h2 style={styles.title}>
        {logType.name}
      </h2>
      <span style={styles.count}>
        {props.numLogs}
      </span>
    </div>
  );
};

LogSummary.propTypes = {
  logType: PropTypes.object.isRequired,
  numLogs: PropTypes.number.isRequired,
};

export default LogSummary;
