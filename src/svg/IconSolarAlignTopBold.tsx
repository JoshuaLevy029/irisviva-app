import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Path fill={color} fillRule="evenodd" d="M1.25 3.75c0 .414.336.75.75.75h20A.75.75 0 0 0 22 3H2a.75.75 0 0 0-.75.75" clipRule="evenodd"/><Path fill={color} d="M7.5 7.75c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C5 8.848 5 9.315 5 10.25v9c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201s1.402 0 1.75-.201A1.5 1.5 0 0 0 9.799 21c.201-.348.201-.815.201-1.75v-9c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549c-.348-.201-.815-.201-1.75-.201m9 0c-.935 0-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549C14 8.848 14 9.315 14 10.25v6c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75v-6c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549c-.348-.201-.815-.201-1.75-.201"/></Svg>
);
