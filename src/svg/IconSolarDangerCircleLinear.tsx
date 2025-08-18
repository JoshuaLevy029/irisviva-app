import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none"><Circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5"/><Path stroke={color} strokeLinecap="round" strokeWidth="1.5" d="M12 7v6"/><Circle cx="12" cy="16" r="1" fill={color}/></G></Svg>
);
