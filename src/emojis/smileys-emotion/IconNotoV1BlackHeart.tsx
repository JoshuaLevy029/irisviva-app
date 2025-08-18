import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><Path d="M90.38 20.11c-11.87 0-22.04 6.52-26.38 16.07c-4.34-9.55-14.51-16.07-26.38-16.07C21.84 20.11 9 31.94 9 46.48C9 66.7 23.86 76.31 38.22 85.59c9.1 5.88 18.5 11.96 23.66 20.66a2.14 2.14 0 0 0 2.07 1.63h.1c.76 0 1.44-.45 1.82-1.11c.07-.12.13-.25.17-.38c5.14-8.78 14.59-14.89 23.74-20.8C104.14 76.31 119 66.7 119 46.48c0-14.54-12.84-26.37-28.62-26.37"/><Path fill="none" stroke="#e1e1e0" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="6" d="M34.11 30.15c-5.75 1.03-9.92 4.39-11.91 9.34"/></Svg>
);
