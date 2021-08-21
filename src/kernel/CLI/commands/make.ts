exports.command = 'make <command>'
exports.desc = 'Make what you specify'
exports.builder = (yargs) => yargs.commandDir('make_commands', { extensions: [ 'js', 'ts' ] })
// eslint-disable-next-line @typescript-eslint/no-empty-function
exports.handler = () => {}
