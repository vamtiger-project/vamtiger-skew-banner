import VamtigerSkewContainer from 'vamtiger-skew-container/source/element';
import getElement from 'vamtiger-browser-method/source/get-element';
import {
    ILoadTemplates,
    DataAttribute,
    Selector,
    StringConstant
} from './types';
import { name } from './element';
import getTemplate from './get-template';

const { nothing } = StringConstant;

export default async function ({ element }: ILoadTemplates) {
    const { dataset } = element;
    const {
        [DataAttribute.leftTemplate]: leftTemplate = '',
        [DataAttribute.leftTemplateSelector]: leftTemplateSelector = '',
        [DataAttribute.centerTemplate]: centerTemplate = '',
        [DataAttribute.centerTemplateSelector]: centerTemplateSelector = '',
        [DataAttribute.rightTemplate]: rightTemplate = '',
        [DataAttribute.rightTemplateSelector]: rightTemplateSelector = ''
    } = dataset;
    const templateParams = [
        {
            template: leftTemplate,
            templateSelector: leftTemplateSelector
        },
        {
            template: centerTemplate,
            templateSelector: centerTemplateSelector
        },
        {
            template: rightTemplate,
            templateSelector: rightTemplateSelector
        }
    ];

    let vamtigerSkewContainer: VamtigerSkewContainer | null;

    templateParams.forEach((params, index) => {
        vamtigerSkewContainer = getTemplate({
            selector: Selector.vamtigerSkewContainer
        });

        if (vamtigerSkewContainer) {
            vamtigerSkewContainer.slot = name;

            if (!index) {
                vamtigerSkewContainer.dataset.left = nothing;
            } else if (index === 1) {
                vamtigerSkewContainer.dataset.center = nothing;
            } else {
                vamtigerSkewContainer.dataset.right = nothing;
            }

            Object.assign(vamtigerSkewContainer.dataset, params);

            element.appendChild(vamtigerSkewContainer);
        }
    });
}