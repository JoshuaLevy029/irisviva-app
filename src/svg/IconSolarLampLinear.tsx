import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color} strokeWidth="1.5"><Path strokeLinecap="round" d="M9 22h6m-3 0v-7"/><Path d="M4.962 7.445c.609-2.346.913-3.519 1.7-4.294a4 4 0 0 1 .756-.585C8.365 2 9.577 2 12 2s3.635 0 4.583.566a4 4 0 0 1 .756.585c.786.775 1.09 1.948 1.7 4.294l.084.324c.828 3.189 1.242 4.783.49 5.903a3 3 0 0 1-.247.319C18.471 15 16.824 15 13.53 15h-3.058c-3.294 0-4.942 0-5.837-1.01q-.134-.15-.246-.318c-.752-1.12-.338-2.714.49-5.903z"/><Path strokeLinecap="round" d="M17.5 15v2"/></G></Svg>
);
