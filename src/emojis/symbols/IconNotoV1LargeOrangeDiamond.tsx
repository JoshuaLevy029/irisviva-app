import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><Path fill="#ff9800" d="M64 126.82c-.78 0-1.55-.3-2.14-.89L2.07 66.15c-.57-.57-.89-1.34-.89-2.15c0-.8.32-1.58.89-2.14L61.86 2.07a3.03 3.03 0 0 1 4.29 0l59.79 59.79a3.04 3.04 0 0 1 0 4.29l-59.79 59.79c-.6.58-1.37.88-2.15.88"/></Svg>
);
