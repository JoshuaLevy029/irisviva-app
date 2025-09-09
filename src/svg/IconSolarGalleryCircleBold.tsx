import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Path fill={color} d="M17 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0"/><Path fill={color} fillRule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25m-.818 14.112l-4.29-4.29a2.3 2.3 0 0 0-3.14-.104l-1.001.894a9.25 9.25 0 1 1 16.858 5.4l-1.833-1.663a3 3 0 0 0-3.731-.225l-.299.21a2 2 0 0 1-2.564-.222" clipRule="evenodd"/></Svg>
);
