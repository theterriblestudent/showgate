import { Barlow, Roboto } from "next/font/google";

export const barlow = Barlow({
    subsets: ['latin'],
    variable: '--secondary-font',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});

export const roboto = Roboto({
    subsets: ['latin'],
    display: 'swap',
    variable: '--primary-font',
    weight: ['100', '300', '400', '500', '700', '900']
});