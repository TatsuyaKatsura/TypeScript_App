import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        
        <nav>
            <h1>リンク</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/memo">Memo</Link>
                </li>
                {/* 他のリンクをこちらに追加できます */}
            </ul>
        </nav>
    );
}

export default Navbar;
