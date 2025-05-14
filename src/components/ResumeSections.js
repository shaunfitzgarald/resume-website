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
      window.open(require('../assets/Shaun_Stephenson_Resume_CS.pdf'), '_blank');
    } else {
      setModalOpen(true);
    }
  };

  const handleSuccess = () => {
    setModalOpen(false);
    window.open(require('../assets/Shaun_Stephenson_Resume_CS.pdf'), '_blank');
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
      {/* Objective */}
      <Parallax speed={-10}>
        <Paper sx={{ ...sectionStyle }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: vibrantColors[3] }}>
            Objective
          </Typography>
          <Typography>
            Energetic, detail-oriented server/barista with extensive customer service experience in high-volume cafés. Currently studying Computer Science at San Diego Mesa College while developing React apps for clients. Seeking a full-time morning shift at a café/bakery to contribute to a fast-paced, customer-focused team.
          </Typography>
        </Paper>
      </Parallax>
      {/* Relevant Experience */}
      <Parallax speed={8}>
        <Paper sx={{ ...sectionStyle }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: vibrantColors[0] }}>
            Relevant Experience
          </Typography>
          <ul style={{ margin: 0, paddingLeft: 20 }}>
            <li>Strong customer-facing experience from fast-paced café roles, including Arely’s French Bakery and The French Gourmet.</li>
            <li>Comfortable working early morning shifts and weekends with consistent punctuality and reliability.</li>
            <li>High-volume order handling (75+ customers per shift), POS system use (Toast), and cash handling accuracy.</li>
            <li>Demonstrated multitasking under pressure and positive team collaboration.</li>
            <li>Clear communicator with an upbeat attitude, ideal for front-of-house service roles.</li>
          </ul>
        </Paper>
      </Parallax>
      {/* Experience */}
      <Parallax speed={-8}>
        <Paper sx={{ ...sectionStyle }} id="experience">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: vibrantColors[2] }}>
            Experience
          </Typography>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Freelance Web Developer - San Diego, CA
            </Typography>
            <Typography variant="subtitle2" sx={{ color: '#555' }}>
              Independent Contractor | Jan 2024 - Present
            </Typography>
            <ul>
              <li>Juggled four client-facing React app projects while enrolled full-time in college.</li>
              <li>Delivered high-quality front-end solutions with strong attention to design, usability, and detail.</li>
              <li>Balanced dev deadlines with academic workload - demonstrating reliability and time management.</li>
            </ul>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Server / Barista - Arely’s French Bakery, San Diego, CA
            </Typography>
            <Typography variant="subtitle2" sx={{ color: '#555' }}>
              Mar 2023 - Aug 2023
            </Typography>
            <ul>
              <li>Served 75+ guests per shift in a busy café, handling orders, food delivery, espresso drinks, and POS.</li>
              <li>Maintained calm under pressure while multitasking and ensuring customer satisfaction.</li>
              <li>Known for cheerful demeanor and efficient service - thrived in a fast-paced environment.</li>
            </ul>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Server / Barista - The French Gourmet, San Diego, CA
            </Typography>
            <Typography variant="subtitle2" sx={{ color: '#555' }}>
              Nov 2021 - Jun 2022
            </Typography>
            <ul>
              <li>Took custom orders, brewed specialty coffee drinks, and prepped pickup orders.</li>
              <li>Managed end-of-day closing procedures and cash handling with 100% accuracy.</li>
              <li>Cross-trained across roles and praised for adaptability and team spirit.</li>
            </ul>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Fulfillment Technician - Curology, Inc., San Diego, CA
            </Typography>
            <Typography variant="subtitle2" sx={{ color: '#555' }}>
              May 2018 – May 2019
            </Typography>
            <ul>
              <li>Processed and fulfilled 650+ shipments daily with 99% order accuracy and attention to detail.</li>
              <li>Resolved 250+ order issues, contributing to a 95% resolution rate and smooth team workflow.</li>
              <li>Communicated and collaborated with coworkers using Slack and Gmail, similar to busy café coordination.</li>
              <li>Organized product packaging and labeling tasks with speed and consistency under time pressure.</li>
              <li>Followed strict safety and hygiene procedures relevant to food service and customer safety.</li>
            </ul>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Personal Executive Assistant - Independent Contractor, San Diego, CA
            </Typography>
            <Typography variant="subtitle2" sx={{ color: '#555' }}>
              Apr 2018 - Jan 2020
            </Typography>
            <ul>
              <li>Managed scheduling, travel, and administrative support for C-level executive.</li>
              <li>Maintained confidentiality and organized logistics with precision and time management.</li>
              <li>Demonstrated communication and multitasking skills in high-stakes environments.</li>
              <li>Provided front-facing support and coordination, applicable to customer service roles.</li>
            </ul>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Brand Representative - Abercrombie & Fitch/Hollister Co., San Diego, CA
            </Typography>
            <Typography variant="subtitle2" sx={{ color: '#555' }}>
              Jun 2013 - Jan 2018
            </Typography>
            <ul>
              <li>Trained new hires and engaged with customers to provide tailored recommendations.</li>
              <li>Maintained store cleanliness, visual standards, and a polished, professional demeanor.</li>
              <li>Resolved customer concerns on the floor, demonstrating patience and communication.</li>
              <li>Promoted store events and products, enhancing customer experiences and loyalty.</li>
            </ul>
          </Box>
        </Paper>
      </Parallax>
      {/* Education */}
      <Parallax speed={6}>
        <Paper sx={{ ...sectionStyle }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: vibrantColors[4] }}>
            Education
          </Typography>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              San Diego Mesa College – San Diego, CA
            </Typography>
            <Typography variant="subtitle2" sx={{ color: '#555' }}>
              Associates Degree for Transfer, Computer Science (In Progress)
            </Typography>
            <Typography variant="body2">
              Courses: Java Programming, Computer Organization & Assembly Language<br />
              Expected Transfer: 2025
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              LEARN Academy – San Diego, CA
            </Typography>
            <Typography variant="subtitle2" sx={{ color: '#555' }}>
              Full-Stack Web Development Bootcamp | Graduated Jan 2024
            </Typography>
            <Typography variant="body2">
              Award: Outstanding Performance in React Framework Development
            </Typography>
          </Box>
        </Paper>
      </Parallax>
      {/* Skills */}
      <Parallax speed={-4}>
        <Paper sx={{ ...sectionStyle }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: vibrantColors[5] }}>
            Skills
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            {skills.map((skill, i) => (
              <Chip
                key={skill}
                label={skill}
                sx={{
                  background: vibrantColors[i % vibrantColors.length],
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '1rem',
                  mb: 1,
                }}
              />
            ))}
          </Stack>
        </Paper>
      </Parallax>
      {/* Printable PDF Resume */}
      <Parallax speed={2}>
        <PDFResumeWithHumanCheck />
      </Parallax>
    </Box>
  );
}
