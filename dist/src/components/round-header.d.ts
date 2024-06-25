import { Options } from '../types';
export interface RoundHeaderProps {
    x: number;
    y?: number;
    width: number;
    roundHeader: Options['roundHeader'];
    canvasPadding: number;
    numOfRounds: number;
    tournamentRoundText: string;
    columnIndex: number;
}
export default function RoundHeader({ x, y, width, roundHeader, canvasPadding, numOfRounds, tournamentRoundText, columnIndex, }: RoundHeaderProps): import("react/jsx-runtime").JSX.Element;
