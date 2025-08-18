import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color} strokeWidth="1.5"><Path d="M20 12a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z"/><Path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"/><Path strokeLinecap="round" d="M2 12h2m16 0h2M12 4V2m0 20v-2"/></G></Svg>
);
