import { useTranslation } from "react-i18next";
import type { ShoppingHistoryItem } from "../../../shared/types/user";
import ShoppingHistoryItemCard from "./ShoppingHistoryItemCard";

interface Props {
    history: ShoppingHistoryItem[];
}

const ShoppingHistory = ({ history }: Props) => {
    const { t } = useTranslation();

    return (
        <div className="space-y-4 p-5 rounded-xl bg-white/60 dark:bg-black/60 ">
            <h2 className="text-2xl tracking-widest pb-2 border-b border-black/10 dark:border-white/80">
            {t("profile.history.title")}
            </h2>

            {history.length === 0 ? (
                <p className="text-sm text-zinc-500 dark:text-white/70">
                    {t("profile.history.yet")}
                </p>
            ) : (
                history.map(order => (
                    <ShoppingHistoryItemCard
                        key={order.orderId}
                        order={order}
                    />
                ))
            )}
        </div>
    );
};

export default ShoppingHistory;