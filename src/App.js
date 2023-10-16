import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HeroSection from "./components/HeroSection";
import Cakess from "./components/Cakess";
import { Container } from "@mui/material";
import ContactUS from "./components/ContactUS";
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
        <ContactUS />
      </Container>
    </ThemeProvider>

  );
}

export default App;
