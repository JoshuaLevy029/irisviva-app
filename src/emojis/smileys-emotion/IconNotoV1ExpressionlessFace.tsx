import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><Path fill="#fcc21b" d="M64 9.9C1.99 9.9.51 79.42.51 93.19c0 13.76 28.43 24.91 63.49 24.91c35.07 0 63.49-11.16 63.49-24.91c0-13.77-1.47-83.29-63.49-83.29"/><Path fill="#2f2f2f" d="M53.13 55.59h-17.9c-1.66 0-3-1.34-3-3s1.34-3 3-3h17.9c1.66 0 3 1.34 3 3s-1.34 3-3 3m39.63 0h-17.9c-1.66 0-3-1.34-3-3s1.34-3 3-3h17.9c1.66 0 3 1.34 3 3s-1.34 3-3 3m-3.07 29.16H38.31c-1.66 0-3-1.34-3-3s1.34-3 3-3H89.7c1.66 0 3 1.34 3 3s-1.35 3-3.01 3"/></Svg>
);
