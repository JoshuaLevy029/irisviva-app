export default {
    isFloat: (number: number): boolean => typeof number === 'number' && number % 1 !== 0,
    isPromise:<T = any> (value: any): value is Promise<T> => typeof value === 'object' && value !== null && typeof value.then === 'function',
    isUrl: (str: string): boolean => /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d{1,5})?(\/.*)?$/.test(str),
    has: (haystack: any[], needle: any): boolean => haystack.includes(needle),
    hasBrackets: (str: string) => /\[[^\]]*\]/.test(str),
    monthDiff: (from: string, to: string): number => {
        const d1 = new Date(from)
        const d2 = new Date(to)
        const monthDiff = d2.getMonth() - d1.getMonth() + (12 * (d2.getFullYear() - d1.getFullYear()))
        return monthDiff <= 0 ? 0 : monthDiff
    },
    brazilianPhoneNumber: (phone: string): boolean => /^\(\d{2}\)\s?\d{5}-\d{4}$/.test(`${phone}`),
    passwordStrength: (password: string): { hasUpperCase: boolean, hasLowerCase: boolean, hasNumber: boolean, hasSymbol: boolean, hasMinLength: boolean } => {
        const rules = {
            hasUpperCase: /[A-Z]/.test(password),
            hasLowerCase: /[a-z]/.test(password),
            hasNumber: /[0-9]/.test(password),
            hasSymbol: /[!@#$%^&*(),.?":{}|<>]/.test(password),
            hasMinLength: password.length >= 8,
        }
        
        return rules
    },
}