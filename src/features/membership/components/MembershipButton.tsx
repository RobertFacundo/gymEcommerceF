import { useCreateMembershipSession } from "../hook/useMembership";
import { useAppSelector } from '../../../shared/redux/hooks';

const MembershipButton = () => {
  const { user } = useAppSelector(state => state.auth);
  const mutation = useCreateMembershipSession();

  const handleMembership = async () => {
    if (!user) return;

    const session = await mutation.mutateAsync({
      userId: user._id,
      priceId: 'price_1T4jIjJLg00lT3W58DiUCeci', // tu precio en Stripe
      successUrl: 'https://gym-ecommerce-f.vercel.app/membership/success',
      cancelUrl: 'https://gym-ecommerce-f.vercel.app/membership/cancel'
    });

    console.log(session, 'log del membership button')

    window.location.href = session.url; // redirige a Stripe
  };

  return (
    <button onClick={handleMembership} className="btn-primary">
      Activar Membresía
    </button>
  );
};

export default MembershipButton;