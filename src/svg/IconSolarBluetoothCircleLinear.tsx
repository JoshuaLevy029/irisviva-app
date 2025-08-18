import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none"><Path stroke={color} strokeWidth="1.5" d="M14.2 9.593L11 12V7.623c0-.954 0-1.432.302-1.583c.301-.151.682.135 1.444.708L14.2 7.842c.533.401.8.602.8.876c0 .273-.267.474-.8.875Zm0 6.565l-1.454 1.094c-.762.573-1.143.86-1.444.708C11 17.809 11 17.331 11 16.377V12l3.2 2.407c.533.401.8.602.8.875c0 .274-.267.475-.8.876Z"/><Path fill={color} d="M8.48 8.924a.75.75 0 1 0-.96 1.152zm3 2.5l-3-2.5l-.96 1.152l3 2.5z"/><Path fill={color} d="M8.48 15.076a.75.75 0 0 1-.96-1.152zm3-2.5l-3 2.5l-.96-1.152l3-2.5z"/><Circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5"/></G></Svg>
);
