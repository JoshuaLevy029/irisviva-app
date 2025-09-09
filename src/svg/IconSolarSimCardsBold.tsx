import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Path fill={color} d="M20.828 16.828C22 15.657 22 13.771 22 10a3.86 3.86 0 0 0-1.136-2.731l-4.133-4.133A3.86 3.86 0 0 0 14 2c-3.771 0-5.657 0-6.83 1.172c-.377.377-.633.83-.807 1.395C7.371 4.5 8.55 4.5 9.896 4.5H10c1.427 0 2.789.571 3.792 1.575l4.133 4.133A5.36 5.36 0 0 1 19.5 14v.104c0 1.346 0 2.525-.067 3.532c.565-.174 1.018-.43 1.395-.808"/><Path fill={color} fillRule="evenodd" d="M10 22c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14s0-5.657 1.172-6.828S6.229 6 10 6a3.86 3.86 0 0 1 2.731 1.136l4.133 4.133A3.86 3.86 0 0 1 18 14c0 3.771 0 5.657-1.172 6.828S13.771 22 10 22m-2.707-3.293C7.586 19 8.057 19 9 19h.5v-5H9c-.943 0-1.414 0-1.707.293S7 15.057 7 16v1c0 .943 0 1.414.293 1.707m5.414 0C12.414 19 11.943 19 11 19h-.5v-2H13c0 .943 0 1.414-.293 1.707M11 14c.943 0 1.414 0 1.707.293S13 15.057 13 16h-2.5v-2z" clipRule="evenodd"/></Svg>
);
