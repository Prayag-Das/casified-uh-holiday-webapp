import ColorSchemeToggle from '@/components/layout/header/color_scheme_toggle/ColorSchemeToggle';
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"
import { render, renderHook, screen, fireEvent } from '@testing-library/react';

describe('ColorSchemeToggle', () => {

    it('should render the ColorSchemeToggle', () => {
        render(<ColorSchemeToggle />);

        expect(screen.getByRole('button', {name: 'Toggle theme'})).toBeInTheDocument();
        expect(screen.getByTestId('SunIcon')).toHaveClass('SunIcon');
        expect(screen.getByTestId('MoonIcon')).toHaveClass('MoonIcon');
    });

    it('should change the theme onClick', () => {
        render(<ColorSchemeToggle />);

        const wrapper = ({ children }: { children: React.ReactNode }) =>
            <NextThemesProvider defaultTheme="light">{ children }</NextThemesProvider>

        let view = renderHook(useTheme, { wrapper });
        expect(view.result.current).toBe('light');

        fireEvent.click(screen.getByRole('button', {name: 'Toggle theme'}));
        fireEvent.click(screen.getByRole('option', { name: 'Dark' }));

        view = renderHook(useTheme, { wrapper });
        expect(view.result.current).toBe('dark');

        fireEvent.click(screen.getByRole('button', {name: 'Toggle theme'}));
        fireEvent.click(screen.getByRole('option', { name: 'Light' }));

        view = renderHook(useTheme, { wrapper });
        expect(view.result.current).toBe('light');
    });
});