import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color} strokeWidth="1.5"><Path d="M18 8.807C18 13.761 13.733 15 11.6 15C9.733 15 6 13.761 6 8.807C6 6.71 7.208 5.358 8.261 4.653c.535-.36 1.223-.101 1.312.523c.178 1.245 1.305 2.173 1.987 1.104c.582-.914.793-2.148.793-2.891c0-1.1 1.15-1.798 2.048-1.124C16.15 3.577 18 5.776 18 8.807Z"/><Path strokeLinecap="round" d="M20 15L4 22m0-7l5 2.188M20 22l-5.5-2.406M15 10c-.2.667-1.08 2-3 2"/></G></Svg>
);
