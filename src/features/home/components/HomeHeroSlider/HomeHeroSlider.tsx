import { useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import HomeHeroSlideItem from './HeroSlide';

import { homeHeroSlides } from '../data/homeHeroSlides';

const HomeHeroSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true },
        [Autoplay({ delay: 4000, stopOnInteraction: false })]
    );

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            setActiveIndex(emblaApi.selectedScrollSnap());
        };

        emblaApi.on('select', onSelect);
        onSelect();

        return () => {
            emblaApi.off('select', onSelect);
        };
    }, [emblaApi]);

    return (
        <section className="w-full h-[75vh] overflow-hidden">
            <div ref={emblaRef} className="h-full">
                <div className="flex h-full">
                    {homeHeroSlides.map(slide => (
                        <HomeHeroSlideItem
                            key={slide.id}
                            slide={slide}
                            activeIndex={activeIndex}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeHeroSlider;
