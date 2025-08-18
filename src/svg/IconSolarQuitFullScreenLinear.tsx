import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Path fill="none" stroke={color} strokeLinecap="round" strokeWidth="1.5" d="M14 22c0-3.771 0-5.657 1.172-6.828S18.229 14 22 14M2 14c3.771 0 5.657 0 6.828 1.172S10 18.229 10 22M2 10c3.771 0 5.657 0 6.828-1.172S10 5.771 10 2m12 8c-3.771 0-5.657 0-6.828-1.172S14 5.771 14 2"/></Svg>
);
