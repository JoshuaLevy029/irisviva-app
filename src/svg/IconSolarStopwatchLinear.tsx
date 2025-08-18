import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color} strokeWidth="1.5"><Path d="M21 13a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z"/><Path strokeLinecap="round" strokeLinejoin="round" d="M12 13V9"/><Path strokeLinecap="round" d="M10 2h4"/></G></Svg>
);
