import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Path fill={color} fillRule="evenodd" d="M19 11.75v1.5h-2a.75.75 0 0 0 0 1.5h2v1.133c0 .76-.32 1.487-.88 2.001a9.02 9.02 0 0 1-5.37 2.352v1.014a.75.75 0 0 1-1.5 0v-1.014a9.02 9.02 0 0 1-5.37-2.352a2.72 2.72 0 0 1-.88-2V8c0-1.886 0-2.828.586-3.414S7.114 4 9 4h6c1.886 0 2.828 0 3.414.586c.503.502.574 1.267.584 2.664H17a.75.75 0 0 0 0 1.5h2v1.5h-2a.75.75 0 0 0 0 1.5zM12 14c1.105 0 2-.933 2-2.083c0-.72-.783-1.681-1.37-2.3a.86.86 0 0 0-1.26 0c-.587.619-1.37 1.58-1.37 2.3c0 1.15.895 2.083 2 2.083" clipRule="evenodd"/><Path fill={color} d="M13.733 3a2 2 0 0 0-3.465 0z"/></Svg>
);
