import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none"><Circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5"/><Path stroke={color} strokeLinecap="round" strokeWidth="1.5" d="M9 16c.85.63 1.885 1 3 1s2.15-.37 3-1"/><Path fill={color} d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5s.448-1.5 1-1.5s1 .672 1 1.5"/><Ellipse cx="9" cy="10.5" fill={color} rx="1" ry="1.5"/></G></Svg>
);
