import React from 'react';
import AppSidebar from './sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import Header from './header';

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="h-dvh w-full overflow-y-auto bg-gray-900 p-2 sm:p-4 md:p-5">
        <Header />
        <section className="h-full px-0 py-2 sm:py-3 md:px-5 md:py-5">
          {children}
        </section>
      </main>
    </SidebarProvider>
  );
};

export default MainLayout;
