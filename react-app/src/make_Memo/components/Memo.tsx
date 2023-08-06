// Memo.tsx

import React, { useState } from 'react';
import { Button, TextField, List, ListItem, ListItemText, IconButton, Link } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Navbar from '../../Navbar/components/Navbar';

type Memo = {
    id: number;
    content: string;
};

const MemoApp: React.FC = () => {
    const [memos, setMemos] = useState<Memo[]>([]);
    const [input, setInput] = useState<string>('');

    const handleAdd = () => {
        if (input.trim()) {
            setMemos([...memos, { id: Date.now(), content: input.trim() }]);
            setInput('');
        }
    };

    const handleDelete = (id: number) => {
        setMemos(memos.filter(memo => memo.id !== id));
    };

    const handleMoveUp = (index: number) => {
        if (index === 0) return;
        const newMemos = [...memos];
        const temp = newMemos[index];
        newMemos[index] = newMemos[index - 1];
        newMemos[index - 1] = temp;
        setMemos(newMemos);
    };

    const handleMoveDown = (index: number) => {
        if (index === memos.length - 1) return;
        const newMemos = [...memos];
        const temp = newMemos[index];
        newMemos[index] = newMemos[index + 1];
        newMemos[index + 1] = temp;
        setMemos(newMemos);
    };

    return (
        <div>
            <h1>Memo App</h1>

            <TextField
                variant="outlined"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a memo..."
                style={{ width: '80%' }}
            />
            <Button onClick={handleAdd} variant="contained" color="primary">
                Add
            </Button>
            <List>
                {memos.map((memo, index) => (
                    <ListItem key={memo.id}>
                        <ListItemText primary={memo.content} />
                        <IconButton onClick={() => handleMoveUp(index)}>
                            <ArrowUpwardIcon />
                        </IconButton>
                        <IconButton onClick={() => handleMoveDown(index)}>
                            <ArrowDownwardIcon />
                        </IconButton>
                        <IconButton onClick={() => handleDelete(memo.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
            <Navbar></Navbar>

        </div>



    );
}

export default MemoApp;
