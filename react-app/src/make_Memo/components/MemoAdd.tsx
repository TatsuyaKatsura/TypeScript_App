import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import MemoAPI from './api';

const MemoAdd: React.FC<{ onMemoAdded: (newMemo: {id: number, content: string, response: string }, tempMemoId: number) => void }> = ({ onMemoAdded }) => {
    const [input, setInput] = useState<string>('');

    const handleAdd = async () => {
        if (!input) {
            alert('メモが入力されていません');
        }
        else {
            const tempMemo = {
                id: Date.now(),  // temporary id
                content: input,
                response: 'Waiting...'
            };
            onMemoAdded(tempMemo, tempMemo.id);  // 一時的なメモのIDも渡す
            try {
                const newMemo = await MemoAPI.addMemo(input);
                onMemoAdded(newMemo, tempMemo.id);  // 一時的なメモのIDも渡す
                setInput('');
            }
            catch(error) {
                alert('メモの追加に失敗しました');
            }
        }
    };

    return (
        <div>
            <TextField
                variant="outlined"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a memo..."
                style={{ width: '80%', marginTop: '10px' }}
            />
            <Button onClick={handleAdd} variant="contained" color="primary" style={{ marginLeft: '10px' }}>
                Add
            </Button>
        </div>
    );
}

export default MemoAdd;
