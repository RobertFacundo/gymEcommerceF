import { useTranslation } from "react-i18next";
import type { User } from "../../../shared/types/user";
import { formatMemberSince } from "../utils/formatDate";

interface Props {
    user: User;
}

const ProfileHeader = ({ user }: Props) => {
    const { t, i18n } = useTranslation();

    return (
        <div className=" flex flex-row rounded-xl p-6 bg-white/60 dark:bg-black/60  backdrop-blur ">
            <div>
                <h1 className="text-3xl tracking-widest mb-2">
                    {user.name}
                </h1>
                <p className="text-sm text-zinc-500 dark:text-white/80">
                    {t("profile.header.user")}{" "} {formatMemberSince(user.createdAt, i18n.language)}
                </p>
            </div>
        </div>
    );
};

export default ProfileHeader;