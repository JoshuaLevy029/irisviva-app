import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Path fill={color} d="M2 8.76c0-2.715 0-4.073.879-4.916C3.757 3 5.172 3 8 3h8c2.828 0 4.243 0 5.121.844c.879.843.879 2.2.879 4.916v.96c0 2.715 0 4.073-.879 4.916c-.878.844-2.293.844-5.121.844h-3.25v2.36l5.487 1.757a.714.714 0 0 1 .475.91a.76.76 0 0 1-.95.456L12 19.119l-5.763 1.844a.757.757 0 0 1-.949-.456a.714.714 0 0 1 .475-.91l5.487-1.756V15.48H8c-2.828 0-4.243 0-5.121-.844C2 13.793 2 12.436 2 9.72z"/></Svg>
);
