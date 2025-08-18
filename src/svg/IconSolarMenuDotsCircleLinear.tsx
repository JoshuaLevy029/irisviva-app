import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color}><Path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.009m3.996 0h.008m3.978 0H16"/><Circle cx="12" cy="12" r="10" strokeWidth="1.5"/></G></Svg>
);
