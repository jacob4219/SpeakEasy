import React, { useState, useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import VoiceMenu from "./VoiceMenu";
import { useAudioSettings } from "./AudioSettingsContext";
import { useDraggable } from "@dnd-kit/core";
import { generateUniqueID } from "./utils/idGenerator";

const SpeechToText = ({ onFinalTranscription, preventEmptyBubbles }) => {
  const {
    audioSettings,
    setAudioSettings,
    autoMuteMic,
    setAutoMuteMic,
    selectedVoice,
    toggleListening,
    voices = [],
  } = useAudioSettings();

  const [inputText, setInputText] = useState("");
  const [lastFinalTranscription, setLastFinalTranscription] = useState("");
  const { transcript, resetTranscript, finalTranscript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  const bubbleId = generateUniqueID();

  // Drag-and-Drop Hook
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: bubbleId,
    data: { text: inputText },
  });

  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    padding: "8px",
    margin: "4px",
    borderRadius: "4px",
    cursor: "crosshair",
    backgroundColor: "#f3f3f3",
    border: "1px solid #ccc",
  };

  const handlePlayText = () => {
    if (autoMuteMic) {
      SpeechRecognition.stopListening();
    }

    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(inputText);
    utterance.voice = voices.find((voice) => voice.name === selectedVoice) || null;
    utterance.volume = audioSettings.volume;
    utterance.rate = audioSettings.rate;
    utterance.pitch = audioSettings.pitch;

    utterance.onend = () => {
      if (autoMuteMic) {
        SpeechRecognition.startListening({ continuous: true });
      }
    };

    synth.speak(utterance);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handlePlayText();
      if (inputText.trim() || !preventEmptyBubbles) {
        onFinalTranscription({
          text: inputText.trim(),
          audioSettings,
          selectedVoice,
          id: bubbleId,
        });
        setInputText("");
      }
    }
  };

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) return;

    if (finalTranscript !== lastFinalTranscription) {
      setLastFinalTranscription(finalTranscript);
      if (window.speechSynthesis) {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(finalTranscript);
        resetTranscript();
        utterance.onstart = () => autoMuteMic && SpeechRecognition.stopListening();
        utterance.onend = () => autoMuteMic && SpeechRecognition.startListening({ continuous: true });
        utterance.voice = voices.find((voice) => voice.name === selectedVoice) || null;
        utterance.volume = audioSettings.volume;
        utterance.rate = audioSettings.rate;
        utterance.pitch = audioSettings.pitch;
        synth.speak(utterance);

        if (finalTranscript.trim() || !preventEmptyBubbles) {
          onFinalTranscription({
            text: finalTranscript.trim(),
            audioSettings,
            selectedVoice,
            id: bubbleId,
          });
        }
      }
    }
  }, [finalTranscript, lastFinalTranscription, browserSupportsSpeechRecognition, resetTranscript, selectedVoice, audioSettings, autoMuteMic, voices, onFinalTranscription, preventEmptyBubbles, bubbleId]);

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div>
      <p>{transcript}</p>
      <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleEnter}
        />
      </div>
      <button onClick={handlePlayText}>Play</button>
      <button
        onClick={() => {
          if (inputText.trim() || !preventEmptyBubbles) {
            onFinalTranscription({
              text: inputText.trim(),
              audioSettings,
              selectedVoice,
              id: bubbleId,
            });
            setInputText("");
          }
        }}
      >
        +
      </button>
      <VoiceMenu />
      <button onClick={toggleListening}>{listening ? "Stop" : "Start"}</button>
      <button onClick={() => setAutoMuteMic(!autoMuteMic)}>
        {autoMuteMic ? "Auto Mute Mic: ON" : "Auto Mute Mic: OFF"}
      </button>
    </div>
  );
};

export default SpeechToText;