import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Path fill={color} d="M8.25 5c-2.317.006-3.557.063-4.472.674a4 4 0 0 0-1.104 1.104C2 7.787 2 9.19 2 12s0 4.213.674 5.222a4 4 0 0 0 1.104 1.104c.915.611 2.155.668 4.472.674v-4.094a3.001 3.001 0 0 1 0-5.811zm1.5 14h4.5V5h-4.5zm6-14v4.095a3.001 3.001 0 0 1 0 5.81V19c2.317-.006 3.558-.063 4.472-.674a4 4 0 0 0 1.104-1.104C22 16.213 22 14.81 22 12s0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104c-.915-.611-2.155-.668-4.472-.673"/></Svg>
);
