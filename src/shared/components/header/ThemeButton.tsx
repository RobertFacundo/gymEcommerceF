const IconButton = ({ onClick, children, label }: any) => (
    <button
        onClick={onClick}
        aria-label={label}
        className="p-2 rounded hover:bg-gray-100/60 dark:hover:bg-zinc-800/60"
    >
        {children}
    </button>
);

export default IconButton;