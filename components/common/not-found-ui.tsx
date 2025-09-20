'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { 
  Home, 
  Search, 
  ArrowLeft, 
  Film, 
  Tv, 
  Music,
  AlertCircle,
  RefreshCw
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface NotFoundUIProps {
  title?: string;
  description?: string;
  showBackButton?: boolean;
  showHomeButton?: boolean;
  showSearchButton?: boolean;
  className?: string;
}

const NotFoundUI: React.FC<NotFoundUIProps> = ({
  title = "Page Not Found",
  description = "The page you're looking for doesn't exist or has been moved.",
  showBackButton = true,
  showHomeButton = true,
  showSearchButton = true,
  className
}) => {
  const handleGoBack = () => {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  };

  return (
    <div className={cn(
      "min-h-screen flex items-center justify-center bg-background px-4 py-8",
      className
    )}>
      <div className="w-full max-w-2xl mx-auto">
        <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-2xl">
          <CardHeader className="text-center space-y-6 pb-8">
            {/* 404 Icon with Animation */}
            <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="relative flex items-center justify-center w-full h-full">
                <AlertCircle className="w-16 h-16 md:w-20 md:h-20 text-primary-500 animate-bounce" />
              </div>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                404
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground/90">
                {title}
              </h2>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-base md:text-lg max-w-md mx-auto leading-relaxed">
              {description}
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {showBackButton && (
                <Button
                  onClick={handleGoBack}
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2 hover:bg-accent/50 transition-all duration-200"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Go Back
                </Button>
              )}
              
              {showHomeButton && (
                <Button
                  asChild
                  size="lg"
                  className="bg-primary-500 hover:bg-primary-600 text-primary-foreground transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Link href="/" className="flex items-center gap-2">
                    <Home className="w-4 h-4" />
                    Go Home
                  </Link>
                </Button>
              )}
              
              {showSearchButton && (
                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="hover:bg-accent/50 transition-all duration-200"
                >
                  <Link href="/discover" className="flex items-center gap-2">
                    <Search className="w-4 h-4" />
                    Discover
                  </Link>
                </Button>
              )}
            </div>

            {/* Quick Links */}
            <div className="pt-6 border-t border-border/50">
              <p className="text-sm text-muted-foreground text-center mb-4">
                Or explore our content:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="flex flex-col items-center gap-2 h-auto py-4 hover:bg-accent/30 transition-all duration-200"
                >
                  <Link href="/discover">
                    <Film className="w-5 h-5 text-primary-500" />
                    <span className="text-xs">Movies</span>
                  </Link>
                </Button>
                
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="flex flex-col items-center gap-2 h-auto py-4 hover:bg-accent/30 transition-all duration-200"
                >
                  <Link href="/discover">
                    <Tv className="w-5 h-5 text-primary-500" />
                    <span className="text-xs">TV Shows</span>
                  </Link>
                </Button>
                
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="flex flex-col items-center gap-2 h-auto py-4 hover:bg-accent/30 transition-all duration-200"
                >
                  <Link href="/discover">
                    <Music className="w-5 h-5 text-primary-500" />
                    <span className="text-xs">Music</span>
                  </Link>
                </Button>
                
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="flex flex-col items-center gap-2 h-auto py-4 hover:bg-accent/30 transition-all duration-200"
                >
                  <Link href="/discover">
                    <RefreshCw className="w-5 h-5 text-primary-500" />
                    <span className="text-xs">Refresh</span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Help Text */}
            <div className="text-center pt-4">
              <p className="text-xs text-muted-foreground">
                If you believe this is an error, please{' '}
                <Button
                  asChild
                  variant="link"
                  size="sm"
                  className="p-0 h-auto text-primary-500 hover:text-primary-600"
                >
                  <Link href="/contact">contact support</Link>
                </Button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFoundUI;
