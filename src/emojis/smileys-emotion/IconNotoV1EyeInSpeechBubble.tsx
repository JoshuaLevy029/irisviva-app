import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><Path fill="#78a3ad" d="M64 19.39c-29.26 0-52.43 25.97-61.74 38.24a10.366 10.366 0 0 0 0 12.55c9.31 12.27 32.48 38.24 61.74 38.24s52.43-25.97 61.74-38.24c2.82-3.71 2.82-8.83 0-12.55C116.43 45.37 93.26 19.39 64 19.39"/><Circle cx="64" cy="63.91" r="28.3" fill="#fff"/><Circle cx="64" cy="63.91" r="16.05" fill="#64878e"/><Path fill="#78a3ad" d="m86.73 102.79l22.12 10.56c2.53 1.21 5.24-1.29 4.24-3.91l-8.4-22.01z"/></Svg>
);
