import { asyncPrefix } from "@/config/storage.config";
import en from '@/global/lang/en.json';
import pt_BR from '@/global/lang/pt_BR.json';
import { Language, TranslatorContextProps, TranslatorProviderProps } from "@/types/translator";
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState } from "react";

const TranslatorContext = createContext<TranslatorContextProps>({} as TranslatorContextProps);

const TranslatorProvider = ({ children, ...props }: TranslatorProviderProps) => {
    const [locale, setLocale] = useState<Language>('en');

    const setUserLocale = async (locale: Language) => {
        setLocale(locale);
        await AsyncStorage.setItem(`${asyncPrefix}:locale`, locale as string);
    }

    const translate = (value: string) => {
        const _locale: { [key: string]: string } = {};

        switch (locale) {
            case 'pt_BR':
                Object.assign(_locale, pt_BR);
                break;
            case 'en':
                Object.assign(_locale, en);
                break;
            default:
                Object.assign(_locale, en);
                break;
        }

        return _locale[value] ?? value;
    };

    useEffect(() => {
        (async () => {
            const _locale = await AsyncStorage.getItem(`${asyncPrefix}:locale`);
            setLocale(_locale as Language ?? 'en');
        })();
    }, []);

    return (
        <TranslatorContext.Provider value={{ locale, t: translate, setLocale: setUserLocale }}>
            {children}
        </TranslatorContext.Provider>
    );
}

export { TranslatorContext, TranslatorProvider };
