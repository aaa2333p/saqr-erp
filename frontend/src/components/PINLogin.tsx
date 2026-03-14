import React, { useState } from 'react';

const PINLogin = () => {
    const [pin, setPin] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length <= 4) {
            setPin(e.target.value);
            setError('');
        } else {
            setError('PIN must be 4 digits.');
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (pin === '6357') {
            alert('PIN is correct!');
            // Proceed with login
        } else {
            setError('Invalid PIN. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter PIN:
                <input
                    type="password"
                    value={pin}
                    onChange={handleChange}
                    maxLength={4}
                    required
                />
            </label>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Login</button>
        </form>
    );
};

export default PINLogin;