import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import NavDrawer from "./components/NavDrawer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "./sites/Home";


const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: "#fefefe",
  //   },
  //   secondary: purple,
  // },
  // typography: {
  //   fontFamily: "Quicksand",
  //   fontWeightLight: 400,
  //   fontWeightRegular: 500,
  //   fontWeightMedium: 600,
  //   fontWeightBold: 700,
  // },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavDrawer>
          <Routes>
            <Route path="/" element={<Home />} />
           
          </Routes>
        </NavDrawer>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
