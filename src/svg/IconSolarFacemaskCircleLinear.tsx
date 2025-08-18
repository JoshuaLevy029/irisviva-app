import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none"><Circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5"/><Path stroke={color} strokeLinecap="round" strokeWidth="1.5" d="M16.5 20.5L17 15l-3.143-1.258a5 5 0 0 0-3.714 0L7 15l.5 5.5M7 15l-4.5-2M17 15l4.5-2"/><Ellipse cx="15" cy="10.5" fill={color} rx="1" ry="1.5"/><Ellipse cx="9" cy="10.5" fill={color} rx="1" ry="1.5"/></G></Svg>
);
