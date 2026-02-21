export const formatMemberSince = (date: string, locale:string) =>
    new Intl.DateTimeFormat(locale, {
        month: 'long',
        year: 'numeric',
    }).format(new Date(date));