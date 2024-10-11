
/// <reference types="vite/client" />

// / <reference types="vite/client" />

declare global {
    interface Window {
        dataLayer: unknown[];  // Declaración global para que TypeScript lo reconozca
        gtag: (...args: unknown[]) => void;
    }
}

export {};



// declare global {
//     interface Window {
//         dataLayer: unknown[];
//         gtag: (...args: (string | Date | Object)[]) => void;
//     }
// }
//
// export {};

