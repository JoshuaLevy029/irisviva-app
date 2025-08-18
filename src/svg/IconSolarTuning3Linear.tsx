import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color} strokeWidth="1.5"><Circle cx="12" cy="12" r="2" transform="rotate(180 12 12)"/><Circle cx="20" cy="14" r="2" transform="rotate(180 20 14)"/><Circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 6 8)"/><Path strokeLinecap="round" d="M12 8V5m8 5V5M4 14v5m8 0v-3m8 3v-1M4 5v1"/></G></Svg>
);
