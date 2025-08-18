import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><G fill="#40c0e7"><Path d="M121.76 32.82L72.82 61.08V32.82L18.83 64l53.99 31.18V66.92l48.94 28.26z"/><Path d="M6.24 33.23h17.58v61.54H6.24z"/></G></Svg>
);
