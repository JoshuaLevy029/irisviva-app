import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color} strokeLinecap="round" strokeWidth="1.5"><Path strokeLinejoin="round" d="M20 2s-2 4.688-2 8.571c0 1.244.426 2.284 1 3.32c.66 1.193 1.517 2.38 2.146 3.863c.499 1.178.854 2.543.854 4.246M4 2s2 4.688 2 8.571c0 1.244-.426 2.284-1 3.32c-.66 1.193-1.517 2.38-2.146 3.863A10.6 10.6 0 0 0 2 22"/><Path d="M6 13h12M6 11h12m-6 11c.5-1.5 3-4.5 9-4.5M12 22c-.5-1.5-3-4.5-9-4.5"/></G></Svg>
);
