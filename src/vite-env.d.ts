/// <reference types="vite/client" />
// declare global {
//     interface Window {
//         dataLayer: any[];  // Declaración global para que TypeScript lo reconozca
//         gtag: (...args: any[]) => void;
//     }
// }
//
// export {};



declare global {
    interface Window {
        dataLayer: Array<{ [key: string]: unknown }>;  // Tipo más específico para dataLayer
        gtag: (...args: Array<string | number | object>) => void;  // Tipo más específico para gtag
    }
}

export {};
