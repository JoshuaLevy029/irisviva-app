import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color} strokeWidth="1.5"><Path d="M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0Z"/><Path d="M6.5 10.189a6 6 0 1 0 7.106 3.669"/><Path d="M12 20.472a6 6 0 1 0 5.5-10.283"/></G></Svg>
);
