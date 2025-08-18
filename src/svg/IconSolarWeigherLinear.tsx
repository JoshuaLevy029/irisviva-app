import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color} strokeWidth="1.5"><Path d="M3 10c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172S21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172S3 17.771 3 14z"/><Path strokeLinecap="round" d="M8 18h8m.412-8.03l.665-1.663A2 2 0 0 0 15.55 5.59l-.425-.07a19 19 0 0 0-6.247 0l-.426.07a2 2 0 0 0-1.528 2.716L7.59 9.97c.235.59.87.914 1.486.76c1.92-.48 3.93-.48 5.85 0a1.27 1.27 0 0 0 1.487-.76Zm-6.232-.041l-.676-1.883"/></G></Svg>
);
