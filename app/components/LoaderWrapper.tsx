import { PropsWithChildren, Suspense } from "react";

export default function LoaderWrapper({ children }: PropsWithChildren) {
    const loadingElement = (
        <div className="absolute inset-0 flex items-center justify-center bg-black/75 z-50">
            <div className="w-16 h-16 border-4 border-t-blue-500 border-slate-300 rounded-full animate-spin"></div>
        </div>
    );

    return (
        <Suspense fallback={loadingElement}>
            {children}
        </Suspense>
    );
}