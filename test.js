'use strict'
const GPRibbon = object => {
    const defaults = { theme: 'light', position: 'bottom-right' }
    const prefs = { ...defaults, ...object }
    const div = document.createElement('div')
    const positionSplit = prefs.position.split('-')
    const positionY = positionSplit[0]
    const positionX = positionSplit[1]
    const positionXRev = positionX === 'right' ? 'left' : 'right'
    const bg = prefs.theme === 'light' ? 'white' : 'black'
    const text = prefs.theme === 'light' ? 'black' : 'white'
    div.innerHTML += `
    <link rel="stylesheet" href="//r.gavinpereira.in/css/pex.css">
    <a href="//gavinpereira.in" target="_blank"
    class="pex-${positionY}-5 pex-${positionX}-0 pex-flex pex-items-center pex-bg-${bg} pex-rounded-${positionXRev[0]}-full pex-z-40 pex-fixed pex-p-3 pex-shadow hover:pex-shadow-lg pex-transition-opacity pex-group pex-no-underline pex-font-sans pex-text-${text} visited:pex-text-${text} focus:pex-text-${text} ${positionX[0] === 'r' ? '' : 'pex-flex-row-reverse'}">
    <img src="//gavinpereira.in/logo" alt="Gavin Pereira logo" class="pex-h-8" ${text === 'white' ? 'style="filter:invert(1)"' : ''}>
        <span  class="pex-w-0 pex-p-0 group-hover:pex-p${positionXRev[0]}-3 group-hover:pex-w-auto group-focus:pex-p${positionXRev[0]}-3 group-focus:pex-w-auto pex-overflow-hidden pex-transition-all"> Gavin&nbsp;Pereira</span >
    </a >
    `
    document.body.appendChild(div)
}

