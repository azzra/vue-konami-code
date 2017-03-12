var install = function (Vue, options) {
  const kode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
  const length = kode.length
  var pos = 0
  document.addEventListener('keydown', function (event) {
    if (event.keyCode === kode[pos++]) {
      if (length === pos) {
        options.callback()
        pos = 0 // ability to start over
        return false
      }
    } else {
      pos = 0
    }
  }, false)
}

typeof module !== 'undefined' && typeof module.exports !== 'undefined' && (module.exports = install)
