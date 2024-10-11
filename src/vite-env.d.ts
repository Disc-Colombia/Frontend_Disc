
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

=======
/// <reference types="vite/client" />

declare global {
    interface Window {
        dataLayer: (string | Date | Record<string, unknown>)[][]
        gtag: (...args: (string | Date | Record<string, unknown>)[]) => void
    }
}

export {}
>>>>>>> aa291dfc977e0a3def9fb66d8a0d867521a23fe6
