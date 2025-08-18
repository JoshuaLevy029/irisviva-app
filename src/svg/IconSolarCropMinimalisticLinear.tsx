import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color} strokeLinecap="round" strokeWidth="1.5"><Path d="M22 19h-9c-3.771 0-5.657 0-6.828-1.172S5 14.771 5 11V2"/><Path d="M8 5h3c3.771 0 5.657 0 6.828 1.172S19 9.229 19 13v3M2 5h3m14 14v3"/></G></Svg>
);
