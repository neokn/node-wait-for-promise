'use strict'
module.exports = function(promise) {

    let done = false
    let resolve = null
    let reject = null

    promise.then(rs => {
        resolve = rs
    }).catch(rj => {
        reject = rj
    }).then(() => {
        done = true
    })

    require('deasync').loopWhile(() => {
        return !done
    })

    if (reject != null) {
        throw reject
    }
    return resolve
}
