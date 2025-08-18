import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color} strokeWidth="1.5"><Path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12Z"/><Path strokeLinecap="round" d="M7 8v8"/><Path d="M12 12a2 2 0 1 1 4 0a2 2 0 0 1-4 0Z"/><Path strokeLinecap="round" d="m16 10l1-1m-6 6l1-1m0-4l-1-1m6 6l-1-1"/></G></Svg>
);
