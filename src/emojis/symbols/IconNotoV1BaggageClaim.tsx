import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><Path fill="#ed6c30" d="M119.07 92.37c0 6.76-5.53 12.29-12.29 12.29H21.22c-6.75 0-12.29-5.53-12.29-12.29V41.66c0-6.76 5.54-12.29 12.29-12.29h85.56c6.76 0 12.29 5.53 12.29 12.29z"/><Path fill="#ed6c30" d="M79.58 49.66H48.43c-2.99 0-5.42-2.43-5.42-5.42V18.67c0-2.99 2.43-5.42 5.42-5.42h31.15c2.99 0 5.42 2.43 5.42 5.42v25.56c0 3-2.43 5.43-5.42 5.43M53.85 38.82h20.3V24.09h-20.3z"/><Path fill="#fff" d="M25.34 29.36h9.01v75.29h-9.01zm68.32 0h9.02v75.29h-9.02z"/><G fill="#ed6c30"><Ellipse cx="4.36" cy="117.05" rx="4.11" ry="4.1"/><Circle cx="16.29" cy="117.05" r="4.1"/><Circle cx="28.22" cy="117.05" r="4.1"/><Circle cx="40.15" cy="117.05" r="4.1"/><Ellipse cx="52.07" cy="117.05" rx="4.11" ry="4.1"/><Path d="M68.11 117.05a4.106 4.106 0 0 1-8.21 0c0-2.27 1.83-4.1 4.11-4.1c2.26 0 4.1 1.84 4.1 4.1m11.93 0a4.106 4.106 0 0 1-8.21 0c0-2.27 1.83-4.1 4.11-4.1c2.26 0 4.1 1.84 4.1 4.1"/><Circle cx="87.86" cy="117.05" r="4.1"/><Circle cx="99.79" cy="117.05" r="4.1"/><Circle cx="111.72" cy="117.05" r="4.1"/><Path d="M127.75 117.05a4.106 4.106 0 0 1-8.21 0a4.1 4.1 0 0 1 4.1-4.1c2.27 0 4.11 1.84 4.11 4.1"/></G></Svg>
);
