import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color} strokeWidth="1.5"><Path d="M17.667 2H6.333c-.31 0-.464 0-.594.012c-1.45.133-2.6 1.34-2.728 2.861C3 5.01 3 5.173 3 5.497V20.26c0 .872 1.059 1.243 1.558.544a.84.84 0 0 1 1.384 0l.433.606a1.367 1.367 0 0 0 2.25 0a1.367 1.367 0 0 1 2.25 0a1.367 1.367 0 0 0 2.25 0a1.367 1.367 0 0 1 2.25 0a1.367 1.367 0 0 0 2.25 0l.433-.605a.84.84 0 0 1 1.384 0c.5.698 1.558.327 1.558-.545V5.497c0-.324 0-.487-.011-.624c-.127-1.521-1.277-2.728-2.727-2.861C18.13 2 17.976 2 17.667 2Z"/><Path strokeLinecap="round" d="M7.5 15.5h9M14 8l-4 4m0-4l4 4"/></G></Svg>
);
