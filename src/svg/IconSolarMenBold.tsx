import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Path fill={color} d="M17 1.25a.75.75 0 1 0 0 1.5h3.19l-5.088 5.088a8 8 0 1 0 1.06 1.06l5.088-5.087V7a.75.75 0 1 0 1.5 0V2a.75.75 0 0 0-.75-.75z"/></Svg>
);
