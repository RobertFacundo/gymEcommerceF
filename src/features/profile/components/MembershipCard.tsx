import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface Props {
    isMember: boolean;
}

const MembershipCard = ({ isMember }: Props) => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <div className="rounded-xl p-6 bg-white/60 dark:bg-black/60 ">
            <h2 className="text-xl tracking-widest mb-2">
                {t('profile.membershipCard.membership')}
            </h2>

            <p className="mb-4 text-sm font-sans tracking-wide dark:text-white/80">
                {isMember
                    ? t("profile.membershipCard.active")
                    : t("profile.membershipCard.become")}
            </p>

            {!isMember && (
                <button
                    onClick={() => navigate("/membership")}
                    className="px-5 py-2 rounded-lg bg-zinc-700 text-white hover:bg-zinc-800 transition cursor-pointer font-sans tracking-wide"
                >
                    {t("profile.membershipCard.CTA")}
                </button>
            )}
        </div>
    );
};

export default MembershipCard;