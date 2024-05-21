beforeAll(() => {
    window.matchMedia = jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    }));
});

import ColorSchemeToggle from '@/components/layout/header/color_scheme_toggle/ColorSchemeToggle';
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"
import { render, screen, fireEvent, renderHook } from '@testing-library/react';

describe('ColorSchemeToggle', () => {

    it('should render the ColorSchemeToggle', () => {
        render(<ColorSchemeToggle />);

        expect(screen.getByRole('button', {name: 'Toggle theme'})).toBeInTheDocument();
        expect(screen.getByTestId('SunIcon')).toBeInTheDocument();
        expect(screen.getByTestId('MoonIcon')).toBeInTheDocument();
    });

    it('should change the theme onClick', () => {
        render(<ColorSchemeToggle />);

        const wrapper = ({ children }: { children: React.ReactNode }) =>
            <NextThemesProvider defaultTheme="light">{ children }</NextThemesProvider>

        let view = renderHook(useTheme, { wrapper });
        expect(view.result.current.systemTheme).toBe('light');

        fireEvent.click(screen.getByRole('button', {name: 'Toggle theme'}));
        fireEvent.click(screen.getByRole('button', { name: 'Dark' }));

        view = renderHook(useTheme, { wrapper });
        expect(view.result.current.systemTheme).toBe('dark');

        fireEvent.click(screen.getByRole('button', {name: 'Toggle theme'}));
        fireEvent.click(screen.getByRole('button', { name: 'Light' }));

        view = renderHook(useTheme, { wrapper });
        expect(view.result.current.systemTheme).toBe('light');
    });
});