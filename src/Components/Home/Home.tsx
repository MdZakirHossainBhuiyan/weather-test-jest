import { Container, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const history = useHistory();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    }

    const handleSubmit = () => {
        history.push(`/countryInfo/${searchValue}`);
    }

    return (
        <Container style={{textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <h1 data-testid="homePageTitle">Country Info</h1>
            <TextField data-testid="homePageInput" onChange={handleInputChange} id="outlined-basic" label="Country Name" variant="outlined" />
            <button onClick={handleSubmit} className={searchValue ? 'submitButtonActive' : 'submitButtonDisable'}>Submit</button>
        </Container>
    );
};

export default Home;