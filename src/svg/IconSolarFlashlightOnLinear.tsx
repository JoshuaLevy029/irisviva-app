import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Path fill="none" stroke={color} strokeLinecap="round" strokeWidth="1.5" d="M15 22v-4.343c0-.818 0-1.226.152-1.594c.153-.367.442-.656 1.02-1.235l3.242-3.242c.29-.29.434-.434.51-.617c.076-.184.076-.389.076-.797V10c0-.943 0-1.414-.293-1.707S18.943 8 18 8H6c-.943 0-1.414 0-1.707.293S4 9.057 4 10v.172c0 .408 0 .613.076.797c.076.183.22.328.51.617l3.242 3.242c.578.579.868.867 1.02 1.235S9 16.84 9 17.657V22m6-6H9m-4.5-5h15M12 5V2M8 5L6 3m10 2l2-2m-6 16v2"/></Svg>
);
