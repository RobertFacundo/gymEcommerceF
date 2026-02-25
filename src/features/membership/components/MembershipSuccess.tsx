import { useEffect } from 'react';
import { useAppDispatch } from '../../../shared/redux/hooks';
import { useMeQuery } from '../../auth/hooks/auth.queries';
import { setAuth } from '../../auth/redux/auth.slice';

const MembershipSuccess = () => {
  const dispatch = useAppDispatch();
  const { data: userData } = useMeQuery();

  useEffect(() => {
    if (userData) dispatch(setAuth(userData));
  }, [userData, dispatch]);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Membresía activada 🎉</h1>
      <p>Ahora eres miembro activo.</p>
    </div>
  );
};

export default MembershipSuccess;