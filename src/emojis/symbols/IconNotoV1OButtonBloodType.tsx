import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><Path fill="#db4437" d="M121 .11H6.99C3.21.11.12 3.21.12 6.99V121c0 3.79 3.09 6.88 6.87 6.88H121c3.78 0 6.88-3.09 6.88-6.88V6.99c0-3.78-3.1-6.88-6.88-6.88"/><Path fill="#fff" d="M63.97 13.82C34.03 13.82 12.3 34.92 12.3 64s21.73 50.19 51.67 50.19S115.63 93.08 115.63 64S93.91 13.82 63.97 13.82m0 74.53c-14.79 0-25.12-10.01-25.12-24.35s10.33-24.35 25.12-24.35S89.09 49.66 89.09 64S78.76 88.35 63.97 88.35"/></Svg>
);
