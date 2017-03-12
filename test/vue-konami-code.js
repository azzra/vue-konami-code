import Vue from 'vue'
import KonamiCode from '../src/vue-konami-code.js'

import assert from 'assert'
import sinon from 'sinon'

describe('Konami Code Plugin', function() {

  describe('#callback', function() {

    var dispatchEvent = function(keyCode) {
      var keydown = document.createEvent('Event');
      keydown.initEvent('keydown', true, true);
      keydown.keyCode = keyCode
      document.dispatchEvent(keydown)
    }

    var callback
    before(function() {
      callback = sinon.spy()
      Vue.use(KonamiCode, {'callback': callback})
    })

    it('should not be executed', function() {
      dispatchEvent(38)
      dispatchEvent(38)
      dispatchEvent(40)
      dispatchEvent(40)
      dispatchEvent(37)
      dispatchEvent(39)
      dispatchEvent(37)
      dispatchEvent(39)
      dispatchEvent(66)
      dispatchEvent(66) // diff
      dispatchEvent(65)
      assert(!callback.called)
    })

    it('should be executed', function() {
      var executeCode = function() {
        dispatchEvent(38)
        dispatchEvent(38)
        dispatchEvent(40)
        dispatchEvent(40)
        dispatchEvent(37)
        dispatchEvent(39)
        dispatchEvent(37)
        dispatchEvent(39)
        dispatchEvent(66)
        dispatchEvent(65)
      }

      executeCode()
      assert(callback.calledOnce)
      executeCode()
      assert(callback.calledTwice)
    })

  })

}) 
