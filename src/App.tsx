import React from 'react';
import { Container, Box } from '@mui/material';
import Weather from './pages/Weather';
import './App.css';

const App = (): JSX.Element => {
    return (
        <Box className="mainContainer">
            <Container maxWidth="md">
                <Weather />
            </Container>
        </Box>
    );
};

export default App;
