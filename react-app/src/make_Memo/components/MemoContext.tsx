import React, { createContext, useContext, useState, useEffect } from 'react';
import MemoAPI from './api';

type Memo = {
    id: number;
    content: string;
};

type MemoContextType = {
    memos: Memo[];
    fetchMemos: () => Promise<void>;
    addMemo: (content: string) => Promise<Memo>;
    deleteMemo: (id: number) => Promise<void>;
    searchMemos: (searchTerm: string) => Promise<Memo[]>;
};

const MemoContext = createContext<MemoContextType | undefined>(undefined);

export const useMemos = () => {
    const context = useContext(MemoContext);
    if (!context) {
        throw new Error("useMemos must be used within a MemoProvider");
    }
    return context;
};
type Props={
    children?: React.ReactNode;
};

export const MemoProvider: React.FC<Props> = ({ children }) => {
    const [memos, setMemos] = useState<Memo[]>([]);

    useEffect(() => {
        async function fetchData() {
            const data = await MemoAPI.fetchMemos();
            setMemos(data);
        }
        fetchData();
    }, []);

    const fetchMemos = async () => {
        const data = await MemoAPI.fetchMemos();
        setMemos(data);
    };

    const addMemo = async (content: string) => {
        const newMemo = await MemoAPI.addMemo(content);
        setMemos(prev => [...prev, newMemo]);
        return newMemo;
    };

    const deleteMemo = async (id: number) => {
        await MemoAPI.deleteMemo(id);
        setMemos(prev => prev.filter(memo => memo.id !== id));
    };

    const searchMemos = async (searchTerm: string) => {
        const results = await MemoAPI.searchMemo(searchTerm);
        return results;
    };

    return (
        <MemoContext.Provider value={{ memos, fetchMemos, addMemo, deleteMemo, searchMemos }}>
            {children}
        </MemoContext.Provider>
    );
};
