import VamtigerSkewContainer from 'vamtiger-skew-container/source/element';
import VamtigerSkewBanner from './element';

export enum StringConstant {
    nothing = ''
}

export enum Selector {
    style = 'style',
    slot = 'slot',
    vamtigerSkewContainer = 'vamtiger-skew-container',
    focusedVamtigerSkewContainer = 'vamtiger-skew-container[data-focus]'
}

export enum DataAttribute {
    focus = 'focus',
    leftTemplate = 'leftTemplate',
    leftTemplateSelector = 'leftTemplateSelector',
    centerTemplate = 'centerTemplate',
    centerTemplateSelector = 'centerTemplateSelector',
    rightTemplate = 'rightTemplate',
    rightTemplateSelector = 'rightTemplateSelector'
}

export enum ObservedAttributes {

}

export interface IGetTemplate {
    selector: Selector;
    attributes?: IAttributes;
    properties?: IProperties;
}

export interface IAttributes {
    id?: string;
    for?: string;
}

export interface IProperties {
    innerHTML?: string;
    name?: string;
}

export interface ILoadTemplates {
    element: VamtigerSkewBanner;
}

export interface IToggleFocusEvent extends Pick<MouseEvent, Exclude<keyof MouseEvent, 'currentTarget'>> {
    currentTarget: VamtigerSkewBanner
}

export type AttributesKey = keyof IAttributes;

export type ObservedAttribute = keyof typeof ObservedAttributes;

export type GetTemplate<P extends IGetTemplate> =
    P['selector'] extends Selector.style ? HTMLStyleElement :
    P['selector'] extends Selector.slot ? HTMLSlotElement :
    P['selector'] extends Selector.vamtigerSkewContainer ? VamtigerSkewContainer :
    null;