import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none"><Path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m3 17l1.204 1.338A2 2 0 0 0 5.691 19h12.618a2 2 0 0 0 1.487-.662L21 17"/><Circle cx="7" cy="21" r="1" fill={color}/><Circle cx="17" cy="21" r="1" fill={color}/><Circle cx="19" cy="4" r="2" stroke={color} strokeWidth="1.5"/><Path stroke={color} strokeLinecap="round" strokeWidth="1.5" d="M15 16.5v-1.25l-.001-.166a3 3 0 0 0-1.493-2.517c-.097-.061-.146-.091-.177-.113a2 2 0 0 1-.184-3.168l.145-.118l.446-.356a1.737 1.737 0 0 0-2.006-2.83L8.5 8M7 15.5h.379c1.358 0 2.66-.54 3.621-1.5m5.5-4a8.25 8.25 0 0 0 4 0"/></G></Svg>
);
