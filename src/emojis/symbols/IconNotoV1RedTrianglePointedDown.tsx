import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><Path fill="#db4437" d="M64 115.58c-1.01 0-1.96-.51-2.5-1.37L.69 19.58C.1 18.67.06 17.5.58 16.55A2.96 2.96 0 0 1 3.19 15h121.62c1.09 0 2.09.59 2.61 1.55c.52.95.48 2.12-.11 3.03L66.5 114.22c-.54.85-1.49 1.36-2.5 1.36"/></Svg>
);
