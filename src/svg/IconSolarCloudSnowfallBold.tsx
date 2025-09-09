import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Path fill={color} fillRule="evenodd" d="M12.001 14.25a.75.75 0 0 1 .75.75v2.163l1.873-1.081a.75.75 0 1 1 .75 1.299l-1.873 1.081l1.876 1.083a.75.75 0 1 1-.75 1.3L12.75 19.76V22a.75.75 0 0 1-1.5 0v-2.239l-1.876 1.083a.75.75 0 0 1-.75-1.299l1.876-1.083l-1.873-1.081a.75.75 0 0 1 .75-1.3l1.873 1.082V15a.75.75 0 0 1 .75-.75" clipRule="evenodd"/><Path fill={color} d="M7.564 18.462a2.25 2.25 0 0 1 2.218-3.841a2.25 2.25 0 0 1 4.437 0a2.25 2.25 0 0 1 2.218 3.841L16 19l.889-.031C19.76 18.671 22 16.27 22 13.353c0-2.472-1.607-4.573-3.845-5.338C17.837 5.194 15.415 3 12.476 3C9.32 3 6.762 5.528 6.762 8.647c0 .69.125 1.35.354 1.962a4.4 4.4 0 0 0-.83-.08C3.919 10.53 2 12.426 2 14.765S3.919 19 6.286 19H8z"/></Svg>
);
