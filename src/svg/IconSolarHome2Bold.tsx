import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Path fill={color} fillRule="evenodd" d="M2.52 7.823C2 8.77 2 9.915 2 12.203v1.522c0 3.9 0 5.851 1.172 7.063S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.212S22 17.626 22 13.725v-1.521c0-2.289 0-3.433-.52-4.381c-.518-.949-1.467-1.537-3.364-2.715l-2-1.241C14.111 2.622 13.108 2 12 2s-2.11.622-4.116 1.867l-2 1.241C3.987 6.286 3.038 6.874 2.519 7.823M11.25 18a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0z" clipRule="evenodd"/></Svg>
);
