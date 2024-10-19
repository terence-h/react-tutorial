// components/ErrorBoundary.tsx
import React, { Component, ReactNode } from 'react';
import errorEmitter, { RESET_ERROR_BOUNDARY } from '../utils/errorEvents'; // Adjust the path as necessary

interface ErrorBoundaryProps {
    children: ReactNode;
    id: number;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error?: Error;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
        this.resetError = this.resetError.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error("ErrorBoundary caught an error", error, errorInfo);
    }

    componentDidMount() {
        errorEmitter.on(RESET_ERROR_BOUNDARY, this.handleReset);
    }

    componentWillUnmount() {
        errorEmitter.off(RESET_ERROR_BOUNDARY, this.handleReset);
    }

    handleReset(eId: number) {
        // Ignore reset event if it's not the same code editor ID
        if (eId !== this.props.id)
            return;

        this.resetError();
    }

    resetError() {
        this.setState({ hasError: false, error: undefined });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className='text-red-700 bg-red-100 p-5 mb-2 rounded-md'>
                    <h2 className='text-xl font-bold mb-4'>Runtime Error:</h2>
                    <p className='mb-6'>{this.state.error?.message}</p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;