import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Path fill={color} d="M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0"/><Path fill={color} d="M5.033 10.783a6 6 0 1 0 8.92 4.46a7.503 7.503 0 0 1-8.92-4.46m10.354 3.911q.112.636.113 1.306c0 2.09-.855 3.982-2.235 5.342a6 6 0 0 0 5.702-10.558a7.53 7.53 0 0 1-3.58 3.91"/></Svg>
);
