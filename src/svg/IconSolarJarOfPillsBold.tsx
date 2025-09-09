import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Path fill={color} d="M6.076 2.617C6 2.801 6 3.034 6 3.5s0 .699.076.883a1 1 0 0 0 .541.54C6.801 5 7.034 5 7.5 5h9c.466 0 .699 0 .883-.076a1 1 0 0 0 .54-.541C18 4.199 18 3.966 18 3.5s0-.699-.076-.883a1 1 0 0 0-.541-.54C17.199 2 16.966 2 16.5 2h-9c-.466 0-.699 0-.883.076a1 1 0 0 0-.54.541M7.75 6L5.501 7.799a4 4 0 0 0-1.135 1.45H19.64a4 4 0 0 0-1.123-1.45L16.294 6z"/><Path fill={color} fillRule="evenodd" d="M20 10.908q0-.079-.003-.158H4.004L4 10.922v6.328h16zm-7.25 2.342V12a.75.75 0 0 0-1.5 0v1.25H10a.75.75 0 0 0 0 1.5h1.25V16a.75.75 0 0 0 1.5 0v-1.25H14a.75.75 0 0 0 0-1.5z" clipRule="evenodd"/><Path fill={color} d="M4.927 20.113a4 4 0 0 1-.743-1.363H19.82a4 4 0 0 1-.732 1.358l-.359.435A4 4 0 0 1 15.642 22H8.957c-.571 0-.857 0-1.127-.037a4 4 0 0 1-2.153-1.008c-.201-.184-.384-.404-.75-.842"/></Svg>
);
