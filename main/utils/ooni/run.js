const { Ooniprobe } = require('./ooniprobe')

module.exports = async ({testGroupName, options}) => {
  console.log(Ooniprobe)
  const ooni = new Ooniprobe({
    binaryPath: '/Users/x/code/OONI/ooniprobe-cli/packed/ooni'
  })
  console.log(global)
  windows.main.send('starting', testGroupName)
  ooni.on('message', (msg) => {
    console.log('i got a msg', msg)
    windows.main.send('ooni', msg)
  })
  const argv = []
  await ooni.run({testGroupName, argv})
}