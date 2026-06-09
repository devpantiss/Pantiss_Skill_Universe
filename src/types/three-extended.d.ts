declare module "three/examples/jsm/loaders/GLTFLoader" {
    import { AnimationClip, Camera, Group, Loader, LoadingManager } from "three";

    export interface GLTF {
      animations: AnimationClip[];
      asset: object;
      cameras: Camera[];
      parser: unknown;
      scene: Group;
      scenes: Group[];
      userData: Record<string, unknown>;
    }
  
    export class GLTFLoader extends Loader {
      constructor(manager?: LoadingManager);
      load(
        url: string,
        onLoad: (gltf: GLTF) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void
      ): void;
    }
  }
  
  declare module "three/examples/jsm/controls/OrbitControls" {
    import { Camera, EventDispatcher } from "three";
  
    export class OrbitControls extends EventDispatcher {
      constructor(object: Camera, domElement?: HTMLElement);
      enableZoom: boolean;
      autoRotate: boolean;
      autoRotateSpeed: number;
      update(): void;
    }
  }
  
