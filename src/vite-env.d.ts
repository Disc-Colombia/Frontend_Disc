/// <reference types="vite/client" />

// declare global {
//     interface Window {
//         dataLayer: any[]
//         gtag: (...args: any[]) => void
//     }
// }
//
// export {}

declare global {
    interface Window {
        dataLayer: (string | Date | Record<string, unknown>)[][]
        gtag: (...args: (string | Date | Record<string, unknown>)[]) => void
    }
}

export {}