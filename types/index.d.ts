import Vue, { VueConstructor, Component, PluginFunction } from 'vue'

declare const Transitions: Transitions
export default Transitions
export declare interface Transitions {
  install: PluginFunction<TransitionOptions>
}

export declare interface TransitionOptions {
    components?: { name: TransitionName }[]
}

export type TransitionName =
  'fade-transition' |
  'zoom-center-transition' |
  'zoom-x-transition' |
  'zoom-y-transition' |
  'collapse-transition' |
  'scale-transition' |
  'slide-y-up-transition' |
  'slide-y-down-transition' |
  'slide-x-left-transition' |
  'slide-x-right-transition'

export const FadeTransition: Component
export const ZoomCenterTansition: Component
export const ZoomXTransition: Component
export const ZoomYTransition: Component
export const CollapseTransition: Component
export const ScaleTransition: Component
export const SlideYUpTransition: Component
export const SlideYDownTransition: Component
export const SlideXLeftTransition: Component
export const SlideXRightTransition: Component
