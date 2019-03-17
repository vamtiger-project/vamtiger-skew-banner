import defineCustomElement from '../node_modules/vamtiger-browser-method/source/define-custom-element';
import VamtigerSkewContainer, { name as vamtigerSkewContainerName } from '../node_modules/vamtiger-skew-container/source/element';
import constructor, { name } from './element';

const params = [
    {
        name: vamtigerSkewContainerName,
        constructor: VamtigerSkewContainer
    },
    {
        name,
        constructor
    }
];

params.forEach(currentParams => defineCustomElement(currentParams));