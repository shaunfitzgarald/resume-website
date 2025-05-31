import '../highlight-animate.css';
import React, { useState } from 'react';
import { Box, Button, Typography, Grid, Paper, Chip, Stack } from '@mui/material';
import { Parallax } from 'react-scroll-parallax';
import HumanCheck from './HumanCheck';

import HumanCheckModal from './HumanCheckModal';

function PDFResumeWithHumanCheck() {
  const [modalOpen, setModalOpen] = useState(false);
  const [humanVerified, setHumanVerified] = useState(false);

  const handleButtonClick = () => {
    if (humanVerified) {
      window.open(require('../assets/Shaun_Stephenson_-_Barista,_Server,_Cafe_front_of_house (2).pdf'), '_blank');
    } else {
      setModalOpen(true);
    }
  };

  const handleSuccess = () => {
    setModalOpen(false);
    window.open(require('../assets/Shaun_Stephenson_-_Barista,_Server,_Cafe_front_of_house (2).pdf'), '_blank');
  };

  return (
    <Paper sx={{ ...sectionStyle, textAlign: 'center', background: '#f5f5f5', mt: 6 }}>
      <Typography variant="h5" sx={{ fontWeight: 700, color: vibrantColors[0], mb: 2 }}>
        Need a printable version?
      </Typography>
      <Button
        variant="contained"
        size="large"
        onClick={handleButtonClick}
        sx={{
          background: 'linear-gradient(90deg, #ff6b6b, #f8e71c, #00c3ff, #7d5fff)',
          color: '#111',
          fontWeight: 700,
          px: 4,
          py: 1.5,
          borderRadius: '32px',
          boxShadow: '0 4px 32px #0008',
          textTransform: 'none',
          fontSize: '1.1rem',
          '&:hover': {
            background: 'linear-gradient(90deg, #7d5fff, #00c3ff, #f8e71c, #ff6b6b)',
          },
        }}
      >
        Printable PDF Resume
      </Button>
      <HumanCheckModal open={modalOpen && !humanVerified} onClose={() => setModalOpen(false)} onSuccess={handleSuccess} setHumanVerified={setHumanVerified} />
    </Paper>
  );
}


const sectionStyle = {
  background: '#fff',
  color: '#111',
  borderRadius: 6,
  boxShadow: '0 2px 32px #0001',
  p: { xs: 2, md: 4 },
  mb: 6,
};

const vibrantColors = [
  '#ff6b6b', '#f8e71c', '#00c3ff', '#7d5fff', '#34c759', '#ff8c00', '#ff00c8',
];

const skills = [
  'Customer-focused', 'Espresso & POS', 'Flexible scheduling', 'Tech-savvy: JavaScript',
  'React', 'GitHub', 'HTML/CSS', 'Communicates well', 'Weekend/Holiday availability',
];

export default function ResumeSections() {
  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', mt: { xs: 4, md: 8 }, zIndex: 2 }}>
      <Paper sx={{ ...sectionStyle, mb: 4 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={8}>
          <Typography variant="h5" sx={{ fontWeight: 700, color: vibrantColors[6], mb: 1 }}>
          Objective
        </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#333', mb: 1 }}>
              Barista, Server, Cafe front of house
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, color: vibrantColors[5], mb: 1 }}>
              Based in San Diego, CA
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Energetic, detail-oriented server/barista with a proven track record in fast-paced, high-volume café environments.<br />
              Currently pursuing a degree in Computer Science while delivering polished React apps for clients. Seeking a full-time
              café or bakery role that leverages my customer service expertise, multitasking skills, and technical aptitude.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ ...sectionStyle, mb: 4 }} id="experience">
        <Typography variant="h5" sx={{ fontWeight: 700, color: vibrantColors[2], mb: 1 }}>
          Career Experience
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Freelance Web Developer at Independent Contractor, San Diego
          </Typography>
          <Typography variant="subtitle2" sx={{ color: '#555' }}>
            January 2024 — Present
          </Typography>
          <ul>
            <li>Delivered modern, responsive React apps for multiple clients with a focus on UX and detail.</li>
            <li>Balanced four client projects alongside full-time coursework, showcasing strong time management.</li>
            <li>Communicated project needs effectively with clients, turning vague ideas into functioning applications.</li>
          </ul>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Server / Barista at Arely’s French Bakery, San Diego
          </Typography>
          <Typography variant="subtitle2" sx={{ color: '#555' }}>
            March 2023 — August 2023
          </Typography>
          <ul>
            <li>Served 75+ guests per shift, mastering espresso prep, POS (Toast), and food handling.</li>
            <li>Prioritized customer satisfaction while maintaining speed and accuracy during peak hours.</li>
            <li>Trusted with opening duties and shift coverage due to punctuality and reliability.</li>
          </ul>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Server / Barista at The French Gourmet, San Diego
          </Typography>
          <Typography variant="subtitle2" sx={{ color: '#555' }}>
            November 2021 — June 2022
          </Typography>
          <ul>
            <li>Operated front-of-house during peak periods, balancing barista work and customer service.</li>
            <li>Closed down café independently, managing registers and cleaning protocols flawlessly.</li>
            <li>Known for versatility, frequently cross-trained and moved between roles as needed.</li>
          </ul>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Fulfillment Technician at Curology, Inc., San Diego
          </Typography>
          <Typography variant="subtitle2" sx={{ color: '#555' }}>
            May 2018 — May 2019
          </Typography>
          <ul>
            <li>Processed 650+ daily shipments with 99% accuracy in a high-pressure logistics environment.</li>
            <li>Resolved over 250 order issues and contributed to a 95% team resolution rate.</li>
            <li>Maintained clean, efficient packaging stations with adherence to FDA-compliant hygiene protocols.</li>
          </ul>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Personal Executive Assistant at Independent Contractor, San Diego
          </Typography>
          <Typography variant="subtitle2" sx={{ color: '#555' }}>
            April 2018 — January 2020
          </Typography>
          <ul>
            <li>Managed scheduling, travel, and administrative tasks for a C-level executive.</li>
            <li>Prioritized discretion, proactive problem-solving, and logistical clarity.</li>
            <li>Operated across multiple time zones and calendars with zero missed deadlines.</li>
          </ul>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Brand Representative at Abercrombie & Fitch / Hollister Co., San Diego
          </Typography>
          <Typography variant="subtitle2" sx={{ color: '#555' }}>
            June 2013 — January 2018
          </Typography>
          <ul>
            <li>Onboarded and trained new employees on retail standards and customer service practices.</li>
            <li>Kept store visuals pristine and maintained a consistent brand image.</li>
            <li>Actively solved customer concerns on the floor with empathy and patience.</li>
          </ul>
        </Box>
      </Paper>
      <Paper sx={{ ...sectionStyle, mb: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, color: vibrantColors[4], mb: 1 }}>
          Education
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Typography variant="body1">
            <b>B.S., Human Biology | Minor: International Business & German</b><br />
            September 2014 — June 2018<br />
            University of California, San Diego, San Diego
          </Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="body1">
            <b>Intensive German Language Program</b><br />
            August 2016 — February 2017<br />
            Die Neue Schule, Berlin
          </Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="body1">
            <b>Associate Degree for Transfer, Computer Science (In Progress)</b><br />
            January 2025<br />
            San Diego Mesa College, San Diego
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1">
            <b>Full-Stack Web Development Bootcamp | Graduated</b><br />
            January 2024<br />
            LEARN Academy, San Diego
          </Typography>
        </Box>
      </Paper>
      <Parallax speed={2}>
        <PDFResumeWithHumanCheck />
      </Parallax>
    </Box>
  );
}

