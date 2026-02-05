import { screen, fireEvent } from '@testing-library/react';
import Auth from './Auth';
import { vi, describe, it, expect } from 'vitest';
import { renderWithQueryClient } from '../../shared/app/test-utils';

vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => vi.fn(),
    };
});

vi.mock('../../shared/redux/hooks', async () => {
    const actual = await vi.importActual<
        typeof import('../../shared/redux/hooks')
    >('../../shared/redux/hooks');

    return {
        ...actual,
        useAppSelector: () => ({ isAuthenticated: false }),
        useAppDispatch: () => vi.fn(),
    };
});

vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
        i18n: { changeLanguage: vi.fn() },
    }),
}));

describe('Auth view', () => {
    it('renders login view by default', () => {
        renderWithQueryClient(<Auth />);

        expect(screen.getByRole('heading', { name: /welcome/i })).toBeInTheDocument()
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
        expect(screen.queryByLabelText(/name/i)).not.toBeInTheDocument();
    });

    it('shows name input when toggling to register', () => {
        renderWithQueryClient(<Auth />);

        fireEvent.click(
            screen.getByRole('button', { name: /registrate|register/i })
        );

        expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    })
})