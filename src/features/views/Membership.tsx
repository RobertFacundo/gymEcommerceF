import HomeCTAMembership from "../home/components/HomeCTAMembership/HomeCTAMembership";
import MembershipButton from "../membership/components/MembershipButton";

const Membership = () => {
    return (
        <div className="max-w-7xl mx-auto p-6 space-y-6">
            <HomeCTAMembership />
            <MembershipButton />
        </div>
    )
};

export default Membership;