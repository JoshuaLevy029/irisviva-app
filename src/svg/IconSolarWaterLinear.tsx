import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Path fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 8.786c-1.588-.352-2.404-1.216-3.08-2.178c-.424-.602-1.355-.565-1.815.013C16.055 7.943 14.485 9 12 9C9.493 9 7.918 7.655 6.867 6.389c-.44-.53-1.28-.522-1.665.043C4.5 7.462 3.684 8.412 2 8.786m20 10c-1.588-.352-2.404-1.216-3.08-2.178c-.424-.602-1.355-.566-1.815.013C16.055 17.943 14.485 19 12 19c-2.507 0-4.082-1.345-5.133-2.611c-.44-.53-1.28-.522-1.665.043c-.701 1.03-1.518 1.98-3.202 2.354m20-5c-1.588-.352-2.404-1.216-3.08-2.178c-.424-.602-1.355-.566-1.815.013C16.055 12.943 14.485 14 12 14c-2.507 0-4.082-1.345-5.133-2.611c-.44-.53-1.28-.522-1.665.043c-.701 1.03-1.518 1.98-3.202 2.354"/></Svg>
);
