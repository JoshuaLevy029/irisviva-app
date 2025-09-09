import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Path fill={color} d="M9.75 9a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"/><Path fill={color} fillRule="evenodd" d="M21.21 15.904A10 10 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a10 10 0 0 0 .79 3.904L2.706 16A3.75 3.75 0 0 0 8 21.295l.096-.086c1.2.51 2.519.791 3.904.791a10 10 0 0 0 3.904-.79l.096.085A3.75 3.75 0 0 0 21.295 16zm-.768 1.459a10.05 10.05 0 0 1-3.08 3.079a2.25 2.25 0 0 0 3.08-3.08m-13.805 3.08a10.05 10.05 0 0 1-3.08-3.08a2.25 2.25 0 0 0 3.08 3.08M12 5.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5m0 10a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75" clipRule="evenodd"/></Svg>
);
