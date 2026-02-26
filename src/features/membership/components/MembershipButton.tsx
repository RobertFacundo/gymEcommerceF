import { useCreateMembershipSession } from "../hook/useMembership";
import { useAppSelector } from '../../../shared/redux/hooks';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const MembershipButton = () => {
  const { user } = useAppSelector(state => state.auth);
  const mutation = useCreateMembershipSession();
  const { t } = useTranslation();

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
    <div className="space-y-3">
      {!user && (
        <p className="text-red-500 font-sans tracking-wide">{t('membership.loginRequired')}{" "}
          <Link
            to="/auth"
            className="underline font-semibold hover:text-blue-600"
          >
            {t('membership.loginLink')}
          </Link>
        </p>
      )}
      <button
        onClick={handleMembership}
        disabled={!user}
        className="bg-white dark:bg-zinc-900 dark:text-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition font-sans tracking-wide disabled:opacity-50 cursor-not-allowed"
      >
        {t('membership.activateButton')}
      </button>
    </div>
  );
};

export default MembershipButton;