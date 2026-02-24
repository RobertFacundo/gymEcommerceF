import { Outlet } from 'react-router-dom';

const CheckoutLayout = () => {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <Outlet />
    </div>
  );
};

export default CheckoutLayout;