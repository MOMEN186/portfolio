// src/components/Portfolio.jsx
import React from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Link,
} from '@mui/material';

const projects = [
  {
    title: 'Jira Clone',
    description:
      'A full-featured project management tool built with MERN. Tracks issues, sprints, and user roles.',
    // image: '/assets/jira-clone.png',
    href: 'https://github.com/MOMEN186/project_management',
  },
  {
    title: 'Google Flights Clone',
    description:
      'Flight search and booking interface mimicking Google Flights using React for UI and a Node.js/Express backend.',
  // image: '/assets/google-flights-clone.png',
    href: 'https://github.com/MOMEN186/GoogleFlightsClone',
  },
  {
    title: 'Village Info System',
    description:
      'Django REST API + React frontend deployed on Vercel/Neon to support underserved villages.',
    // image: '/assets/village-info.png',
    href: 'https://github.com/MOMEN186/Egypt-Aid',
  },
  {
    title: 'Sudoku Game ',
    description:
      'Logic-based, combinatorial number-placement puzzle built in Java. Uses backtracking and OOP principles for generation & solving.',
    // image: '/assets/sudoku-java.png',
  
  },
];

export default function Portfolio() {
  return (
    <Box
      component="section"
      id="portfolio"
      sx={{ py: 8, px: { xs: 2, md: 6 } }}
    >
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 500 }}
      >
        Projects
      </Typography>

      {/* CSS Grid with Box */}
      <Box
        sx={{
          display: 'grid',
          gap: 4,
          gridTemplateColumns: {
            xs: '1fr',
            sm: '1fr 1fr',
            md: 'repeat(3, 1fr)',
          
          },
        }}
      >
        {projects.map(({ title, description, image, href }) => (
          <Card
            key={title}
            elevation={3}
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: "#333333",
              color:"white"
            }}
          >
            <CardActionArea
              href={href}
              target="_blank"
              rel="noopener"
              sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                color:"white"
              }}
            >
              {image && (
                <CardMedia
                  component="img"
                  height="140"
                  image={image}
                  alt={title}
                />
              )}
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography   color="white" variant="h6" gutterBottom>
                  {title}
                </Typography>
                <Typography  variant="body2" color="white">
                  {description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <Box sx={{ p: 2, pt: 0 }}>
              {
               href && <Link href={href} target="_blank" rel="noopener" underline="hover">
                  View on GitHub
                </Link>
              }
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
