import React, { useEffect } from 'react';

const WordReader = ({ voice, rate, pitch, volume, translationEnabled, targetLanguage }) => {
  useEffect(() => {
    const handleWordClick = async (event) => {
      const selectedWord = window.getSelection().toString().trim();
      if (selectedWord) {
        const textToSpeak = translationEnabled ? await translateText(selectedWord) : selectedWord;
        readAloud(textToSpeak);
      } else {
        const range = document.caretRangeFromPoint(event.clientX, event.clientY);
        range.expand('word');
        const word = range.toString().trim();
        if (word) {
          const textToSpeak = translationEnabled ? await translateText(word) : word;
          readAloud(textToSpeak);
        }
      }
    };

    const translateText = async (text) => {
      try {
        const response = await fetch(`https://libretranslate.com/translate`, {
          method: 'POST',
          body: JSON.stringify({
            q: text,
            source: 'en',
            target: targetLanguage,
            format: 'text'
          }),
          headers: { 'Content-Type': 'application/json' },
        });
        if (!response.ok) {
          throw new Error(`Translation error: ${response.statusText}`);
        }
        const data = await response.json();
        return data.translatedText;
      } catch (error) {
        console.error(error);
        return text; // Fallback to the original text if translation fails
      }
    };

    const readAloud = (text) => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = speechSynthesis.getVoices().find(v => v.name === voice);
      utterance.rate = rate;
      utterance.pitch = pitch;
      utterance.volume = volume;
      speechSynthesis.speak(utterance);
    };

    document.addEventListener('click', handleWordClick);

    return () => {
      document.removeEventListener('click', handleWordClick);
    };
  }, [voice, rate, pitch, volume, translationEnabled, targetLanguage]);

  return null;
};

export default WordReader;