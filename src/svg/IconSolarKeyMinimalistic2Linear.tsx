import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color} strokeWidth="1.5"><Circle cx="15" cy="9" r="7"/><Circle cx="15" cy="9" r="2"/><Path strokeLinecap="round" d="m3.5 20.5l6-6M6 21l-1.5-1.5m2-2L8 19"/></G></Svg>
);
