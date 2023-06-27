import React, { useState } from 'react';
import './styles.css';

function App() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [gdriveLink, setGDriveLink] = useState('');

  const handleQuestionSubmit = async (e) => {
    e.preventDefault();
    const url = `https://query.api.com/${question}`;

    try {
      const response = await fetch(url);
      // const data = await response.json();
      // const answerFromApi = data.answer;
    } catch (error) {
      console.log('Error with query:', error);
    }
    setAnswer(question);
    setQuestion('');
  };

  const handleGDriveSubmit = async (e) => {
    e.preventDefault();
    const url = `https://ingestion.api.com/${gdriveLink}`;

    try {
      const response = await fetch(url);
    } catch (error) {
      console.log('Error with ingestion:', error);
    }

    setGDriveLink('');
  };

  return (
    <div className="container">
      <div className="form-container">
        <form onSubmit={handleGDriveSubmit} className="form">
          <label className="label">
            GDrive Folder Link:
            <input
              type="text"
              value={gdriveLink}
              onChange={(e) => setGDriveLink(e.target.value)}
              className="input"
            />
          </label>
          <br />
          <button type="submit" className="button">Submit</button>
        </form>
      </div>
      <div className="form-container">
        <form onSubmit={handleQuestionSubmit} className="form">
          <label className="label">
            Question:
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="input"
            />
          </label>
          <br />
          <label className="label">
            Answer:
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="input"
              readOnly
            />
          </label>
          <br />
          <button type="submit" className="button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
