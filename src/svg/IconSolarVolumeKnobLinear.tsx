import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none"><Circle cx="12" cy="12" r="5" stroke={color} strokeWidth="1.5"/><Path stroke={color} strokeLinecap="round" strokeWidth="1.5" d="M12 7v4"/><Path fill={color} d="M13 3.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m7.5 9.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-17 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2m3.197-7.718a1 1 0 1 1-1.414 1.415a1 1 0 0 1 1.414-1.415m12.02 12.021a1 1 0 1 1-1.414 1.415a1 1 0 0 1 1.414-1.415m0-10.606a1 1 0 1 1-1.414-1.415a1 1 0 0 1 1.414 1.415M6.697 18.718a1 1 0 1 1-1.414-1.415a1 1 0 0 1 1.414 1.415"/></G></Svg>
);
