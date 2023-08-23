import React, { memo } from 'react';
import { Button, Box, Grid, CardContent, Typography, Card, CardActions } from '@mui/material';
import MemoAPI from './api';

const MemoShow: React.FC<{ allMemos: { id: number, content: string, response: string }[], searchResults: { id: number, content: string, response: string }[], onMemoDeleted: (id: number) => void }> = ({ allMemos, searchResults, onMemoDeleted }) => {
    const memosToShow = searchResults.length > 0 ? searchResults : allMemos;

    const handleDelete = async (id: number) => {
        try {
            await MemoAPI.deleteMemo(id);
            onMemoDeleted(id);

        } catch (error) {
            alert("メモの削除に失敗しました。");
        }
    }

    return (
        <Box mt={3}>
            {memosToShow.map((memo) => (
                <Card key={memo.id} sx={{ marginBottom: 2 }}>
                    <CardContent>
                        <Typography variant="body1">{memo.content}</Typography>
                        <Typography variant="body2" color="textSecondary">{memo.response}</Typography>
                    </CardContent>
                    <CardActions>
                        <Grid container justifyContent="flex-end">
                            <Button onClick={() => handleDelete(memo.id)} variant="contained" color="secondary">
                                Delete
                            </Button>
                        </Grid>
                    </CardActions>
                </Card>
            ))}
        </Box>
    );
}

export default MemoShow;
