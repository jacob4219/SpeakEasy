import React, { useState, useEffect } from 'react';

const VoiceList = () => {
    const [voices, setVoices] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [voice, setVoice] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (typeof window.speechSynthesis !== 'undefined') {
            setIsLoading(true);
            window.speechSynthesis.onvoiceschanged = () => {
                const voices = window.speechSynthesis.getVoices();
                setVoices(voices);
                setIsLoading(false);
            }
        } else {
            setErrorMessage('No Voices Detected. Make sure you have an internet connection and/or Try using Google Chrome Browser.');
            setIsLoading(false);
        }
    }, []);

    const handleChange = (event) => {
        setVoice(event.target.value);
    };

    return (
        <div>
            {errorMessage && <div>{errorMessage}</div>}
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <select value={voice} onChange={handleChange}>
                    {voices.length > 0 ? (
                        voices.map(voice => (
                            <option value={voice.name} key={voice.name}>
                                {voice.name}
                            </option>
                        ))
                    ) : (
                        <option value="" disabled>
                            No voices available
                        </option>
                    )}
                </select>
            )}
        </div>
    );
}

export default VoiceList;