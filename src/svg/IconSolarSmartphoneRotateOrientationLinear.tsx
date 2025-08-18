import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color} strokeWidth="1.5"><Path d="M2 8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h1c2.828 0 4.243 0 5.121.879C15 3.757 15 5.172 15 8v8c0 2.828 0 4.243-.879 5.121C13.243 22 11.828 22 9 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16z"/><Path strokeLinecap="round" d="M17.5 10.007c1.86.027 2.914.165 3.621.872C22 11.758 22 13.172 22 16s0 4.243-.879 5.122c-.707.707-1.761.845-3.621.872M11 5H6m13 13v-4"/><Path d="M10 17.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"/><Path strokeLinecap="round" strokeLinejoin="round" d="M20.5 6.986L22 8c0-3.015-2.162-5.517-5-6"/></G></Svg>
);
