// src/components/Skills.jsx
import React from 'react';
import { Box, Grid, Typography, List, ListItem, LinearProgress } from '@mui/material';

const focusAreas = [
  'End-to-end Development',
  'Performance Optimization',
  'Scalable Backends',
  'Intuitive UI Design',
];

const skillsData = [
  { name: 'HTML5', level: 90 },
  { name: 'CSS3', level: 90 },
  { name: 'JavaScript (ES6+)', level: 85 },
  { name: 'React.js', level: 85 },
  { name: 'Node.js & Express.js', level: 80 },
  { name: 'MongoDB & PostgreSQL', level: 80 },
  { name: 'Django REST Framework', level: 75 },
  { name: 'Docker & DevOps', level: 70 },
];

export default function Skills() {
  return (
    <Box
      component="section"
      id="skills"
      sx={{
        bgcolor: 'grey.900',
        color: 'grey.100',
        py: 8,
        px: { xs: 2, md: 6 },
      }}
    >
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 500 }}
      >
        Skills
      </Typography>

      <Typography
        variant="body1"
        align="center"
        maxWidth={700}
        mx="auto"
        mb={6}
      >
        I build end-to-end web applications with the MERN stack, PostgreSQL, and Django REST—focusing on clean, intuitive UIs, performant backends, and scalable architectures.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Left: Focus Areas */}
        <Grid item xs={12} md={4}>
          <Typography variant="h5" gutterBottom sx={{ borderBottom: 1, borderColor: 'grey.700', pb: 1 }}>
            My Focus
          </Typography>
          <List sx={{ pl: 0 }}>
            {focusAreas.map(area => (
              <ListItem
                key={area}
                sx={{ display: 'list-item', py: 0.5, fontSize: '1rem' }}
              >
                {area}
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Right: Skill Bars */}
        <Grid item xs={12} md={6}>
          {skillsData.map(({ name, level }) => (
            <Box key={name} mb={1}>
              <Typography variant="subtitle1" gutterBottom>
                {name}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={level}
                sx={{
                  height: 10,
                  borderRadius: 5,
                  bgcolor: 'grey.800',
                  '& .MuiLinearProgress-bar': {
                    bgcolor: 'grey.300',
                  },
                }}
              />
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
