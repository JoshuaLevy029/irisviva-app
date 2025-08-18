import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none"><Path fill={color} d="M7 15a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/><Path stroke={color} strokeWidth="1.5" d="M2 15c0-1.886 0-2.828.586-3.414S4.114 11 6 11h12c1.886 0 2.828 0 3.414.586S22 13.114 22 15s0 2.828-.586 3.414S19.886 19 18 19H6c-1.886 0-2.828 0-3.414-.586S2 16.886 2 15Z"/><Path stroke={color} strokeLinecap="round" strokeWidth="1.5" d="M7 11L3 4m14 7l4-7m-7 11h4m-.833-9.603A5.502 5.502 0 0 0 7 5.397"/><Path stroke={color} strokeLinecap="round" strokeWidth="1.5" d="M14.965 6.658a3.001 3.001 0 0 0-5.76 0"/><Path fill={color} d="M13.084 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/></G></Svg>
);
