import Icons from '@/svg/index'
import Emojis from '@/emojis/index'

export interface IconProps {
    name: keyof typeof Icons | keyof typeof Emojis
    color?: string
    size?: number | string
}

export default function Icon({ name, color = '#1f1f1f', size = 32 }: IconProps) {
    let IconComponent: React.ComponentType<{ color?: string; size?: number | string }> | undefined;

    let AllIcons = {
        ...Icons,
        ...Emojis,
    }

    if (name in AllIcons) {
        IconComponent = AllIcons[name as keyof typeof AllIcons] as React.ComponentType<{ color?: string; size?: number | string }>;
    }

    if (!IconComponent) {
        console.warn(`Icon with name "${name}" does not exist in Icons enum.`);
        return null;
    }

    return <IconComponent color={color} size={size} />;
}