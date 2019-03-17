import VamtigerSkewContainer from 'vamtiger-skew-container/source/element';
import {
    IToggleFocusEvent,
    Selector,
    StringConstant
} from './types';

const { nothing } = StringConstant;

export default function ({ currentTarget: element }: IToggleFocusEvent) {
    const { dataset } = element;
    const focusedVamtigerSkewContainer = element.querySelector<VamtigerSkewContainer>(Selector.focusedVamtigerSkewContainer);

    if (focusedVamtigerSkewContainer) {
        dataset.focus = nothing
    } else {
        delete dataset.focus;
    }
}