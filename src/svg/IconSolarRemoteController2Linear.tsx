import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none"><Path stroke={color} strokeWidth="1.5" d="M5 9c0-2.809 0-4.213.674-5.222a4 4 0 0 1 1.104-1.104C7.787 2 9.19 2 12 2s4.213 0 5.222.674a4 4 0 0 1 1.104 1.104C19 4.787 19 6.19 19 9v6c0 2.809 0 4.213-.674 5.222a4 4 0 0 1-1.104 1.104C16.213 22 14.81 22 12 22s-4.213 0-5.222-.674a4 4 0 0 1-1.104-1.104C5 19.213 5 17.81 5 15z"/><Path stroke={color} strokeWidth="1.5" d="M15 15.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"/><Path fill={color} d="M11 9.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/><Circle cx="10" cy="6" r="1" fill={color}/><Path fill={color} d="M15 9.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/><Circle cx="14" cy="6" r="1" fill={color}/></G></Svg>
);
