export interface SimulationOptions {
    loop: ControlLoop;
    origin: Location;
    locationsOfInterest: Array<LocationOfInterest>;
    obstacles?: Array<{
        latitude: number;
        longitude: number;
        radius: number;
    }>;
    renderingOptions: RenderingOptions;
    physicalConstraints?: PhysicalConstraints;
    element: HTMLElement;
}
export interface VehicleOptions {
    readonly engineCount: number;
}
export interface Location {
    latitude: number;
    longitude: number;
}
export interface LocationOfInterest extends Location {
    label: string;
}
export interface SensorValues {
    location: Location;
    heading: number;
    proximity: Array<number>;
    clock: number;
}
export interface ActuatorValues {
    engines: [number, number] | [number, number, number, number, number, number];
}
declare type EngineError = (value: number) => number;
declare type LocationError = (location: Location) => Location;
declare type HeadingError = (value: number) => number;
declare type ProximityError = (distance: number) => number;
export interface PhysicalOptions {
    readonly errorEngine?: Array<EngineError>;
    readonly errorLocation?: LocationError;
    readonly errorHeading?: HeadingError;
    readonly errorProximity?: ProximityError;
}
export declare type PhysicalConstraints = (vehicle: VehicleOptions) => PhysicalOptions;
export declare type ControlLoop = (sensors: SensorValues, actuators: ActuatorValues) => ActuatorValues;
export interface RenderingOptions {
    width?: number;
    height?: number;
    showGrid?: boolean;
    showTrace?: boolean;
    showCompass?: boolean;
    colorGrid?: string;
    colorTrace?: string;
    colorRover?: string;
    colorMarker?: string;
    colorCompass?: string;
}
export {};
