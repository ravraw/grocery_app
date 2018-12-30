import React, { Component } from "react";
import SpeechRecognition from "react-speech-recognition";
import PropTypes from "prop-types";

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
};

class Dictaphone extends Component {
  render() {
    const {
      transcript,
      resetTranscript,
      browserSupportsSpeechRecognition
    } = this.props;

    if (!browserSupportsSpeechRecognition) {
      return null;
    }

    return (
      <div>
        <button onClick={resetTranscript}>Reset</button>
        <div>{transcript}</div>
      </div>
    );
  }
}

Dictaphone.propTypes = propTypes;

export default SpeechRecognition(Dictaphone);
