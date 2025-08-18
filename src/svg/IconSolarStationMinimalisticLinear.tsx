import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color} strokeWidth="1.5"><Path d="M13.25 8.75a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0Z"/><Path strokeLinecap="round" d="M7.008 14A7.06 7.06 0 0 1 5 9.055C5 5.159 8.134 2 12 2s7 3.159 7 7.055a7.06 7.06 0 0 1-1.977 4.913m-8.035-1.963A4.24 4.24 0 0 1 7.8 9.055c0-2.338 1.88-4.233 4.2-4.233s4.2 1.895 4.2 4.233c0 1.13-.44 2.158-1.157 2.917"/><Path strokeLinecap="round" strokeLinejoin="round" d="m16 22l-4-12l-4 12"/><Path strokeLinecap="round" d="M14.5 17.5h-5"/></G></Svg>
);
