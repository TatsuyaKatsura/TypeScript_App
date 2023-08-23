import React, { useEffect, useState } from 'react';
import MemoSearch from './MemoSearch';
import MemoAdd from './MemoAdd';
import MemoAPI from './api';
import MemoShow from './MemoShow';

const MemoPage: React.FC = () => {
    const [allMemos, setAllMemos] = useState<{ id: number, content: string, response: string }[]>([]);
    const [searchResults, setSearchResults] = useState<{ id: number, content: string ,response: string }[]>([]);

    useEffect(() => {
        const fetchAllMemos = async () => {
            try {
                const allMemos = await MemoAPI.fetchMemos();
                setAllMemos(allMemos);
            }
            catch {
                alert('メモの取得に失敗しました');
            }
        };
        fetchAllMemos();
    }, []);

    const handleMemoDeleted = (id: number) => {
        setAllMemos(prevMemos => prevMemos.filter(memo => memo.id !== id));
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Memo App</h1>
            <MemoSearch setSearchResults={setSearchResults} />
            <MemoAdd 
                onMemoAdded={(newMemo, tempMemoId) => {
                    setAllMemos(prev => prev.filter(memo => memo.id !== tempMemoId));
                    setAllMemos(prev => [newMemo,...prev ]);
                }} 
            />
            <MemoShow allMemos={allMemos} searchResults={searchResults} onMemoDeleted={handleMemoDeleted} />
        </div>
    );
}

export default MemoPage;
