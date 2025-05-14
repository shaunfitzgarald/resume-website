import React, { useState } from 'react';
import { Box, Button, Typography, TextField, Paper } from '@mui/material';

// Simple math and logic questions
const questions = [
  { q: 'What is 14 + 7?', a: ['21', 'twenty-one', 'twenty one'] },
  { q: 'What color do you get when you mix red and blue?', a: ['purple'] },
  { q: 'What is the last letter of the English alphabet?', a: ['z'] },
  { q: 'What is 9 x 6?', a: ['54', 'fifty-four', 'fifty four'] },
  { q: 'What is the third day of the week?', a: ['wednesday', 'wed'] },
  { q: 'What is 100 divided by 4?', a: ['25', 'twenty-five', 'twenty five'] },
  { q: 'What is the capital of France?', a: ['paris'] },
  { q: 'What is 7 squared?', a: ['49', 'forty-nine', 'forty nine'] },
  { q: 'What is the opposite of hot?', a: ['cold'] },
  { q: 'How many legs does a spider have?', a: ['8', 'eight'] },
];

function pickQuestion() {
  return questions[Math.floor(Math.random() * questions.length)];
}

export default function HumanCheck({ onSuccess }) {
  const [challenge] = useState(pickQuestion());
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const normalizedInput = input.trim().toLowerCase();
    const acceptableAnswers = Array.isArray(challenge.a) ? challenge.a : [challenge.a];
    const isCorrect = acceptableAnswers.some(ans => normalizedInput === ans.trim().toLowerCase());
    if (isCorrect) {
      setError('');
      onSuccess();
    } else {
      setError('Incorrect, try again.');
    }
  }

  return (
    <Paper elevation={4} sx={{ p: 3, mt: 3, mb: 3, textAlign: 'center', maxWidth: 400, mx: 'auto' }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Please answer to prove you are human:
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        {challenge.q}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Your Answer"
          value={input}
          onChange={e => setInput(e.target.value)}
          variant="outlined"
          size="small"
          sx={{ mb: 2, width: '100%' }}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ width: '100%' }}>
          Submit
        </Button>
      </form>
      {error && (
        <Typography variant="body2" color="error" sx={{ mt: 1 }}>
          {error}
        </Typography>
      )}
    </Paper>
  );
}
