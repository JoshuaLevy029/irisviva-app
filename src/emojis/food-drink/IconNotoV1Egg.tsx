import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><Path fill="#f8d8c0" d="M64 3.78c-25.09 0-47.36 32.62-47.36 70.89c0 31.99 21.96 49.56 47.36 49.56s47.36-17.57 47.36-49.56C111.36 36.4 89.09 3.78 64 3.78"/><Path fill="#efb78e" d="M100.33 30.17c.3 18.78-4.39 39.85-16.99 55.16c-18.91 22.99-49.4 20.24-60.93 14.81c8.16 15.71 24.05 24.09 41.59 24.09c25.41 0 47.36-17.57 47.36-49.56c0-16.64-4.21-32.21-11.03-44.5"/></Svg>
);
