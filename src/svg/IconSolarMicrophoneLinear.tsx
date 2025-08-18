import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color} strokeWidth="1.5"><Path d="M7 8a5 5 0 0 1 10 0v3a5 5 0 0 1-10 0z"/><Path strokeLinecap="round" d="M13 8h4m-4 3h4m3-1v1a8 8 0 1 1-16 0v-1m8 9v3"/></G></Svg>
);
