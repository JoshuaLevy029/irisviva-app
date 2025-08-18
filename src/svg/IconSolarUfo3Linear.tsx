import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none"><Path stroke={color} strokeWidth="1.5" d="M18.922 12.15c1.603 2.623 2.072 5 .98 6.091c-1.63 1.63-6.118-.214-10.023-4.12C5.974 10.217 4.129 5.73 5.759 4.1c1.092-1.092 3.468-.624 6.092.98"/><Path stroke={color} strokeWidth="1.5" d="M11.485 5.445a4.73 4.73 0 0 1 6.687 0l.384.383a4.73 4.73 0 0 1 0 6.688c-.126.125-.287.21-.461.178c-.496-.09-1.718-.56-3.974-2.815c-2.255-2.256-2.726-3.477-2.815-3.974c-.03-.174.053-.335.179-.46Z"/><Circle cx="12" cy="12" r="1" fill={color} transform="rotate(45 12 12)"/><Circle cx="9.171" cy="7.757" r="1" fill={color} transform="rotate(45 9.171 7.757)"/><Circle cx="16.243" cy="14.828" r="1" fill={color} transform="rotate(45 16.243 14.828)"/><Path stroke={color} strokeLinecap="round" strokeWidth="1.5" d="m3.636 20.364l4.121-4.122M10 22l2.707-2.222M2 14l2.222-2.707"/></G></Svg>
);
