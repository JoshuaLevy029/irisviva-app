import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><Path fill="#db4437" d="M64 .86C29.18.86.87 29.18.87 64c0 34.81 28.32 63.14 63.13 63.14S127.14 98.81 127.14 64C127.13 29.18 98.81.86 64 .86m0 107.8c-24.62 0-44.66-20.04-44.66-44.66c0-24.63 20.03-44.66 44.66-44.66S108.66 39.37 108.66 64S88.62 108.66 64 108.66"/></Svg>
);
