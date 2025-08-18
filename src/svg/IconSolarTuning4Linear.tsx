import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color} strokeWidth="1.5"><Circle cx="12" cy="12" r="2" transform="rotate(-90 12 12)"/><Circle cx="10" cy="20" r="2" transform="rotate(-90 10 20)"/><Circle cx="2" cy="2" r="2" transform="matrix(0 -1 -1 0 16 6)"/><Path strokeLinecap="round" d="M16 12h3m-5 8h5M10 4H5m0 8h3m-3 8h1M19 4h-1"/></G></Svg>
);
