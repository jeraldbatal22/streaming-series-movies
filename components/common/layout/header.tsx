'use client';

import Link from 'next/link';
import { BellIcon, FilterIcon, MenuIcon, SearchIcon, X } from 'lucide-react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Fragment, useState } from 'react';
import { useRouter } from 'next/navigation';

interface I_HEADER_MENU {
  to: string;
  title: string;
  name: string;
  subMenu?: {
    to: string;
    title: string;
    name: string;
  }[];
}

const headerMuneList: I_HEADER_MENU[] = [
  {
    to: '/discover',
    title: 'All',
    name: 'all',
  },
  // {
  //   to: "/discover",
  //   title: "Series",
  //   name: "series",
  // },
  // {
  //   to: "/discover",
  //   title: "Movies",
  //   name: "movies",
  // },
  // {
  //   title: "Genres",
  //   name: "genres",
  //   subMenu: [
  //     {
  //       to: "/movies",
  //       title: "Movies",
  //     },
  //   ],
  // },
];

const Header = () => {
  const pathname =
    typeof window !== 'undefined' ? window.location.pathname : '';
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState(pathname);
  const [isShowMenuMobile, setIsShowMenuMobile] = useState(false);

  const handleNavigateMenu = (selectedMenu: I_HEADER_MENU) => {
    setActiveMenu(selectedMenu.to);
    router.push(selectedMenu.to);
  };

  return (
    <div
      className={cn(
        'relative flex w-full max-w-full items-center justify-between space-x-1 px-0 py-2 md:px-4',
        isShowMenuMobile && 'pb-10'
      )}
    >
      <SidebarTrigger className="static text-white md:hidden" />
      {/* Desktop Navigation */}
      <div
        className={cn(
          'top-15 right-0 left-0',
          `${isShowMenuMobile ? 'absolute md:static' : 'hidden md:block'}`
        )}
      >
        <NavigationMenu viewport={false}>
          <NavigationMenuList className="text-white">
            {headerMuneList.map((menu) => {
              return (
                <Fragment key={menu.title}>
                  <NavigationMenuItem>
                    {menu?.subMenu ? (
                      <>
                        <NavigationMenuTrigger>
                          <Label className="text-sm md:text-[1.2rem]">
                            {menu.title}
                          </Label>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[300px] gap-4">
                            <li>
                              <NavigationMenuLink asChild>
                                <Link href="#">
                                  <div className="font-medium">Components</div>
                                  <div className="text-muted-foreground">
                                    Browse all components in the library.
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link href="#">
                                  <div className="font-medium">
                                    Documentation
                                  </div>
                                  <div className="text-muted-foreground">
                                    Learn how to use the library.
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                              <NavigationMenuLink asChild>
                                <Link href="#">
                                  <div className="font-medium">Blog</div>
                                  <div className="text-muted-foreground">
                                    Read our latest blog posts.
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink
                        asChild
                        className={cn(
                          navigationMenuTriggerStyle(),
                          'focus:text-primary-500 hover:text-primary-500 bg-transparent group-data-[state=open]:bg-red-500 hover:bg-transparent focus:bg-transparent group-data-[state=open]:focus:bg-red-500'
                        )}
                      >
                        <Link
                          href=""
                          className={cn(
                            activeMenu === menu.to &&
                              'border-primary-500 rounded-none border-b-1',
                            'text-sm md:text-[1.2rem]'
                            // "border-b-1 border-primary-500 rounded-none"
                          )}
                          onClick={() =>
                            handleNavigateMenu(menu as I_HEADER_MENU)
                          }
                        >
                          {menu.title}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                </Fragment>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Right side - Search, Notifications, Avatar */}
      <div className="flex items-center md:gap-2 lg:gap-4">
        {/* Search Bar - Hidden on mobile, visible on tablet+ */}
        <div className="flex h-11 w-auto items-center justify-between rounded-md bg-[#111111] px-4 text-gray-100 lg:min-w-[300px]">
          <SearchIcon className="h-4 w-4" />
          <Input
            type="text"
            className="mx-2 flex-1 border-0 bg-[#111111] outline-none placeholder:text-xs focus-visible:ring-0"
            placeholder="Search the series, movies..."
          />
          <FilterIcon className="h-4 w-4" />
        </div>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="text-white">
          <BellIcon className="h-5 w-5" />
        </Button>

        {/* Avatar */}
        <Avatar className="h-8 w-8 lg:h-10 lg:w-10">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Button
          className="static !pr-0 md:hidden"
          onClick={() => setIsShowMenuMobile(!isShowMenuMobile)}
        >
          {isShowMenuMobile ? <X /> : <MenuIcon />}
        </Button>
      </div>
    </div>
  );
};

export default Header;
