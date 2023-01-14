import React, { useState } from 'react';
import { useSpeechSynthesis, useSpeechRecognition } from 'react-speech-kit';

const TextInput = () => {
    const [text, setText] = useState('');
    const [volume, setVolume] = useState(1);
    const [rate, setRate] = useState(1);
    const [pitch, setPitch] = useState(1);
    const [muted, setMuted] = useState(false);

    const { speak, stop } = useSpeechSynthesis();
    const { listen, listening, supported, transcript } = useSpeechRecognition();

    const handleTextChange = (event) => {
        setText(event.target.value);
    }

    const handleSpeak = () => {
        speak({ text, rate, pitch, volume });
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter') {
            handleSpeak();
            setText('');
        }
    }

    const handleStop = () => {
        stop();
    }

    const handleVolumeChange = (event) => {
        setVolume(event.target.value);
    }

    const handleRateChange = (event) => {
        setRate(event.target.value);
    }
    const handlePitchChange = (event) => {
      setPitch(event.target.value);
  }

  const handleMute = () => {
      setMuted(!muted);
  }

  return (
      <div>
          <div id="enter-box">
              <input 
                  type="text" 
                  id="input-text" 
                  value={text} 
                  onChange={handleTextChange}
                  onKeyPress={handleKeyPress}
                  placeholder="Say Something!"
              />
          </div>
          <div>
              <button onClick={listen} disabled={listening}>
                  {listening ? 'Stop' : 'Start'} Listening
              </button>
              {supported ? (
                  <p>You said: {transcript}</p>
              ) : (
                  <p>Speech recognition not supported</p>
              )}
              <button onClick={handleSpeak} disabled={!text}>
                  Speak
              </button>
              <button onClick={handleStop}>
                  Stop
              </button>
              <label>Volume:
                  <input 
                      type="range" 
                      min="0" 
                      max="1" 
                      step="0.1" 
                      value={volume} 
                      onChange={handleVolumeChange} 
                      disabled={muted}
                  />
              </label>
              <button onClick={handleMute}>
                  {muted ? 'Unmute' : 'Mute'}
              </button>
              <label>Rate:
                  <input 
                      type="range" 
                      min="0.5" 
                      max="2" 
                      step="0.1" 
                      value={rate} 
                        onChange={handleRateChange} 
                    />
                </label>
                <label>Pitch:
                    <input 
                        type="range" 
                        min="0" 
                        max="2" 
                        step="0.1" 
                        value={pitch} 
                        onChange={handlePitchChange} 
                    />
                </label>
            </div>
        </div>
    );
}

export default TextInput;
