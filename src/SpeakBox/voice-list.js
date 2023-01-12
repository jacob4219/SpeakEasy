import React, { useState, useEffect } from 'react';

const chrome = window.chrome;
const [chromeTTSAvailable, setChromeTTSAvailable] = useState(false);
const [chromeVoices, setChromeVoices] = useState([]);
const [webVoices, setWebVoices] = useState([]);
const [errorMessage, setErrorMessage] = useState('');

const getVoices = () => {
    let voices = [];
    if (chromeTTSAvailable) {
        voices = [...voices, ...chromeVoices];
    }
    if (webVoices.length > 0) {
        voices = [...voices, ...webVoices];
    }
    return voices;
}

useEffect(() => {
    if(chrome && chrome.tts) {
        setChromeTTSAvailable(true);
        chrome.tts.getVoices(voices => setChromeVoices(voices));
    }
    window.speechSynthesis.getVoices()
    .then(voices => setWebVoices(voices))
    .catch(error => setErrorMessage('No Voices Detected. Make sure you have an internet connection and/or Try using Google Chrome Browser.'))
  }, []);

const VoiceList = () => {
    const [voice, setVoice] = useState('');

    const handleChange = (event) => {
        setVoice(event.target.value);
    };

    return (
        <div>
            {errorMessage && <div>{errorMessage}</div>}
            <select value={voice} onChange={handleChange}>
                {getVoices().map(voice => <option value={voice.name} key={voice.name}>{voice.name}</option>)}
            </select>
        </div>
    );
};

export default VoiceList;
