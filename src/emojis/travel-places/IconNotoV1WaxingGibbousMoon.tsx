import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><Defs><Path id="notoV1WaxingGibbousMoon0" d="M127.76 64c0 35.22-28.54 63.76-63.77 63.76C28.79 127.76.24 99.22.24 64S28.79.24 64 .24c35.22 0 63.76 28.54 63.76 63.76"/></Defs><Use fill="#2f2f2f" href="#notoV1WaxingGibbousMoon0"/><ClipPath id="notoV1WaxingGibbousMoon1"><Use href="#notoV1WaxingGibbousMoon0"/></ClipPath><Path fill="#fcc21b" d="M142.84 64c0 35.22-25.83 63.76-57.68 63.76c-31.86 0-57.69-28.54-57.69-63.76S53.29.23 85.16.23c31.85.01 57.68 28.55 57.68 63.77" clipPath="url(#notoV1WaxingGibbousMoon1)"/></Svg>
);
