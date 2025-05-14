import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, TextField, Box } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import LoopIcon from '@mui/icons-material/Loop';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

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

export default function HumanCheckModal({ open, onClose, onSuccess, setHumanVerified }) {
  const [challenge, setChallenge] = useState(pickQuestion());
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFail, setShowFail] = useState(false);

  // Regenerate a new question
  const handleRegenerate = () => {
    setChallenge(pickQuestion());
    setInput('');
    setError('');
    setShowFail(false);
    setShowSuccess(false);
  };

  // Regenerate question every time modal opens
  React.useEffect(() => {
    if (open) {
      handleRegenerate();
    }
    // eslint-disable-next-line
  }, [open]);

  function handleSubmit(e) {
    if (e) e.preventDefault();
    const normalizedInput = input.trim().toLowerCase();
    const acceptableAnswers = Array.isArray(challenge.a) ? challenge.a : [challenge.a];
    const isCorrect = acceptableAnswers.some(ans => normalizedInput === ans.trim().toLowerCase());
    if (isCorrect) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setInput('');
        setError('');
        if (setHumanVerified) setHumanVerified(true);
        onSuccess();
        onClose();
      }, 900);
    } else {
      setShowFail(true);
      setError('Incorrect, try again.');
      setTimeout(() => setShowFail(false), 900);
    }
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>Human Verification</DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="body1" sx={{ color: '#222', flex: 1 }}>
            {challenge.q}
          </Typography>
          <Tooltip title="New Question" placement="top">
            <IconButton
              aria-label="New Question"
              onClick={handleRegenerate}
              size="medium"
              sx={{ ml: 2, color: 'primary.main', '&:hover': { bgcolor: 'primary.light', color: 'primary.dark' } }}
            >
              <LoopIcon fontSize="medium" />
            </IconButton>
          </Tooltip>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 48, mb: 1 }}>
          {showSuccess && (
            <CheckCircleIcon sx={{ color: 'success.main', fontSize: 48, animation: 'bounce 0.7s' }} />
          )}
          {showFail && (
            <CancelIcon sx={{ color: 'error.main', fontSize: 48, animation: 'shake 0.7s' }} />
          )}
        </Box>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Your Answer"
            value={input}
            onChange={e => setInput(e.target.value)}
            variant="outlined"
            size="small"
            sx={{ mb: 2, width: '100%', input: { color: '#222' } }}
            autoFocus
            disabled={showSuccess}
          />
          {error && !showSuccess && (
            <Typography variant="body2" color="error" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary" disabled={showSuccess}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" disabled={showSuccess}>Submit</Button>
      </DialogActions>
      <style>{`
        @keyframes bounce {
          0% { transform: scale(0.7); opacity: 0.2; }
          50% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes shake {
          0% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-8px); }
          80% { transform: translateX(8px); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </Dialog>
  );
}
