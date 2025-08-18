import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none"><Path stroke={color} strokeWidth="1.5" d="M6 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm0 16a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm0-16a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"/><Path stroke={color} strokeLinecap="round" strokeWidth="1.5" d="M4 6v12m8-12v12m8-12v2c0 1.886 0 2.828-.586 3.414S17.886 12 16 12H4"/><Path fill={color} d="M18 15v-.75a.75.75 0 0 0-.75.75zm-.75 7a.75.75 0 0 0 1.5 0zm4.11.392a.75.75 0 1 0 1.28-.784zM18 15.75h2.286v-1.5H18zm.75 2.75V15h-1.5v3.5zm2.5-1.75c0 .567-.446 1-.964 1v1.5c1.375 0 2.464-1.134 2.464-2.5zm-.964-1c.518 0 .964.433.964 1h1.5c0-1.366-1.089-2.5-2.464-2.5zm0 2h-.429v1.5h.429zm-.429 0H18v1.5h1.857zm-.64 1.142l2.143 3.5l1.28-.784l-2.143-3.5zM17.25 18.5V22h1.5v-3.5z"/></G></Svg>
);
