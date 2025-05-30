import { Outlet } from 'react-router-dom';
import MainHeader from '../components/MainHeader';
import MainFooter from '../components/MainFooter';
import { useMemo } from 'react';
import RoutePaths from '@/routes/routePaths';

const hiddenMainFooterRoutes = [
  RoutePaths.AccountProfile,
  RoutePaths.AccountSettings,
  RoutePaths.AccountChangePassword,
  RoutePaths.MyDocuments,
  RoutePaths.MyDownloadDocuments,
  RoutePaths.UploadDocument,
  RoutePaths.MyPendingDocuments,
  RoutePaths.MySavedDocuments,
  RoutePaths.AccountHistoryTransaction,
];

const MainLayout = () => {
  const isHiddenMainFooter = useMemo(() => {
    return hiddenMainFooterRoutes.includes(
      window.location.pathname as (typeof hiddenMainFooterRoutes)[number],
    );
  }, []);
  console.log(window.location.pathname);
  console.log(isHiddenMainFooter);
  console.log(hiddenMainFooterRoutes);
  return (
    <div className='flex flex-col h-screen'>
      <MainHeader />
      <div className='h-[calc(100vh - 64px)] overflow-y-auto [&::-webkit-scrollbar]:w-[3px] [&::-webkit-scrollbar-thumb]:bg-gray-500 [&::-webkit-scrollbar-thumb]:rounded-lg [&::-webkit-scrollbar-track]:bg-gray-200 p-2'>
        <div>
          <Outlet />
        </div>
        {!isHiddenMainFooter && <MainFooter />}
      </div>
    </div>
  );
};

export default MainLayout;
