/* global require */

export const openInBrowser = (url, event) => {
  var shell = require('electron').shell
  event.preventDefault()
  shell.openExternal(url)
}

export const parseTestKeys = (testKeys) => {
  let parsedTestKeys = null
  try {
    parsedTestKeys = JSON.parse(testKeys)
  } catch (e) {
    parsedTestKeys = null
  }
  return parsedTestKeys
}
