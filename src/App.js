import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HeroSection from "./components/HeroSection";
import Cakess from "./components/Cakess";
import { Container } from "@mui/material";
import { Cake } from "@mui/icons-material";
import Contact from "./components/Contact";
const theme = createTheme({
  palette: {
    primary: {
      main: '#864313',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>

      <Navbar></Navbar>
      <Container>

        <HeroSection />
        <Cakess />
        {/* <Contact /> */}
      </Container>
    </ThemeProvider>

  );
}

export default App;
