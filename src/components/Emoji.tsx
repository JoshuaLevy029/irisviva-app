import Emojis from '@/emojis/index'

interface Props {
    name: keyof typeof Emojis
    color?: string
    size?: number | string
}

export default function Emoji ({ name, color= '#1f1f1f', size = 32 }: Props) {
    const EmojiComponent = Emojis[name] as unknown as React.ComponentType<{ color?: string; size?: number | string }>

    if (!EmojiComponent) {
        console.warn(`Emoji with name "${name}" does not exist in Emojis enum.`)
        return null
    }

    return <EmojiComponent color={color} size={size} />
}