import React, { useState } from 'react';
import Navbar from '../../Navbar/components/Navbar';

const Regex: React.FC = () => {
    const [input, setInput] = useState<string>('');
    const [match, setMatch] = useState<boolean>(false);

    // 正規表現パターンを定義します。この例ではメールアドレスのパターンを使用します。
    const pattern: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value: string = event.target.value;
        setInput(value);
        setMatch(pattern.test(value));
    }

    return (
        <div className="Regex">
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="テキストを入力してください"
            />
            {match ? <p>マッチします！</p> : <p>マッチしません。</p>}
            <Navbar />
        </div>


    );
}

export default Regex;
