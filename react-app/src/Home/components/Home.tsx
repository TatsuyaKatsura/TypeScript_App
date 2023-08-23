import React from 'react';
import { Grid } from '@mui/material';

import { Link } from 'react-router-dom';
import Navbar from '../../Navbar/components/Navbar';


const Home: React.FC = () => (
    <div>
        
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <h1>Welcome Home</h1>
            </Grid>
        </Grid>
        <p>各機能を追加予定だよ</p>
        <Link to="/memo"><p>Memo機能</p></Link>

        <Link to="/regex"><p>正規表現</p></Link>
        <Navbar />
        
    </div>
);
export default Home;