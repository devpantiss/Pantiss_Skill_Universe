declare module "three/examples/jsm/loaders/GLTFLoader" {
    import { Loader, LoadingManager } from "three";
  
    export class GLTFLoader extends Loader {
      constructor(manager?: LoadingManager);
      load(
        url: string,
        onLoad: (gltf: any) => void,
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
  