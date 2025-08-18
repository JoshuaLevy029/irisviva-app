import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color} strokeWidth="1.5"><Path strokeLinecap="round" d="M14.5 17.1L8 6m10 10.2c0 .994-.84 1.8-1.875 1.8s-1.875-.806-1.875-1.8s.84-1.8 1.875-1.8S18 15.206 18 16.2Zm-8.5.9L16 6M6 16.2c0 .994.84 1.8 1.875 1.8s1.875-.806 1.875-1.8s-.84-1.8-1.875-1.8S6 15.206 6 16.2Z"/><Path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"/></G></Svg>
);
