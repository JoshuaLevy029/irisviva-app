import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Path fill={color} fillRule="evenodd" d="M19.5 9.56c.033 4.143-3.419 7.973-7.56 7.94c-4.143-.033-7.406-3.918-7.44-8.06A7.355 7.355 0 0 1 11.94 2c4.141.034 7.526 3.419 7.56 7.56m-6.994-4.31a.75.75 0 0 0-.012 1.5a2.285 2.285 0 0 1 2.256 2.256a.75.75 0 0 0 1.5-.012a3.785 3.785 0 0 0-3.744-3.744" clipRule="evenodd"/><Path fill={color} d="M14.167 18.214c.332 1.063-.356 2.132-1.417 2.348V22a.75.75 0 0 1-1.5 0v-1.438c-1.06-.216-1.75-1.285-1.417-2.348l.007-.021a7.74 7.74 0 0 0 4.32-.002z"/></Svg>
);
