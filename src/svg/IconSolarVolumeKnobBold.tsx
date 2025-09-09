import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Path fill={color} d="M11.25 7.056a5.001 5.001 0 1 0 1.5 0V11a.75.75 0 0 1-1.5 0zM13 3.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m7.5 9.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-17 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2m3.197-7.718a1 1 0 1 1-1.414 1.415a1 1 0 0 1 1.414-1.415m12.02 12.021a1 1 0 1 1-1.414 1.415a1 1 0 0 1 1.414-1.415m0-10.606a1 1 0 1 1-1.414-1.415a1 1 0 0 1 1.414 1.415M6.697 18.718a1 1 0 1 1-1.414-1.415a1 1 0 0 1 1.414 1.415"/></Svg>
);
