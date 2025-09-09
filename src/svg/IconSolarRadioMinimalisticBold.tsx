import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Path fill={color} d="M5.75 14a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"/><Path fill={color} fillRule="evenodd" d="M15.32 3.679a.75.75 0 1 0-.64-1.357L6.768 6.046c-1.736.089-2.821.351-3.595 1.126C2 8.343 2 10.229 2 14s0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14s0-5.657-1.172-6.828S17.771 6 14 6h-3.613zM8 10.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5m4.75.75a.75.75 0 0 1 .75-.75H19a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75m.75 2.25a.75.75 0 0 0 0 1.5H19a.75.75 0 0 0 0-1.5zM12.75 17a.75.75 0 0 1 .75-.75H19a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75" clipRule="evenodd"/></Svg>
);
