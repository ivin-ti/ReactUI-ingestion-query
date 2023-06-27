import React, { useState } from 'react';
import './styles.css';

function App() {
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
      console.log('Error:', error);
    }
    setAnswer(question);
    setQuestion('');
  };

  return (
    <div className="container">
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
    </div>
  );
}

export default App;
