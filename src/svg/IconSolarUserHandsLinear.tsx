import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color} strokeWidth="1.5"><Path strokeLinecap="round" d="M8 13h8m-8 0v5c0 1.886 0 2.828.586 3.414S10.114 22 12 22s2.828 0 3.414-.586S16 19.886 16 18v-5m-8 0c-1.71 0-3.15 1.28-3.35 2.98L4 21.5M16 13c1.71 0 3.15 1.28 3.35 2.98L20 21.5"/><Circle cx="12" cy="6" r="4"/></G></Svg>
);
