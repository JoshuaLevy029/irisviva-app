import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color} strokeWidth="1.5"><Path strokeLinecap="round" d="M17 21v-5M7 21v-5"/><Path d="M15.5 12h-7c-1.65 0-2.475 0-2.988.586c-.286.326-.412.764-.468 1.415c-.077.9-.116 1.351.181 1.675S6.015 16 7 16h10c.985 0 1.477 0 1.774-.324c.298-.324.259-.774.181-1.675c-.055-.65-.182-1.088-.468-1.415C17.975 12 17.15 12 15.5 12ZM7 8c0-1.87 0-2.804.402-3.5A3 3 0 0 1 8.5 3.402C9.196 3 10.13 3 12 3s2.804 0 3.5.402A3 3 0 0 1 16.598 4.5C17 5.196 17 6.13 17 8v4H7z"/></G></Svg>
);
