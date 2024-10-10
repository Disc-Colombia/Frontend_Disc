<<<<<<< HEAD
/// <reference types="vite/client" />
=======
// / <reference types="vite/client" />
>>>>>>> 7fecc95fcd8238c4add6911a08e2958b47cd0147
declare global {
    interface Window {
        dataLayer: any[];  // Declaración global para que TypeScript lo reconozca
        gtag: (...args: any[]) => void;
    }
}

<<<<<<< HEAD
export {};
=======
export {};


// declare global {
//     interface Window {
//         dataLayer: unknown[];
//         gtag: (...args: (string | Date | Object)[]) => void;
//     }
// }
//
// export {};
>>>>>>> 7fecc95fcd8238c4add6911a08e2958b47cd0147
