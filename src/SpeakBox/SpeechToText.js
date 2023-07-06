import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import AudioAdjusters from './AudioAdjusters';
import VoiceMenu from './VoiceMenu';
import { useSpeechSynthesis } from 'react-speech-kit';
import { useAudioSettings } from './AudioSettingsContext'; // import the custom hook

const SpeechToText = ({ onFinalTranscription }) => {
  const { audioSettings, setAudioSettings, autoMuteMic, setAutoMuteMic } = useAudioSettings(); // use the custom hook
  const [selectedVoice, setSelectedVoice] = useState('Google US English');
  const [lastFinalTranscription, setLastFinalTranscription] = useState('');
  const { transcript, resetTranscript, finalTranscript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const { voices, supported } = useSpeechSynthesis();

  const toggleListening = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ continuous: true });
    }
  };

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      return;
    }

    if (finalTranscript !== lastFinalTranscription) {
      setLastFinalTranscription(finalTranscript);
      if (supported) {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(finalTranscript);
        resetTranscript();
        utterance.onstart = () => {
          if (autoMuteMic) {
            SpeechRecognition.stopListening();
          }
        };
        utterance.onend = () => {
          if (autoMuteMic) {
            SpeechRecognition.startListening({ continuous: true });
          }
        };
        utterance.voice = voices.find(voice => voice.name === selectedVoice);
        utterance.volume = audioSettings.volume;
        utterance.rate = audioSettings.rate;
        utterance.pitch = audioSettings.pitch;
        synth.speak(utterance);

        if (finalTranscript.trim() !== '') {
          const entry = {
            text: finalTranscript.trim(),
            audioSettings: audioSettings,
            selectedVoice: selectedVoice,
            id: Math.random().toString(36).substring(7),
          };
          onFinalTranscription(entry);
        }
      }
    }
  }, [finalTranscript, lastFinalTranscription, browserSupportsSpeechRecognition, resetTranscript, selectedVoice, audioSettings, supported, voices, autoMuteMic, onFinalTranscription]);

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div>
      <p>{transcript}</p>
      <AudioAdjusters audioSettings={audioSettings} setAudioSettings={setAudioSettings} />
      <VoiceMenu voices={voices} selectedVoice={selectedVoice} setSelectedVoice={setSelectedVoice} />
      <button onClick={toggleListening}>{listening ? 'Stop' : 'Start'}</button>
      <button onClick={() => setAutoMuteMic(!autoMuteMic)}>
        {autoMuteMic ? 'Auto Mute Mic: ON' : 'Auto Mute Mic: OFF'}
      </button>
    </div>
  );
};

export default SpeechToText;