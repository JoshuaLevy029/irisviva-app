import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><Path fill="#40c0e7" d="M87.63 81.56V66.3l33.03 24.22l-33.03 24.21V99.56h-19c-37.33 0-61.29-10.94-61.29-43.15S31.3 13.27 68.63 13.27h42.75v17.94H68.63c-31.81 0-43.36 6.83-43.36 25.2s11.55 25.21 43.36 25.21h18.99v-.06z"/></Svg>
);
