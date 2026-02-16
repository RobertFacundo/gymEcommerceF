import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { heroContainer, heroTitle, heroSubtitle, heroCTA } from '../../../../shared/animations/animations';
import { useTranslation } from 'react-i18next';
import type { HomeHeroSlide } from '../data/homeHeroSlides';

interface Props {
  slide: HomeHeroSlide;
  activeIndex: number;
}

const HomeHeroSlideItem = ({ slide, activeIndex }: Props) => {
  const { t } = useTranslation();

  return (
    <div className="flex-[0_0_100%] h-full relative">
      {/* Background */}
      <div
        className="h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${slide.image})` }}
      />

      {/* Overlay */}
      <motion.div
        key={activeIndex}
        variants={heroContainer}
        initial="initial"
        animate="animate"
        className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6"
      >
        <motion.h2
          variants={heroTitle}
          className="text-3xl md:text-5xl text-white mb-4 tracking-widest"
        >
          {t(slide.titleKey)}
        </motion.h2>

        <motion.p
          variants={heroSubtitle}
          className="text-lg md:text-xl text-white/80 max-w-xl mb-6 tracking-wide font-sans"
        >
          {t(slide.subtitleKey)}
        </motion.p>

        {slide.ctaTextKey && slide.ctaLink && (
          <motion.div variants={heroCTA}>
            <Link
              to={slide.ctaLink}
              className="bg-white dark:bg-zinc-900 dark:text-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition font-sans tracking-wide"
            >
              {t(slide.ctaTextKey)}
            </Link>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default HomeHeroSlideItem;
