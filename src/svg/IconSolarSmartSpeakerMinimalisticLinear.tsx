import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color} strokeWidth="1.5"><Path d="M3.321 6.658a4.83 4.83 0 0 1 3.918-4.197l.215-.04a24.7 24.7 0 0 1 9.091 0l.323.06a4.7 4.7 0 0 1 3.81 4.067c.418 3.544.43 7.125.034 10.672l-.017.154a4.84 4.84 0 0 1-4.215 4.26l-.906.113c-.495.062-.742.093-.99.118a25 25 0 0 1-5.169 0a51 51 0 0 1-.99-.118l-1.015-.126a4.714 4.714 0 0 1-4.105-4.137a47 47 0 0 1 0-10.689z"/><Path strokeLinecap="round" d="M17 6c-.72.603-2.51 1.5-5 1.5S7.72 6.603 7 6"/></G></Svg>
);
