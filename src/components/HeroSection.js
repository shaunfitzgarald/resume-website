import React, { useState } from 'react';
import { Box, Typography, Button, Stack, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Parallax } from 'react-scroll-parallax';
import HumanCheckModal from './HumanCheckModal';

const vibrantGradient = 'linear-gradient(90deg, #ff6b6b, #f8e71c, #00c3ff, #7d5fff)';

function ContactIconsWithHumanCheck() {
  const [modalOpen, setModalOpen] = useState(false);
  const [pendingAction, setPendingAction] = useState(null);
  const [humanVerified, setHumanVerified] = useState(false);

  const handleIconClick = (action) => {
    if (humanVerified) {
      action();
    } else {
      setPendingAction(() => action);
      setModalOpen(true);
    }
  };

  const handleSuccess = () => {
    setModalOpen(false);
    if (pendingAction) {
      pendingAction();
    }
  };

  return (
    <>
      {/* All socials and contact links protected by human check */}
      <Stack direction="row" spacing={2} sx={{ mb: 3, justifyContent: 'center' }}>
        <IconButton
          onClick={() => handleIconClick(() => window.open('https://instagram.com/shaunfitzgarald', '_blank'))}
          sx={{ color: '#fff', background: '#E1306C', '&:hover': { background: '#C13584' } }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          onClick={() => handleIconClick(() => window.open('https://github.com/shaunfitzgarald', '_blank'))}
          sx={{ color: '#fff', background: '#333', '&:hover': { background: '#000' } }}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          onClick={() => handleIconClick(() => window.open('https://linkedin.com/in/shaunfitzgarald', '_blank'))}
          sx={{ color: '#fff', background: '#0077b5', '&:hover': { background: '#005983' } }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          onClick={() => handleIconClick(() => window.location.href = 'mailto:shaunfitzgarald@gmail.com')}
          sx={{ color: '#fff', background: '#d44638', '&:hover': { background: '#a23328' } }}
        >
          <EmailIcon />
        </IconButton>
        <IconButton
          onClick={() => handleIconClick(() => window.location.href = 'tel:15596678555')}
          sx={{ color: '#fff', background: '#34c759', '&:hover': { background: '#228b3c' } }}
        >
          <PhoneIcon />
        </IconButton>
      </Stack>
      <HumanCheckModal open={modalOpen && !humanVerified} onClose={() => setModalOpen(false)} onSuccess={handleSuccess} setHumanVerified={setHumanVerified} />
    </>
  );
}


export default function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: '#111',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Parallax speed={-20}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 900,
            letterSpacing: '-2px',
            background: vibrantGradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: { xs: 5, md: 7 }, // Increased margin bottom for more space
            textShadow: '0 4px 32px #000a',
          }}
        >
          Shaun Stephenson
        </Typography>
      </Parallax>
      <Parallax speed={10}>
        <Typography variant="h6" sx={{ mt: { xs: 1, md: 2 }, mb: 4, color: '#fff', opacity: 0.85 }}>
          Energetic, detail-oriented server/barista & web developer
        </Typography>
      </Parallax>
      <Parallax speed={-10}>
        <ContactIconsWithHumanCheck />
      </Parallax>
      <Parallax speed={15}>
        <Button
          variant="contained"
          size="large"
          sx={{
            background: vibrantGradient,
            color: '#111',
            fontWeight: 700,
            px: 4,
            py: 1.5,
            borderRadius: '32px',
            boxShadow: '0 4px 32px #0008',
            textTransform: 'none',
            fontSize: '1.2rem',
            mt: 2,
            '&:hover': {
              background: 'linear-gradient(90deg, #7d5fff, #00c3ff, #f8e71c, #ff6b6b)',
            },
          }}
          href="#experience"
        >
          View My Experience
        </Button>
      </Parallax>
    </Box>
  );
}
