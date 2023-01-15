import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import AudioAdjusters from './audio-adjusters';

const SpeechToText = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  const [finalTranscript, setFinalTranscript] = useState('');
  const [lastFinalTranscription, setLastFinalTranscription] = useState('');
  const [audioSettings, setAudioSettings] = useState({
    volume: 1,
    rate: 1,
    pitch: 1,
  });

  useEffect(() => {
    let listeningInterval = null;
    if (listening) {
      SpeechRecognition.startListening({ continuous: true });
      listeningInterval = setInterval(() => {
        setFinalTranscript(transcript);
      }, 480);
    } else {
      clearInterval(listeningInterval);
      SpeechRecognition.stopListening();
    }
    return () => {
      clearInterval(listeningInterval);
    };
  }, [listening, transcript]);

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      return;
    }
    if (finalTranscript !== lastFinalTranscription) {
      setLastFinalTranscription(finalTranscript);
      if ('speechSynthesis' in window) {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(finalTranscript);
        utterance.volume = audioSettings.volume;
        utterance.rate = audioSettings.rate;
        utterance.pitch = audioSettings.pitch;
        resetTranscript();
        synth.speak(utterance);
        }
        }
        }, [finalTranscript, lastFinalTranscription, browserSupportsSpeechRecognition, resetTranscript, audioSettings]);
        
        if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
        }
        
        return (
        <div>
        <p>Microphone: {listening ? 'on' : 'off'}</p>
        <button onClick={() => SpeechRecognition.startListening({ continuous: true })}>Start</button>
        <button onClick={() => SpeechRecognition.stopListening()}>Stop</button>
        <AudioAdjusters audioSettings={audioSettings} setAudioSettings={setAudioSettings} />
        <p>{finalTranscript}</p>
        </div>
        );
        };
        
        export default SpeechToText;
