import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const EventDispatcher = ({ event }) => {
  const dispatchCustomEvent = () => {
    const { name, data } = event;
    window.dispatchEvent(new CustomEvent(name, { detail: { data } }));
  };

  useEffect(() => {}, [event]);

  return <div>{dispatchCustomEvent()}</div>;
};

EventDispatcher.propTypes = {
  event: PropTypes.instanceOf(Object)
};

EventDispatcher.defaultProps = {
  event: { name: "", data: "" }
};
const mapStateToProps = ({ eventsReducer: { event } }) => ({
  event
});

export default connect(mapStateToProps, null)(EventDispatcher);
