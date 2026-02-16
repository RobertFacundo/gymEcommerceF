export interface HomeHeroSlide {
    id: string;
    image: string;
    titleKey: string;
    subtitleKey: string;
    ctaTextKey?: string;
    ctaLink?: string;
}

export const homeHeroSlides: HomeHeroSlide[] = [
    {
        id: '1',
        image: '/images/hero/gym-equipment.jpg',
        titleKey: 'home.hero.freeShipping.title',
        subtitleKey: 'home.hero.freeShipping.subtitle',
        ctaTextKey: 'home.hero.freeShipping.cta',
        ctaLink: '/products',
    },
    {
        id: '2',
        image: '/images/hero/free-shipping.jpg',
        titleKey: 'home.hero.equipGym.title',
        subtitleKey: 'home.hero.equipGym.subtitle',
        ctaTextKey: 'home.hero.equipGym.cta',
        ctaLink: '/products',
    },
    {
        id: '3',
        image: '/images/hero/fitness.jpg',
        titleKey: 'home.hero.trainBetter.title',
        subtitleKey: 'home.hero.trainBetter.subtitle',
    },
];
