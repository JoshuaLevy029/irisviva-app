import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color} strokeWidth="1.5"><Path strokeLinecap="round" d="M13 15V7"/><Circle cx="11" cy="15" r="2"/><Path strokeLinecap="round" d="M16 10a3 3 0 0 1-3-3"/><Path strokeLinecap="round" d="M14 21.8q-.97.198-2 .2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10q-.002 1.03-.2 2"/><Path strokeLinecap="round" strokeLinejoin="round" d="M18 22v-7m0 0l2.5 2.5M18 15l-2.5 2.5"/></G></Svg>
);
