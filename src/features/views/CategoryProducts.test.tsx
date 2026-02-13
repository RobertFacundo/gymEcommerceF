import { render, screen } from '@testing-library/react';
import CategoryProducts from './CategoryProducts';
import { vi, expect, it, describe } from 'vitest';

vi.mock('react-router-dom', () => ({
    useParams: () => ({
        categorySlug: 'fitness',
    }),
}));

vi.mock('../products/hooks/useProducts', () => ({
    useProductsByCategory: vi.fn(),
}));

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
        div: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
    },
}));

vi.mock('../products/components/Breadcrumb', () => ({
    default: () => <nav>Breadcrumb</nav>,
}));

vi.mock('../products/components/ProductCard', () => ({
    default: ({ name }: { name: string }) => <div>{name}</div>,
}));

import { useProductsByCategory } from '../products/hooks/useProducts';
import { useCategories } from '../products/hooks/useCategories';

const mockProducts = [
    {
        _id: "1",
        name: { en: "Dumbbell", es: "Mancuerna" },
        description: { en: "Heavy dumbbell", es: "Mancuerna pesada" },
        image: "/dumbbell.jpg",
        price: 100,
    },
    {
        _id: "2",
        name: { en: "Barbell", es: "Barra" },
        description: { en: "Olympic bar", es: "Barra olímpica" },
        image: "/barbell.jpg",
        price: 200,
    },
];

const mockCategories = [
    {
        slug: "fitness",
        name: { en: "Fitness", es: "Entrenamiento" },
    },
];


describe('categoryproducts view', () => {
    it('shows loading state', () => {
        (useProductsByCategory as any).mockReturnValue({
            data: undefined,
            isLoading: true,
            error: null,
        });

        (useCategories as any).mockReturnValue({
            data: mockCategories,
        });

        render(<CategoryProducts />)
        expect(screen.getByText(/loading products/i)).toBeInTheDocument();
    });

    it('shows error state', () => {
        (useProductsByCategory as any).mockReturnValue({
            data: undefined,
            isLoading: false,
            error: true,
        });

        (useCategories as any).mockReturnValue({
            data: mockCategories,
        });

        render(<CategoryProducts />);
        expect(screen.getByText(/failed to load products/i)).toBeInTheDocument();
    });

    it('renders products and category breadcrumb correctly', () => {
        (useProductsByCategory as any).mockReturnValue({
            data: mockProducts,
            isLoading: false,
            error: null,
        });

        (useCategories as any).mockReturnValue({
            data: mockCategories,
        });

        render(<CategoryProducts />);

        expect(screen.getByText("Breadcrumb")).toBeInTheDocument();
        expect(screen.getByText("Dumbbell")).toBeInTheDocument();
        expect(screen.getByText("Barbell")).toBeInTheDocument();
    })
})