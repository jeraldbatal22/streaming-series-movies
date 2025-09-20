'use client';

import { Button } from '@/components/ui/button';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import {
  MapPin,
  Bookmark,
  FileText,
  Users,
  Phone,
  HelpCircle,
  Settings,
  Crown,
  ChevronRight,
  MenuIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const menuItems = [
  { title: 'Discover', url: '/discover', icon: MapPin, active: true },
  { title: 'Watchlist', url: '/watchlist', icon: Bookmark, active: false },
  { title: 'Blog', url: '/blog', icon: FileText, active: false },
  { title: 'Artists', url: '/artists', icon: Users, active: false },
];

const supportItems = [
  { title: 'Contact Us', url: '/contact', icon: Phone },
  { title: 'Help Center', url: '/help', icon: HelpCircle },
  { title: 'Setting', url: '/settings', icon: Settings },
];

const AppSidebar = () => {
  const pathname =
    typeof window !== 'undefined' ? window.location.pathname : '';
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState(pathname);
  const { toggleSidebar, open } = useSidebar();

  const handleNavigateMenu = (selectedMenu: any) => {
    setActiveMenu(selectedMenu.to);
    router.push(selectedMenu.to);
  };

  return (
    <Sidebar
      collapsible="icon"
      className="relative border-r border-gray-600 bg-gray-900 text-white group-data-[collapsible=icon]:w-[70px]"
      side="left"
    >
      {/* Collapse Button */}
      {open && (
        <div className="absolute top-24 -right-0 z-50">
          <Button
            onClick={toggleSidebar}
            variant="ghost"
            size="sm"
            className="h-12 w-12 rounded-l-full border border-r-0 border-gray-600 bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <ChevronRight
              className={cn(
                '!h-6 !w-6 transition-transform',
                open && 'rotate-180'
              )}
            />
          </Button>
        </div>
      )}

      <SidebarHeader
        className={cn('flex items-center justify-center pt-8', open && 'pb-6')}
      >
        {open ? (
          <div className="flex items-center gap-2">
            {/* T.Movie Logo */}
            <Image
              src="/assets/icons/logo.png"
              alt="logo"
              width={134}
              height={65}
            />
          </div>
        ) : (
          <Button
            onClick={toggleSidebar}
            variant="ghost"
            className="hover:text-primary-500 hover:bg-transparent"
          >
            <MenuIcon className="!h-6 !w-6" />
          </Button>
          // <SidebarTrigger className="!w-32" />
        )}
      </SidebarHeader>
      <SidebarContent className="pt-8">
        {/* Menu Section */}
        <SidebarGroup className="space-y-4 p-0 py-2">
          {open && (
            <SidebarGroupLabel className="px-6 text-[1rem] font-medium text-gray-400">
              Menu
            </SidebarGroupLabel>
          )}
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2 px-0">
              {menuItems.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className={cn('flex items-center justify-center')}
                >
                  <SidebarMenuButton
                    asChild
                    className="group-data-[collapsible=icon]:!pl-0 hover:group-data-[collapsible=icon]:!bg-transparent"
                  >
                    <Link
                      href=""
                      onClick={() => handleNavigateMenu(item)}
                      className={cn(
                        'hover:text-primary-500 gap-3 px-5 py-2 text-[1.2rem] transition-colors',
                        activeMenu === item.url
                          ? 'text-primary-500'
                          : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                      )}
                    >
                      {activeMenu === item.url && open && (
                        <div className="bg-primary-500 absolute top-0 bottom-0 left-0 w-2 rounded-r-full" />
                      )}
                      <item.icon
                        className={cn(
                          'hover:text-primary-500 !h-6 !w-6',
                          activeMenu === item.url
                            ? 'text-primary-500'
                            : 'text-gray-400'
                        )}
                      />
                      <span
                        className={cn(
                          'hover:text-primary-500',
                          'font-medium',
                          'group-data-[collapsible=icon]:hidden'
                        )}
                      >
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Support Section */}
        <div className="mt-8">
          <div className="border-t border-gray-600 pt-4">
            <SidebarMenu className="space-y-2">
              {supportItems.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className="flex items-center justify-center"
                >
                  <SidebarMenuButton
                    asChild
                    className="group-data-[collapsible=icon]:!pl-0 hover:group-data-[collapsible=icon]:!bg-transparent"
                  >
                    <Link
                      href={item.url}
                      className="flex items-center gap-3 rounded-lg px-5 py-2 text-[1.2rem] text-gray-300 transition-colors hover:bg-gray-700/50 hover:text-white"
                    >
                      <item.icon
                        className={cn(
                          'hover:text-primary-500 !h-6 !w-6 text-gray-400'
                        )}
                      />
                      <span className="font-medium group-data-[collapsible=icon]:hidden">
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </div>
        </div>
      </SidebarContent>
      <SidebarFooter className="p-4">
        {/* Call to Action Section */}
        {open ? (
          <div className="rounded-lg border border-gray-600 bg-gray-800/50 p-4">
            <p className="mb-3 text-center text-sm text-gray-300 group-data-[collapsible=icon]:hidden">
              Click the button below to see the plans
            </p>
            <Button
              className="bg-primary-500 hover:bg-primary-500 flex w-full items-center gap-2 rounded-lg font-medium text-black"
              size="sm"
            >
              <Crown className="h-4 w-4" />
              <span className="group-data-[collapsible=icon]:hidden">
                see plans
              </span>
            </Button>
          </div>
        ) : (
          <Button
            className="bg-primary-500 hover:bg-primary-500 flex w-full items-center gap-2 rounded-lg font-medium text-black"
            size="sm"
          >
            <Crown className="h-4 w-4" />
          </Button>
        )}
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
