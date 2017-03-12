import Vue from 'vue'
import KonamiCode from '../src/vue-konami-code.js'

import assert from 'assert'

Vue.use(KonamiCode)

describe('Konami Code Plugin', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1,2,3].indexOf(4));
        });
    });
})

