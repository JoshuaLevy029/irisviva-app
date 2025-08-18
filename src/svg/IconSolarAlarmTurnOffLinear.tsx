import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color} strokeWidth="1.5"><Circle cx="12" cy="13" r="9"/><Path strokeLinecap="round" d="M14.122 15.122L12 13m0 0l-2.12-2.12M12 13l2.122-2.121M12 13l-2.12 2.121"/><Path strokeLinecap="round" strokeLinejoin="round" d="m3.5 4.5l4-2.5m13 2.5l-4-2.5"/></G></Svg>
);
