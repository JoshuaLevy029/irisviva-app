import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Path fill={color} d="m20.91 13.332l-7.578 7.577a5.41 5.41 0 0 0 7.577-7.577"/><Path fill={color} fillRule="evenodd" d="m12.235 19.885l7.65-7.65l-8.12-8.12l-7.65 7.65zm-2.356-8.592a1 1 0 1 1-1.414 1.414a1 1 0 0 1 1.414-1.414m2.828 4.243a1 1 0 1 0-1.414-1.415a1 1 0 0 0 1.414 1.415m0-7.071a1 1 0 1 1-1.414 1.414a1 1 0 0 1 1.414-1.414m2.828 4.242a1 1 0 1 0-1.414-1.414a1 1 0 0 0 1.414 1.414" clipRule="evenodd"/><Path fill={color} d="m3.09 10.668l7.578-7.577a5.41 5.41 0 0 0-7.577 7.577"/></Svg>
);
