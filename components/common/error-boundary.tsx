'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error; reset: () => void }>;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  reset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return <FallbackComponent error={this.state.error!} reset={this.reset} />;
    }

    return this.props.children;
  }
}

const DefaultErrorFallback: React.FC<{ error: Error; reset: () => void }> = ({ error, reset }) => {
  return (
    <div className="flex min-h-[200px] flex-col items-center justify-center space-y-4 rounded-lg border border-red-200 bg-red-50 p-4">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-red-800">Something went wrong</h3>
        <p className="mt-2 text-sm text-red-600">
          {error.message || 'An unexpected error occurred'}
        </p>
      </div>
      <Button onClick={reset} variant="outline" className="border-red-300 text-red-700 hover:bg-red-100">
        Try again
      </Button>
    </div>
  );
};

export default ErrorBoundary;
