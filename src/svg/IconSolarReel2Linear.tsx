import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none"><Circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5"/><Path stroke={color} strokeLinecap="round" strokeWidth="1.5" d="M12 22h10"/><Path stroke={color} strokeWidth="1.5" d="M12 9a3 3 0 1 1 0 6a3 3 0 0 1 0-6Z"/><Path fill={color} d="M19.5 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-13 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0M12 4.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0 13a1 1 0 1 1 0 2a1 1 0 0 1 0-2"/></G></Svg>
);
