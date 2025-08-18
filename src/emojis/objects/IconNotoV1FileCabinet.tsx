import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><Path fill="#066da3" d="M104.66 117c0 1.65-1.35 3-3 3H29.23c-1.65 0-3-1.35-3-3V11c0-1.65 1.35-3 3-3h72.43c1.65 0 3 1.35 3 3z"/><Path fill="#42c0e7" d="M30.66 12.94h69.58v47.34H30.66z"/><Path fill="#86d4ee" d="M30.66 12.94h69.58v4.14H30.66z"/><Path fill="#42c0e7" d="M30.66 65.24h69.58v49.65H30.66z"/><Path fill="#86d4ee" d="M30.66 65.24h69.58v4.14H30.66z"/><Path fill="#066da3" d="M55.13 99.1c-1.1 0-2 .83-2 1.85s.9 1.85 2 1.85h20.64c1.1 0 2-.83 2-1.85s-.9-1.85-2-1.85z"/><Path fill="#fff2d3" d="M56.07 81.32h18.76v10.46H56.07z"/><Path fill="#f9b719" d="M72.29 81.32v8.05H58.61v-8.05h-2.54v10.45h18.76V81.32z"/><Path fill="#066da3" d="M55.13 45.66c-1.1 0-2 .83-2 1.85s.9 1.85 2 1.85h20.64c1.1 0 2-.83 2-1.85s-.9-1.85-2-1.85z"/><Path fill="#fff2d3" d="M56.07 27.87h18.76v10.46H56.07z"/><Path fill="#f9b719" d="M72.29 27.87v8.05H58.61v-8.05h-2.54v10.45h18.76V27.87z"/></Svg>
);
