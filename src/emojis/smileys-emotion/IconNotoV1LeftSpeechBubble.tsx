import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><Path fill="#fff" stroke="#2f2f2f" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="6" d="M6 60.67c0 25.22 25.22 45.66 56.33 45.66c11.52 0 22.24-2.8 31.16-7.62c3.52-1.9 26.29 11.93 29.19 9.46c3.12-2.66-13.68-21.67-11.42-24.87c4.7-6.67 7.39-14.4 7.39-22.64C118.66 35.45 93.44 15 62.33 15S6 35.45 6 60.67"/></Svg>
);
