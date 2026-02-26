import { useEffect } from 'react';
import { useAppDispatch } from '../../../shared/redux/hooks';
import { useMeQuery } from '../../auth/hooks/auth.queries';
import { setAuth } from '../../auth/redux/auth.slice';
import { useTranslation } from 'react-i18next';

const MembershipSuccess = () => {
  const dispatch = useAppDispatch();
  const { data: userData } = useMeQuery();
  const { t } = useTranslation();

  useEffect(() => {
    if (userData) dispatch(setAuth(userData));
  }, [userData, dispatch]);

  return (
    <div className="flex flex-col justify-center items-center m-3 dark:bg-zinc-900/70 bg-white/70 p-6 min-h-110 rounded-xl">
      <h1 className="text-center mt-10 tracking-widest text-4xl font-bold text-green-500">
        {t('membership.successTitle')} 🎉
      </h1>
      <p className="text-center font-sans tracking-wide font-semibold p-5">
        {t('membership.successMessage')}
      </p>
    </div>
  );
};

export default MembershipSuccess;