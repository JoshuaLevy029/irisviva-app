import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><Defs><Path id="notoV1FirstQuarterMoon0" d="M127.76 64c0 35.22-28.54 63.77-63.77 63.77C28.79 127.76.24 99.22.24 64C.24 28.79 28.79.24 64 .24c35.22 0 63.76 28.55 63.76 63.76"/></Defs><Use fill="#2f2f2f" href="#notoV1FirstQuarterMoon0"/><ClipPath id="notoV1FirstQuarterMoon1"><Use href="#notoV1FirstQuarterMoon0"/></ClipPath><Path fill="#fcc21b" d="M64-17.32h88.89v158.99H64z" clipPath="url(#notoV1FirstQuarterMoon1)"/></Svg>
);
