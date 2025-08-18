import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color} strokeWidth="1.5"><Circle cx="12" cy="12" r="2"/><Path strokeLinecap="round" d="M12 10c5 0 4.6 12-3 12"/><Path strokeLinecap="round" d="M12.312 14c-5 0-4.6-12 3-12"/><Path strokeDasharray="2 2" strokeLinecap="round" d="M10.632 10.696c3.535-3.535 11.737 5.233 6.364 10.607"/><Path strokeDasharray="2 2" strokeLinecap="round" d="M13.68 13.304C10.144 16.84 1.942 8.07 7.316 2.697"/><Path strokeDasharray="2 2" strokeLinecap="round" d="M10.851 13.524C7.316 9.99 16.084 1.786 21.458 7.16"/><Path strokeDasharray="2 2" strokeLinecap="round" d="M13.46 10.476c3.536 3.535-5.232 11.738-10.606 6.364"/><Path strokeLinecap="round" d="M10 12.312c0-5 12-4.6 12 3"/><Path strokeLinecap="round" d="M14 12c0 5-12 4.6-12-3"/></G></Svg>
);
