import { Box, Button } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        gap: 4,
      }}
    >
      <Button
        variant="contained"
        size="large"
        href="https://warchest.avagliano.me"
        sx={{
          fontSize: "1.5rem",
          padding: "20px 40px",
          minWidth: "250px",
        }}
      >
        Warchest
      </Button>
      <Button
        variant="contained"
        size="large"
        href="https://actual.avagliano.me"
        sx={{
          fontSize: "1.5rem",
          padding: "20px 40px",
          minWidth: "250px",
        }}
      >
        Actual
      </Button>
    </Box>
  );
}

export default App;
