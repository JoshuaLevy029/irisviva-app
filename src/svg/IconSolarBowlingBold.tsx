import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Path fill={color} fillRule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m1.5-10a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0M12 5.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m-2.5 4a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0" clipRule="evenodd"/></Svg>
);
