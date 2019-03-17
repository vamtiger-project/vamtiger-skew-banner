import loadScript from '../../node_modules/vamtiger-browser-method/source/load-script';
import { expect } from 'chai';

export default () => describe('vamtiger-skew-banner', function () {
    before(async function () {
        await loadScript({
            src: 'vamtiger-skew-banner.js'
        });
    });

    it('load script', async function() {
        const script = document.head.querySelector('[src="vamtiger-skew-banner.js"]');

        expect(script instanceof HTMLScriptElement).to.be.true;
    });
});