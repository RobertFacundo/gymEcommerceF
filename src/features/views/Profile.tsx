import { useAppSelector } from "../../shared/redux/hooks";
import ProfileHeader from "../profile/components/ProfileHeader";
import MembershipCard from "../profile/components/MembershipCard";
import ShoppingHistory from "../profile/components/ShoppingHistory";

const Profile = () => {
    const { user } = useAppSelector(state => state.auth);

    console.log(user, 'log del profile')

    if (!user) return null;

    return (
        <section className="max-w-5xl mx-auto px-4 py-11 space-y-13">
            <ProfileHeader user={user} />
            <MembershipCard isMember={user.isMember} />
            <ShoppingHistory history={user.shoppingHistory} />
        </section>
    )
};

export default Profile;