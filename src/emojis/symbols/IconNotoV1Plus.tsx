import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><Path fill="#ed6c30" d="M127.35 59.61c0-4.36-3.56-7.92-7.92-7.92h-35.2c-4.36 0-7.92-3.56-7.92-7.92V8.57c0-4.36-3.56-7.92-7.92-7.92h-8.78c-4.36 0-7.92 3.56-7.92 7.92v35.19c0 4.36-3.56 7.92-7.92 7.92H8.57c-4.36 0-7.92 3.56-7.92 7.92v8.79c0 4.36 3.56 7.92 7.92 7.92h35.2c4.36 0 7.92 3.56 7.92 7.92v35.19c0 4.36 3.56 7.92 7.92 7.92h8.78c4.36 0 7.92-3.56 7.92-7.92V84.23c0-4.36 3.56-7.92 7.92-7.92h35.2c4.36 0 7.92-3.56 7.92-7.92z"/></Svg>
);
