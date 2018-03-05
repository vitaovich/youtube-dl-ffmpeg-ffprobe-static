var os = require('os')
var path = require('path')

var platform = os.platform()
if (platform !== 'linux' && platform !== 'darwin' && platform !== 'win32') {
  console.error('Unsupported platform.')
  process.exit(1)
}

var arch = os.arch()
if (platform === 'darwin' && arch !== 'x64') {
  console.error('Unsupported architecture.')
  process.exit(1)
}

var youtubedlPath = path.join(
  __dirname,
  'bin',
  platform,
  arch,
  platform === 'win32' ? 'youtube-dl.exe' : 'youtube-dl'
)
var binPath = path.join(
  __dirname,
  'bin',
  platform,
  arch,
)

exports.path = youtubedlPath;
exports.binPath = binPath;
