import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Path fill={color} d="M12.026 9.965a5 5 0 0 0-6.992-6.992zm-1.061 1.061a5 5 0 0 1-6.991-6.992zm10.979 5.224a5 5 0 0 0-9.887 0zm0 1.5h-9.888a5 5 0 0 0 9.888 0"/></Svg>
);
