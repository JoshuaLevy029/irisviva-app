import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color} strokeWidth="1.5"><Path strokeLinecap="round" d="M15 6H3m10 4H3m6 4H3m5 4H3m14-1.5V8"/><Circle cx="14.5" cy="16.5" r="2.5"/><Path strokeLinecap="round" d="M21 12a4 4 0 0 1-4-4"/></G></Svg>
);
