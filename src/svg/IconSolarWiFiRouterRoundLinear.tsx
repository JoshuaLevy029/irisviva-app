import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none"><Path stroke={color} strokeWidth="1.5" d="M2 15a5 5 0 0 1 5-5h10a5 5 0 0 1 0 10H7a5 5 0 0 1-5-5Z"/><Path fill={color} d="M18.33 22.335a.75.75 0 1 0 1.34-.67zm-1-2l1 2l1.34-.67l-1-2zm-11.66 2a.75.75 0 1 1-1.34-.67zm1-2l-1 2l-1.34-.67l1-2z"/><Path stroke={color} strokeWidth="1.5" d="M8.5 15a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"/><Path stroke={color} strokeLinecap="round" strokeWidth="1.5" d="M12 15h6.5m3.083-9.603a5.502 5.502 0 0 0-10.167 0"/><Path stroke={color} strokeLinecap="round" strokeWidth="1.5" d="M19.38 6.658a3.001 3.001 0 0 0-5.76 0"/><Path fill={color} d="M17.5 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/></G></Svg>
);
