import { Languages } from "@/enums/lang.enum";
import React from "react";

export type Language = keyof typeof Languages;

export interface TranslatorContextProps {
    t: (value: string) => string;
    locale: Language;
    setLocale: (locale: Language) => Promise<void>;
}

export interface TranslatorProviderProps {
    children: React.ReactNode;
}