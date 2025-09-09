import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Path fill={color} d="M14.87 2.224a.76.76 0 1 0-1.078 1.072l.694.697l-6.95 6.98l.69.076a2.995 2.995 0 0 1 2.642 2.65c.058.53.395.985.878 1.195l1.967.816l6.22-6.246l.768.772a.76.76 0 0 0 1.078-1.072zM4.128 14.396l2.038-2.047l1.892.211a1.475 1.475 0 0 1 1.299 1.306c.118 1.073.802 2 1.792 2.426l1.405.583l-2.98 2.992a3.84 3.84 0 0 1-5.446 0a3.88 3.88 0 0 1 0-5.471"/></Svg>
);
