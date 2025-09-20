import NotFoundUI from '@/components/common/not-found-ui';

export default function NotFound() {
  return (
    <NotFoundUI
      title="Content Not Found"
      description="Oops! This page seems to have vanished into the digital void. Don't worry, we have plenty of amazing content waiting for you!"
      showBackButton={true}
      showHomeButton={true}
      showSearchButton={true}
    />
  );
}
