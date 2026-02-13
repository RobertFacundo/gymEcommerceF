import { render, screen } from '@testing-library/react';
import Products from './Products';
import { vi, describe, expect, it } from 'vitest';

vi.mock('../products/hooks/useCategories', () => ({
    useCategories: vi.fn(),
}));

vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        i18n: { language: 'en' },
    }),
}));

vi.mock('framer-motion', () => ({
    motion: {
        div: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
    },
}));

vi.mock('../products/components/CategoryCard', () => ({
    default: ({ name }: { name: string }) => <div>{name}</div>
}));

vi.mock('../products/components/Breadcrumb', () => ({
    default: () => <nav>Breadcrumb</nav>
}));

import { useCategories } from '../products/hooks/useCategories';

const mockCategories = [
    {
        slug: "fitness",
        name: { en: "Fitness", es: "Entrenamiento" },
        description: { en: "Fitness products", es: "Productos fitness" },
        image: "/fitness.jpg",
    },
    {
        slug: "nutrition",
        name: { en: "Nutrition", es: "Nutrición" },
        description: { en: "Nutrition products", es: "Productos nutrición" },
        image: "/nutrition.jpg",
    },
];

describe('products view', () => {
    it('shows loading state', () => {
        (useCategories as any).mockReturnValue({
            data: undefined,
            isLoading: true,
            error: null,
        });

        render(<Products />)
        expect(screen.getByText(/loading categories/i)).toBeInTheDocument();
    });

    it('shows error state', () => {
        (useCategories as any).mockReturnValue({
            data: undefined,
            isLoading: false,
            error: true,
        });

        render(<Products />)
        expect(screen.getByText(/failed to load categories/i)).toBeInTheDocument();
    });

    it('renders categories correctly', () => {
        (useCategories as any).mockReturnValue({
            data: mockCategories,
            isLoading: false,
            error: null,
        });

        render(<Products />)
        expect(screen.getByText("Breadcrumb")).toBeInTheDocument();
        expect(screen.getByText('Fitness')).toBeInTheDocument();
        expect(screen.getByText("Nutrition")).toBeInTheDocument();
    })
})