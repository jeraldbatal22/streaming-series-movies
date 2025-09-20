import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { HeartIcon, Star } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState, useCallback, useMemo } from 'react';

interface CardCoverPropTypes {
  coverImageUrl: string;
  title: string;
  genres: string[];
  description?: string;
  rating?: number;
  isFavorite?: boolean;
  onFavoriteToggle?: () => void;
  onClick?: () => void;
  className?: string;
  id: string;
}

const CardCover = React.memo<CardCoverPropTypes>(
  ({
    id,
    coverImageUrl,
    title,
    genres,
    description = 'Construction worker Mike is thrust into the world of espionage when his high school sweetheart, Roxanne, recruits him for a high-stakes intelligence mission.',
    rating = 6.1,
    isFavorite = false,
    onFavoriteToggle,
    onClick,
    className,
  }) => {
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter();
    // Memoize computed values
    const displayDescription = useMemo(() => {
      if (!description) return '';
      // Shorter description for better mobile readability
      const isTruncated = description.length > 70;
      return isTruncated ? description.slice(0, 70) + '...' : description;
    }, [description]);

    const handleMouseEnter = useCallback(() => {
      setIsHovered(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
      setIsHovered(false);
    }, []);

    const handleTouchStart = useCallback(() => {
      setIsHovered(true);
    }, []);

    const handleTouchEnd = useCallback(() => {
      // Delay hiding hover state on mobile to allow for better UX
      setTimeout(() => setIsHovered(false), 2000);
    }, []);

    const handleCardClick = useCallback(() => {
      if (onClick) {
        return onClick?.();
      } else {
        router.push(`/movies/${id}`);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onClick, id]);

    const handleFavoriteClick = useCallback(
      (e: React.MouseEvent) => {
        e.stopPropagation();
        onFavoriteToggle?.();
      },
      [onFavoriteToggle]
    );

    return (
      <div
        className={cn(
          'group relative h-52 cursor-pointer rounded-md border-10 border-gray-800 transition-all duration-300 ease-in-out sm:h-48 lg:h-[246px]',
          'hover:scale-[1.02] hover:shadow-lg hover:shadow-black/20',
          'focus-within:ring-primary-500 focus-within:ring-2 focus-within:ring-offset-2',
          'touch-manipulation active:scale-[0.98]', // Better mobile touch feedback
          className
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={handleCardClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleCardClick();
          }
        }}
        aria-label={`View details for ${title}`}
      >
        {/* Rating Badge */}
        <div className="absolute top-1.5 left-1.5 z-10 flex items-center gap-0.5 rounded-md bg-gray-800 px-1.5 py-0.5 backdrop-blur-sm sm:top-2 sm:left-2 sm:gap-1 sm:px-2 sm:py-1">
          <Star
            className="h-2.5 w-2.5 text-yellow-400 sm:h-3 sm:w-3"
            fill="currentColor"
          />
          <Label className="text-[10px] font-medium text-white sm:text-xs">
            {rating}
          </Label>
          <Label className="text-[10px] text-gray-400 sm:text-xs">/10</Label>
        </div>

        {/* Favorite Button */}
        <Button
          className={cn(
            'absolute top-0 right-0 z-10 !rounded-none !rounded-bl-md bg-gray-800 !p-0 !pl-1 !backdrop-blur-sm sm:!pl-1.5',
            'transition-colors duration-200 hover:bg-gray-800',
            'focus:ring-primary-500 focus:ring-2 focus:ring-offset-1 focus:outline-none',
            'min-h-[32px] sm:min-h-[36px]' // Ensure minimum touch target size
          )}
          onClick={handleFavoriteClick}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <HeartIcon
            className={cn(
              '!h-5 !w-5 rounded-md bg-gray-700 p-0.5 transition-colors duration-200 sm:!h-6 sm:!w-6 sm:p-1',
              isFavorite
                ? 'text-primary-500 fill-current'
                : 'hover:text-primary-500 text-gray-400'
            )}
          />
        </Button>

        {/* Background Image */}
        <div className="relative h-full w-full overflow-hidden rounded-lg">
          <Image
            src={coverImageUrl}
            alt={`${title} cover image`}
            fill
            className={cn(
              'object-cover transition-all duration-300 ease-in-out',
              isHovered && 'scale-105 blur-[1px]'
            )}
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
            priority={false}
          />

          {/* Overlay for better text readability */}
          {isHovered && <div className="absolute inset-0 backdrop-blur-sm" />}
        </div>

        {/* Card Content */}
        <Card className="absolute inset-0 !flex flex-col justify-evenly rounded-lg border-0 bg-transparent py-0 shadow-none">
          <CardHeader className="flex-1"></CardHeader>
          {/* Hover Description */}
          {isHovered && (
            <CardContent className="z-10 flex flex-1 items-center justify-center p-0">
              <div className="text-center">
                <Label className="cursor-pointer px-1 text-[10px] leading-relaxed text-white sm:px-2 sm:text-xs">
                  {displayDescription}
                </Label>
              </div>
            </CardContent>
          )}

          {/* Footer with Title and Genres */}
          <CardFooter className="z-10 p-2 backdrop-blur-sm sm:p-3">
            <div className="w-full space-y-0.5 text-center sm:space-y-1">
              <Label className="line-clamp-1 block cursor-pointer text-xs font-semibold text-white sm:text-sm">
                {title}
              </Label>
              <Label className="line-clamp-1 block cursor-pointer text-[10px] text-gray-300 sm:text-xs">
                {genres.map((genre, idx) => (
                  <span key={genre}>
                    {genre}
                    {idx < genres.length - 1 && ', '}
                  </span>
                ))}
              </Label>
            </div>
          </CardFooter>
        </Card>
      </div>
    );
  }
);

CardCover.displayName = 'CardCover';

export default CardCover;
