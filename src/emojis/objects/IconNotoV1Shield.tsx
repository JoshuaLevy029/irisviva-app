import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><Defs><Path id="notoV1Shield0" fill="#106ba4" d="M64 128C7.63 95 7.19 30 7.19 30L64 0l27.12 14.32L120.81 30s0 63.5-56.81 98"/></Defs><Use href="#notoV1Shield0"/><Use href="#notoV1Shield0"/><Use href="#notoV1Shield0"/><Use href="#notoV1Shield0"/><Use href="#notoV1Shield0"/><Use href="#notoV1Shield0"/><Use href="#notoV1Shield0"/><Use href="#notoV1Shield0"/><Path fill="#fff" d="M63.93 117.36C25.61 92.12 18.04 49.99 16.55 35.23L64 10.18l47.47 25.07c-.59 5.96-2.17 16.44-6.47 28.44c-8.12 22.7-21.93 40.74-41.07 53.67"/><Path fill="#37bfe9" d="M64 117.36V10.18l47.51 25.07c-.59 5.96-2.15 16.44-6.45 28.44C96.93 86.39 83 104.43 64 117.36"/></Svg>
);
