import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none"><Path stroke={color} strokeLinecap="round" strokeWidth="1.5" d="M22 19h-8M2 19h8m2-2v-3"/><Circle cx="12" cy="19" r="2" stroke={color} strokeWidth="1.5"/><Path stroke={color} strokeWidth="1.5" d="M2 11a3 3 0 0 1 3-3h14a3 3 0 1 1 0 6H5a3 3 0 0 1-3-3Zm0-6a3 3 0 0 1 3-3h14a3 3 0 1 1 0 6H5a3 3 0 0 1-3-3Z"/><Path stroke={color} strokeLinecap="round" strokeWidth="1.5" d="M13 5h6m-6 6h6"/><Circle cx="6" cy="5" r="1" fill={color}/><Circle cx="6" cy="11" r="1" fill={color}/></G></Svg>
);
