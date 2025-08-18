import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color} strokeWidth="1.5"><Path d="M6 8a6 6 0 1 1 12 0v5a6 6 0 0 1-12 0z"/><Path strokeLinecap="round" d="M10 6.5s.473-.5 2-.5s2 .5 2 .5m-4 3s.473-.5 2-.5s2 .5 2 .5m7 1.5v2a9 9 0 1 1-18 0v-2"/></G></Svg>
);
