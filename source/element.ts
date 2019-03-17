import loadScript from '../node_modules/vamtiger-browser-method/source/load-script';

import {
    Selector,
    ObservedAttribute
} from './types';
import {
    shadowRoot as shadowRootConfig,
    observedAttributes
} from './config';
import css from './css/document-index';
import getTemplate from './get-template';
import loadTemplates from './load-templates';
import toggleFocus from './toggle-focus';

export const name = 'vamtiger-skew-banner';

css && loadScript({ name, css })
    .catch(console.error);

export default class VamtigerSkewBanner extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow(shadowRootConfig);
        const stylesheet = getTemplate({
            selector: Selector.style
        });
        const slot = getTemplate({
            selector: Selector.slot,
            properties: {
                name
            }
        });
        const elements = [
            stylesheet,
            slot
        ];

        elements.forEach(element => element && shadowRoot.appendChild(element));
    }

    static get observedAttributes() {
        return observedAttributes;
    }

    async connectedCallback() {
        const currentTarget = this;

        await loadTemplates({
            element: this
        });

        this.addEventListener('click', event => toggleFocus({ ...event, currentTarget }));
    }

    attributeChangedCallback(name: ObservedAttribute, oldValue: string, newValue: string) {

    }
}