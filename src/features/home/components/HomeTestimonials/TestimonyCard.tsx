interface TestimonyCardProps {
    avatar: string;
    name: string;
    country: string;
    age: number;
    rating: number;
    comment: string;
}

const TestimonyCard = ({
    avatar,
    name,
    country,
    age,
    rating,
    comment,
}: TestimonyCardProps) => {
    return (
        <div className="flex flex-col gap-4 p-6 rounded-xl bg-white/40 dark:bg-black/40 backdrop-blur border border-black/10 dark:border-white/10 h-full">
            <div className="flex items-center gap-4">
                <img
                    src={avatar}
                    alt={name}
                    className="w-22 h-22 rounded-full object-cover"
                />

                <div className="flex flex-col">
                    <span className="font-medium">{name}</span>
                    <span className="text-xs opacity-60">
                        {country} · {age} yrs
                    </span>
                </div>
            </div>

            <div className="flex gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={i < rating ? "" : "opacity-30"}>
                        ★
                    </span>
                ))}
            </div>

            <p className="text-sm leading-relaxed opacity-80">
                “{comment}”
            </p>
        </div>
    )
};


export default TestimonyCard;