import React, { useState } from "react";
import SpeechToText from "./SpeakBox/SpeechToText";
import { AudioSettingsProvider } from "./SpeakBox/AudioSettingsContext";
import Field from "./SpeakBox/Field";
import AudioAdjusters from "./SpeakBox/AudioAdjusters";
import WordReader from "./SpeakBox/WordReader";

function App() {
  const [entries, setEntries] = useState({
    recent: [],
    favorite: [],
    recycle: [],
    userGenerated: [],
    hopper: [],
  });

  const [preventEmptyBubbles, setPreventEmptyBubbles] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [showVolume, setShowVolume] = useState(true);
  const [showRate, setShowRate] = useState(true);
  const [showPitch, setShowPitch] = useState(true);
  const [wordReaderEnabled, setWordReaderEnabled] = useState(false);

  const [voice, setVoice] = useState("Google US English");
  const [rate, setRate] = useState(1);
  const [pitch, setPitch] = useState(1);
  const [volume, setVolume] = useState(1);

  const onFinalTranscription = (entry) => {
    const field = entry.field || "recent";
    entry.voice = voice; // Save the voice used
    entry.rate = rate; // Save the rate used
    entry.pitch = pitch; // Save the pitch used
    setEntries((prev) => ({
      ...prev,
      [field]: [entry, ...(prev[field] || [])],
    }));
  };

  const fields = [
    { title: 'Recent', name: 'recent' },
    { title: 'Favorite', name: 'favorite' },
    { title: 'Recycle', name: 'recycle' },
    { title: 'User Generated', name: 'userGenerated' },
    { title: 'Hopper', name: 'hopper' },
  ];

  return (
    <AudioSettingsProvider>
      <div className='app'>
        <h1>Speak:Easy</h1>

        <SpeechToText 
          onFinalTranscription={onFinalTranscription} 
          preventEmptyBubbles={preventEmptyBubbles} 
        />
        <AudioAdjusters 
          showVolume={showVolume} 
          showRate={showRate} 
          showPitch={showPitch}
          setVoice={setVoice}
          setRate={setRate}
          setPitch={setPitch}
          setVolume={setVolume}
        />
        {wordReaderEnabled && (
          <WordReader 
            voice={voice} 
            rate={rate} 
            pitch={pitch} 
            volume={volume} 
          />
        )}

        <div>
          <button onClick={() => setShowSettings(!showSettings)}>
            {showSettings ? "Hide Settings" : "Show Settings"}
          </button>
          {showSettings && (
            <div className="settings-menu">
              <label>
                <input
                  type="checkbox"
                  checked={preventEmptyBubbles}
                  onChange={() => setPreventEmptyBubbles(!preventEmptyBubbles)}
                /> <> </>
                Prevent Empty Bubbles
              </label>
              <>  </>
              <label>
                <input
                  type="checkbox"
                  checked={showVolume}
                  onChange={() => setShowVolume(!showVolume)}
                /> <> </>
                Show Volume
              </label>
              <> </>
              <label>
                <input
                  type="checkbox"
                  checked={showRate}
                  onChange={() => setShowRate(!showRate)}
                /> <> </>
                Show Rate
              </label>
              <> </>
              <label>
                <input
                  type="checkbox"
                  checked={showPitch}
                  onChange={() => setShowPitch(!showPitch)}
                /> <> </>
                Show Pitch
              </label>
              <> </>
              <label>
                <input
                  type="checkbox"
                  checked={wordReaderEnabled}
                  onChange={() => setWordReaderEnabled(!wordReaderEnabled)}
                /> <> </>
                Enable Word Reader
              </label>
            </div>
          )}
        </div>
        
        {fields.map(field => (
          <Field 
            key={field.name} 
            title={field.title} 
            entries={entries[field.name]} 
            setEntries={setEntries} 
            field={field.name} 
            mainVoice={voice}
            mainRate={rate}
            mainPitch={pitch}
          />
        ))}
      </div>
    </AudioSettingsProvider>
  );
}

export default App;