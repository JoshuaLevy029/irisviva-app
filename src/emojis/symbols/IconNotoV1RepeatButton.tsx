import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><G fill="#40c0e7"><Path d="M107.58 61.97c.09.76.16 1.53.16 2.32c0 10.9-8.87 19.77-19.77 19.77h-53.4V66.2L6.72 88.71l27.85 22.5V94.53h53.4c16.67 0 30.24-13.56 30.24-30.24c0-3.37-.57-6.69-1.69-9.89z"/><Path d="M20.41 66.03c-.1-.76-.15-1.53-.15-2.32c0-10.9 8.88-19.78 19.78-19.78h53.4V61.8l27.85-22.51l-27.85-22.5v16.68h-53.4C23.36 33.47 9.8 47.04 9.8 63.71c0 3.36.56 6.68 1.68 9.89z"/></G></Svg>
);
