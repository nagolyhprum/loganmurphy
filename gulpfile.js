const gulp = require('gulp')
const { spawn } = require('child_process')

const log = _ => {
  process.stdout.write(_)
  return _
}

const program = (...args) => new Promise((resolve, reject) => {
  console.log(...args)
  const program = spawn(args[0], args.slice(1))
  const out = []
  const err = []
  program.stdout.on('data', it => out.push(log(it.toString())))
  program.stderr.on('data', it => err.push(log(it.toString())))
  program.on('close', code => code ? reject(new Error(err.join(''))) : resolve(out.join('')))
})

const npm = (script, ...args) => program('npm', 'run', script, '--', ...args)
const clean = () => program('rm', '-rf', 'dist')
const serve = () => npm('parcel', 'serve', '-p', '8080', '--hmr-port', '4321', '--open', '--no-cache', '--no-source-maps', 'src/index.html')
const dev = gulp.series(clean, serve)
gulp.task('default', dev)
gulp.task('dev', dev)

const test = (...args) => () => npm('jest', ...args)
const standard = (...args) => () => npm('standard', ...args)
const audit = (...args) => () => program('npm', 'audit', ...args)
const verify = gulp.series(audit(), standard(), test())

const build = () => npm('parcel', 'build', '--no-cache', '--no-source-maps', 'src/index.html')
const s3 = () =>
  program('aws', 's3', 'sync', 'dist', 's3://loganmurphy.us', '--delete').then(
    () => program('aws', 's3', 'sync', 'seo', 's3://loganmurphy.us')
  )

const deploy = gulp.series(verify, clean, build, s3)
gulp.task('verify', verify)
gulp.task('deploy', deploy)

const fix = gulp.series(audit('--fix'), standard('--fix'))
gulp.task('fix', fix)
