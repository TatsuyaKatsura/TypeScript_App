import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import MemoAPI from './api';

const MemoSearch: React.FC<{ setSearchResults: (results: { id: number, content: string,response: string  }[]) => void }> = ({ setSearchResults }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearch = async () => {
        try {
            const results = await MemoAPI.searchMemo(searchTerm);
            setSearchResults(results);
        }
        catch(error) {
            alert('メモの検索に失敗しました')
        }
    };

    return (
        <div style={{ marginBottom: '20px' }}>
            <TextField
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                style={{ width: '80%', marginTop: '10px' }}
            />
            <Button onClick={handleSearch} variant="contained" color="primary">
                Search
            </Button>
        </div>
    );
}

export default MemoSearch;
