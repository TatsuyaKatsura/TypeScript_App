class MemoAPI {
    static API_BASE_URL = 'http://localhost:8080/api/memos/';

    static async fetchMemos() {
        try {
            const response = await fetch(this.API_BASE_URL);
            
            const data = await response.json();
            return data;
        }
        catch {
            throw new Error('メモの取得に失敗しました');
        }
    }


    static async addMemo(content: string) {
        try {
            const response = await fetch(this.API_BASE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ content })
            });
            const newMemo = await response.json();
            return newMemo;
        }
        catch {
            throw new Error('メモの追加に失敗しました');
        }
    }

    static async deleteMemo(id: number) {
        try {
    
            await fetch(`${this.API_BASE_URL}${id}/`, {
                method: 'DELETE'
            });
            
        }
        catch {
            throw new Error('メモの削除に失敗しました');
        }

    }
    static async searchMemo(searchTerm: string) {
        try {
            const response = await fetch(`${this.API_BASE_URL}?search=${searchTerm}`);
            return await response.json();
        }
        catch {
            throw new Error('メモの検索に失敗しました');
        }
    }

}

export default MemoAPI;