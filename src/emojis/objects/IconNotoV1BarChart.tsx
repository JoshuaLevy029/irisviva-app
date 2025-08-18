import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><Defs><Path id="notoV1BarChart0" d="M37.4 13.08c0-1.72-1.4-3.13-3.12-3.13H22.65c-1.72 0-3.12 1.41-3.12 3.13v112.17H37.4z"/></Defs><Use fill="#ed6c30" href="#notoV1BarChart0"/><Defs><Path id="notoV1BarChart1" d="M73.09 50.56c0-1.72-1.4-3.13-3.12-3.13H58.35c-1.72 0-3.13 1.41-3.13 3.13v74.69h17.87z"/></Defs><Use fill="#006ca2" href="#notoV1BarChart1"/><Defs><Path id="notoV1BarChart2" d="M108.79 30.71c0-1.72-1.41-3.13-3.13-3.13H94.03c-1.71 0-3.12 1.41-3.12 3.13v94.53h17.87V30.71z"/></Defs><Use fill="#fcc21b" href="#notoV1BarChart2"/><Path fill="#2f2f2f" d="M122.63 128H2.76C1.23 128 0 126.77 0 125.24V6.18a2.76 2.76 0 0 1 2.76-2.76a2.75 2.75 0 0 1 2.75 2.76v116.31h117.12a2.76 2.76 0 0 1 2.76 2.76c0 1.52-1.24 2.75-2.76 2.75"/></Svg>
);
