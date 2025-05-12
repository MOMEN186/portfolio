// App.js
import { Box } from '@mui/material';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Box
      component="main"
      sx={{
        height: '100vh',               // full viewport
        overflowY: 'auto',             // allow scrolling
        scrollSnapType: 'y mandatory', // enable snap
      }}
    >
      {[Hero, About,Skills,Projects,Contact].map((Section, idx) => (
        <Box
          key={idx}
          sx={{
            height: '100vh',           // each slide fills viewport
            scrollSnapAlign: 'start',  // snap start of slide
          }}
        >
          <Section />
        </Box>
      ))}
    </Box>
  );
}

export default App;
