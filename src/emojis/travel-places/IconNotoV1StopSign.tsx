import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><Path fill="#db4437" d="M36.66 122.85L5.65 91.84a8 8 0 0 1-2.34-5.66V42.33c0-2.12.84-4.16 2.34-5.66l31.01-31c1.5-1.5 3.54-2.34 5.66-2.34h43.85c2.12 0 4.16.84 5.66 2.34l31.01 31.01c1.5 1.5 2.34 3.54 2.34 5.66v43.85c0 2.12-.84 4.16-2.34 5.66l-31.01 31.01a8 8 0 0 1-5.66 2.34H42.32a8.04 8.04 0 0 1-5.66-2.35"/></Svg>
);
