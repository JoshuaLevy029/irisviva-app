import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none"><Path stroke={color} strokeWidth="1.5" d="M18 14a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z"/><Path stroke={color} strokeLinecap="round" strokeWidth="1.5" d="M3 11.005S5.284 13 8.784 13c2.383 0 3.647-1.182 4.716-1.496c2.009-.59 3.5-.499 3.5-.499m-14 5s1.6-.091 3.757.499C7.905 16.818 9.262 18 11.82 18a10.85 10.85 0 0 0 5.181-1.333"/><Path fill={color} fillRule="evenodd" d="M20.53 4.045a2 2 0 0 0-.306-.53c.326-.091.549-.097.606.003c.058.1-.058.29-.3.527M17.106 6.02c-.326.091-.548.097-.606-.003s.058-.29.3-.527a2 2 0 0 0 .306.53m0 0c.455-.126 1.113-.418 1.81-.82c.695-.402 1.277-.825 1.614-1.156a2 2 0 0 1-3.424 1.976m-.306-.53a2 2 0 0 1 3.424-1.977c-.455.127-1.113.419-1.809.82c-.696.403-1.278.826-1.615 1.157" clipRule="evenodd"/></G></Svg>
);
