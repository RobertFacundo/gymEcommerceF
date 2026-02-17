
export interface HomeHighlight {
  id: string;
  icon: 'shipping' | 'secure' | 'quality' | 'support';
  titleKey: string;
  subtitleKey: string;
}

export const homeHighlights: HomeHighlight[] = [
  {
    id: 'shipping',
    icon: 'shipping',
    titleKey: 'home.highlights.shipping.title',
    subtitleKey: 'home.highlights.shipping.subtitle',
  },
  {
    id: 'secure',
    icon: 'secure',
    titleKey: 'home.highlights.secure.title',
    subtitleKey: 'home.highlights.secure.subtitle',
  },
  {
    id: 'quality',
    icon: 'quality',
    titleKey: 'home.highlights.quality.title',
    subtitleKey: 'home.highlights.quality.subtitle',
  },
  {
    id: 'support',
    icon: 'support',
    titleKey: 'home.highlights.support.title',
    subtitleKey: 'home.highlights.support.subtitle',
  },
];
