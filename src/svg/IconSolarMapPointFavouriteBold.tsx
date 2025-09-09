import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Path fill={color} fillRule="evenodd" d="M12 2c-4.418 0-8 3.646-8 8.143c0 4.462 2.553 9.67 6.537 11.531a3.45 3.45 0 0 0 2.926 0C17.447 19.812 20 14.606 20 10.144C20 5.645 16.418 2 12 2M9 8.757c0 1.02 1.165 2.097 2.043 2.765c.42.319.63.478.957.478c.328 0 .537-.16.957-.479C13.835 10.855 15 9.778 15 8.758c0-1.733-1.65-2.38-3-1.041c-1.35-1.339-3-.692-3 1.041" clipRule="evenodd"/></Svg>
);
