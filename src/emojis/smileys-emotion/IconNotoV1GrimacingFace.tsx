import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><Path fill="#fcc21b" d="M64 12.81C1.88 12.81.41 82.46.41 96.25c0 13.77 28.47 24.94 63.59 24.94s63.59-11.17 63.59-24.94c0-13.79-1.46-83.44-63.59-83.44"/><Ellipse cx="43.95" cy="56.46" fill="#2f2f2f" rx="7.92" ry="9.63"/><Ellipse cx="84.03" cy="56.46" fill="#2f2f2f" rx="7.92" ry="9.63"/><Path fill="#fff" d="M95 101.6H33c-7.7 0-14-6.3-14-14s6.3-14 14-14h62c7.7 0 14 6.3 14 14s-6.3 14-14 14"/><Path fill="#2f2f2f" d="M95 77.6c5.51 0 10 4.49 10 10s-4.49 10-10 10H33c-5.51 0-10-4.49-10-10s4.49-10 10-10zm0-4H33c-7.7 0-14 6.3-14 14s6.3 14 14 14h62c7.7 0 14-6.3 14-14s-6.3-14-14-14"/><G fill="#2f2f2f"><Path d="M47.44 75.17h3.12v25h-3.12zm-15 0h3.12v25h-3.12zm60.01 0h3.12v25h-3.12zm-15.01 0h3.12v25h-3.12zm-15 0h3.12v25h-3.12z"/><Path d="M20.49 86.04h87.01v3.12H20.49z"/></G></Svg>
);
