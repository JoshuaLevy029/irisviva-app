import { RuleOfThreeProps } from "../../global"

function not < T > (a: readonly T[], b: readonly T[], equals ? : (x: T, y: T) => boolean): T[] {
    if (equals) {
        return a.filter((value) => !b.some((bValue) => equals(value, bValue)))
    } else {
        return a.filter((value) => !b.includes(value))
    }
}

function intersection < T > (a: readonly T[], b: readonly T[], equals ? : (x: T, y: T) => boolean): T[] {
    if (equals) {
        return a.filter((value) => b.some((bValue) => equals(value, bValue)))
    } else {
        return a.filter((value) => b.includes(value))
    }
}

function union < T > (a: readonly T[], b: readonly T[], equals ? : (x: T, y: T) => boolean): T[] {
    if (equals) {
        return [...a, ...not(b, a, equals)]
    } else {
        return [...a, ...not(b, a)]
    }
}

export default {
    
    money: (amount: number, currency: string = 'BRL', digit: number = 2) => {
        if (amount === null || amount === undefined) {
            amount = 0.0
        }

        return amount.toLocaleString(currency === 'BRL' ? 'pt-BR' : 'en-US', { style: 'currency', currency: currency, minimumFractionDigits: digit, maximumFractionDigits: digit })
    },

    percentage: (amount: number | null | undefined, digit: number = 2) => {
        if (amount === null || amount === undefined) {
            amount = 0.0
        }
        return new Intl.NumberFormat('pt-BR', {
            style: 'percent',
            minimumFractionDigits: digit,
            maximumFractionDigits: digit,
        }).format(amount / 100)
    },

    formatBytes: (bytes: number, decimals: number = 2): string => {
        if (!+bytes) return '0 bytes'

        const k = 1024
        const dm = decimals < 0 ? 0 : decimals
        const sizes = ['bytes', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb', 'Eb', 'Zb', 'Yb']

        const i = Math.floor(Math.log(bytes) / Math.log(k))

        return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
    },

    fileSize: (size: number): string => {
        var symbol = 'bytes'
        var exp = 0

        while (size >= 1024) {
            size = size / 1024
            exp++
        }

        switch (exp) {
            case 0: 
                symbol = 'bytes'
                break
            case 1: 
                symbol = 'KB'
                break
            case 2: 
                symbol = 'MB'
                break
            case 3: 
                symbol = 'GB'
                break
            case 4: 
                symbol = 'TB'
                break
        }

        return `${size.toFixed(2)} ${symbol}`
    },

    onlyNumbers: (value: string): string => {
        return value.replace(/[^0-9]/g, '')
    },

    not: not,

    intersection: intersection,

    union: union,

    addZeros: (value: number, length: number, direction: 'start' | 'end'): string => direction === 'start' ? value.toString().padStart(length.toString().length, '0') : value.toString().padEnd(length.toString().length, '0'),

    getInitials: (string: string) => string.split(/\s/).reduce((response, word) => (response += word.slice(0, 1)), ''),

    rgbaToHex: (colorStr: string, forceRemoveAlpha: boolean = false) => {
        // Check if the input string contains '/'
        const hasSlash = colorStr.includes('/')

        if (hasSlash) {
            // Extract the RGBA values from the input string
            const rgbaValues = colorStr.match(/(\d+)\s+(\d+)\s+(\d+)\s+\/\s+([\d.]+)/)

            if (!rgbaValues) {
            return colorStr // Return the original string if it doesn't match the expected format
            }

            const [red, green, blue, alpha] = rgbaValues.slice(1, 5).map(parseFloat)

            // Convert the RGB values to hexadecimal format
            const redHex = red.toString(16).padStart(2, '0')
            const greenHex = green.toString(16).padStart(2, '0')
            const blueHex = blue.toString(16).padStart(2, '0')

            // Convert alpha to a hexadecimal format (assuming it's already a decimal value in the range [0, 1])
            const alphaHex = forceRemoveAlpha
            ? ''
            : Math.round(alpha * 255)
                .toString(16)
                .padStart(2, '0')

            // Combine the hexadecimal values to form the final hex color string
            const hexColor = `#${redHex}${greenHex}${blueHex}${alphaHex}`

            return hexColor
        } else {
            // Use the second code block for the case when '/' is not present
            return (
            '#' +
            colorStr
                .replace(/^rgba?\(|\s+|\)$/g, '') // Get's rgba / rgb string values
                .split(',') // splits them at ","
                .filter((string, index) => !forceRemoveAlpha || index !== 3)
                .map(string => parseFloat(string)) // Converts them to numbers
                .map((number, index) => (index === 3 ? Math.round(number * 255) : number)) // Converts alpha to 255 number
                .map(number => number.toString(16)) // Converts numbers to hex
                .map(string => (string.length === 1 ? '0' + string : string)) // Adds 0 when length of one number is 1
                .join('')
            )
        }
    },

    hexToRgba: (hexColor: string, alpha: number): string => {
        // Remove the leading "#" if present
        const hex = hexColor.replace('#', '')
    
        // Extract the red, green, and blue values
        const r = parseInt(hex.slice(0, 2), 16)
        const g = parseInt(hex.slice(2, 4), 16)
        const b = parseInt(hex.slice(4, 6), 16)
    
        return `rgba(${r}, ${g}, ${b}, ${alpha})`
    },

    string: {
        ensurePrefix: (str: string, prefix: string) => (str.startsWith(prefix) ? str : `${prefix}${str}`),
        withoutSuffix: (str: string, suffix: string) => str.endsWith(suffix) ? str.slice(0, -suffix.length) : str,
        withoutPrefix: (str: string, prefix: string) => (str.startsWith(prefix) ? str.slice(prefix.length) : str),
    },

    getTextColorForBackground: (bgColor: string): string => {
        const color = bgColor.replace('#', '');
        const r = parseInt(color.substring(0, 2), 16);
        const g = parseInt(color.substring(2, 4), 16);
        const b = parseInt(color.substring(4, 6), 16);
        const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        return luminance < 140 ? '#ffffff' : '#1f1f1f';
    },

    mask: (str: string, unisMaskedLength = 5, maskSymbol = '*') => {
        // Calculate the number of characters to mask
        const maskLength = Math.max(str.length - unisMaskedLength, 0)

        // Extract the unisMasked part and create the isMasked part
        const visiblePart = str.slice(0, unisMaskedLength)
        const isMaskedPart = maskSymbol.repeat(maskLength)

        // Return the isMasked string
        return `${visiblePart}${isMaskedPart}`
    },

    maskEmail: (email: string, unisMaskedLength = 5, maskSymbol = '*') => {
        // Split the email into the local part and the domain
        const [localPart, domain] = email.split('@')

        // Calculate the number of characters to mask
        const maskLength = Math.max(localPart.length - unisMaskedLength, 0)

        // Extract the unisMasked part and create the isMasked part
        const visiblePart = localPart.slice(0, unisMaskedLength)
        const isMaskedPart = maskSymbol.repeat(maskLength)

        // Return the isMasked email
        return `${visiblePart}${isMaskedPart}@${domain}`
    },

    ruleOfThree: (options: RuleOfThreeProps) => {
        if (!options.x1) {
            return ((options.y1 || 0) * (options.x2 || 0)) / (options.y2 || 1)
        } else if (!options.x2) {
            return ((options.y2 || 0) * (options.x1 || 0)) / (options.y1 || 1)
        } else if (!options.y1) {
            return ((options.x1 || 0) * (options.y2 || 0)) / (options.x2 || 1)
        } else if (!options.y2) {
            return ((options.x2 || 0) * (options.y1 || 0)) / (options.x1 || 1)
        }

        return 0
    },
    alpha: (color: string, alpha: number): string => {
        if (alpha < 0) alpha = 0;
        if (alpha > 1) alpha = 1;

        const cleanHex = color.replace('#', '');
        const fullHex = cleanHex.length === 3 ? cleanHex.split('').map(c => c + c).join('') : cleanHex;
        const alphaHex = Math.round(alpha * 255).toString(16).padStart(2, '0');
        return `#${fullHex}${alphaHex}`;
    }
}