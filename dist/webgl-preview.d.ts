import { Parser, Layer } from './gcode-parser';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Scene, PerspectiveCamera, WebGLRenderer, Group } from 'three';
declare type RenderLayer = {
    extrusion: number[];
    travel: number[];
    z: number;
};
declare type Vector3 = {
    x: number;
    y: number;
    z: number;
};
declare type Point = Vector3;
declare type BuildVolume = Vector3;
export declare type GCodePreviewOptions = {
    canvas?: HTMLCanvasElement;
    endLayer?: number;
    startLayer?: number;
    targetId?: string;
    topLayerColor?: number;
    lastSegmentColor?: number;
    lineWidth?: number;
    buildVolume?: BuildVolume;
    initialCameraPosition?: number[];
    debug?: boolean;
    allowDragNDrop?: boolean;
};
export declare class WebGLPreview {
    parser: Parser;
    targetId: string;
    scene: Scene;
    camera: PerspectiveCamera;
    renderer: WebGLRenderer;
    group: Group;
    backgroundColor: number;
    travelColor: number;
    extrusionColor: number;
    topLayerColor?: number;
    lastSegmentColor?: number;
    container: HTMLElement;
    canvas: HTMLCanvasElement;
    renderExtrusion: boolean;
    renderTravel: boolean;
    lineWidth?: number;
    startLayer?: number;
    endLayer?: number;
    singleLayerMode: boolean;
    buildVolume: BuildVolume;
    initialCameraPosition: number[];
    debug: boolean;
    allowDragNDrop: boolean;
    controls: OrbitControls;
    private disposables;
    constructor(opts: GCodePreviewOptions);
    get layers(): Layer[];
    get maxLayerIndex(): number;
    get minLayerIndex(): number;
    animate(): void;
    processGCode(gcode: string | string[]): void;
    render(): void;
    drawBuildVolume(): void;
    clear(): void;
    resize(): void;
    addLineSegment(layer: RenderLayer, p1: Point, p2: Point, extrude: boolean): void;
    addLine(vertices: number[], color: number): void;
    addThickLine(vertices: number[], color: number): void;
    private _enableDropHandler;
    _readFromStream(stream: ReadableStream): Promise<void>;
}
export {};
