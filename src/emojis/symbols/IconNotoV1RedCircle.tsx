import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><Path fill="#db4437" d="M126.71 64c0 34.63-28.07 62.71-62.71 62.71c-34.63 0-62.71-28.08-62.71-62.71C1.29 29.36 29.37 1.29 64 1.29c34.64 0 62.71 28.07 62.71 62.71"/></Svg>
);
