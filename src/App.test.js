// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PayFlow title', () => {
    render(<App />);
    const titleElement = screen.getByText(/PayFlow/i);
    expect(titleElement).toBeInTheDocument();
});
