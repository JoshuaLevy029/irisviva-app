import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Defs><Mask id="solarMinimalisticMagniferZoomOutBold0"><G fill="none"><Path fill="#fff" d="M20.128 11.143c0 5.05-4.058 9.143-9.064 9.143S2 16.192 2 11.143S6.058 2 11.064 2s9.064 4.093 9.064 9.143"/><Path fill="#000" fillRule="evenodd" d="M8.294 11.143a.76.76 0 0 1 .756-.762h4.028a.76.76 0 0 1 .756.762a.76.76 0 0 1-.756.762H9.05a.76.76 0 0 1-.756-.762" clipRule="evenodd"/><Path fill="#fff" fillRule="evenodd" d="M17.82 19.7a1.77 1.77 0 0 1 1.9-1.917c.189.016.414.084.643.154l.066.02l.06.018c.211.063.42.126.58.212a1.786 1.786 0 0 1 .638 2.55c-.1.151-.255.307-.41.464l-.045.044l-.044.045c-.156.157-.31.313-.46.414a1.754 1.754 0 0 1-2.528-.643a3.3 3.3 0 0 1-.21-.585l-.018-.06l-.02-.067c-.07-.232-.137-.459-.153-.648" clipRule="evenodd"/></G></Mask></Defs><Path fill={color} d="M0 0h24v24H0z" mask="url(#solarMinimalisticMagniferZoomOutBold0)"/></Svg>
);
