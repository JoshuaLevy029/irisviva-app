import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none"><Path stroke={color} strokeLinecap="round" strokeWidth="1.5" d="m12.765 20.416l-9.18-9.181m9.18 9.18a5.41 5.41 0 1 0 7.65-7.65m-7.65 7.65l7.65-7.65m0 0l-9.18-9.18m0 0a5.41 5.41 0 0 0-7.65 7.65m7.65-7.65l-7.65 7.65"/><Circle cx="9.172" cy="12" r="1" fill={color} transform="rotate(-45 9.172 12)"/><Circle cx="12" cy="14.829" r="1" fill={color} transform="rotate(-45 12 14.829)"/><Circle cx="12" cy="9.171" r="1" fill={color} transform="rotate(-45 12 9.171)"/><Circle cx="14.828" cy="12" r="1" fill={color} transform="rotate(-45 14.828 12)"/></G></Svg>
);
