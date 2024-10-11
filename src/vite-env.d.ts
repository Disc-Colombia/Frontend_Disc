/// <reference types="vite/client" />

declare global {
    interface Window {
        dataLayer: (string | Date | Record<string, unknown>)[][]
        gtag: (...args: (string | Date | Record<string, unknown>)[]) => void
    }
}

export {}
