import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Path fill={color} fillRule="evenodd" d="M1.75 6.5a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0m11 11a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0m9.5-11a4.75 4.75 0 1 0-9.5 0a4.75 4.75 0 0 0 9.5 0m-11 11a4.75 4.75 0 1 0-9.5 0a4.75 4.75 0 0 0 9.5 0" clipRule="evenodd"/></Svg>
);
