import React, { useState } from 'react';
import './styles.css';

// Form component for question and answer
function QuestionForm() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = async (e) => {
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

  return (
    <form onSubmit={handleSubmit} className="form">
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
  );
}

// Form component for Google Drive folder link
function GDriveForm() {
  const [gdriveLink, setGDriveLink] = useState('');

  const handleSubmit = async (e) => {
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
    <form onSubmit={handleSubmit} className="form">
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
  );
}

// Main App component
function App() {
  return (
    <div className="container">
      <GDriveForm />
      <br />
      <QuestionForm />
    </div>
  );
}

export default App;
