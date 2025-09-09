import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Path fill={color} fillRule="evenodd" d="M7.907 4.256a3.001 3.001 0 1 0-3.651 3.651A1 1 0 0 0 4.25 8v8q0 .048.006.093a3.001 3.001 0 1 0 3.651 3.651q.045.006.093.006h8a1 1 0 0 0 .093-.006a3.001 3.001 0 1 0 3.651-3.651A1 1 0 0 0 19.75 16V8a1 1 0 0 0-.006-.093a3.001 3.001 0 1 0-3.651-3.651A1 1 0 0 0 16 4.25H8a1 1 0 0 0-.093.006M5.744 7.907q.006.045.006.093v8a1 1 0 0 1-.006.093a3 3 0 0 1 2.163 2.163A1 1 0 0 1 8 18.25h8a1 1 0 0 1 .093.006a3 3 0 0 1 2.163-2.163A1 1 0 0 1 18.25 16V8q0-.048.006-.093a3 3 0 0 1-2.163-2.163A1 1 0 0 1 16 5.75H8a1 1 0 0 1-.093-.006a3 3 0 0 1-2.163 2.163" clipRule="evenodd"/></Svg>
);
