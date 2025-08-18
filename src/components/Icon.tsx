import Emoji from '@/emojis/index'
import Icons from '@/svg/index'

export interface IconProps {
    name: keyof typeof Icons | keyof typeof Emoji['activities'] | keyof typeof Emoji['animals-nature'] | keyof typeof Emoji['flags'] | keyof typeof Emoji['food-drink'] | keyof typeof Emoji['objects'] | keyof typeof Emoji['people-body'] | keyof typeof Emoji['smileys-emotion'] | keyof typeof Emoji['symbols'] | keyof typeof Emoji['travel-places']
    color?: string
    size?: number | string
}

const emojis = Object.values(Emoji)

export default function Icon({ name, color = '#1f1f1f', size = 32 }: IconProps) {
    let IconComponent: React.ComponentType<{ color?: string; size?: number | string }> | undefined;

    let AllIcons = {
        ...Icons,
    }

    for (const _emoji of emojis) {
        AllIcons = {
            ...AllIcons,
            ..._emoji
        }
    }

    if (name in AllIcons) {
        IconComponent = AllIcons[name as keyof typeof AllIcons] as React.ComponentType<{ color?: string; size?: number | string }>;
    }

    if (!IconComponent) {
        console.warn(`Icon with name "${name}" does not exist in Icons or Emoji enum.`);
        return null;
    }

    return <IconComponent color={color} size={size} />;
}