import type { SkCanvas } from "./Canvas";
import { SkRect } from "./Rect";

export interface Skottie {
    readonly fps: number;
    readonly duration: number;
    readonly seek: (time: number) => void;
    readonly render: (canvas: SkCanvas, rect: SkRect) => void;
}