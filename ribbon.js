'use strict'
var div = document.createElement('div')
div.innerHTML += `
    <link rel="stylesheet" href="//r.gavinpereira.in/css/pex.css">
    <a href="//gavinpereira.in" target="_blank"
    class="pex-bottom-5 pex-right-0 pex-flex pex-items-center pex-bg-white pex-rounded-l-full pex-z-40 pex-fixed pex-p-3 pex-shadow hover:pex-shadow-lg pex-transition-opacity pex-group pex-no-underline pex-font-sans text-black visited:text-black focus:text-black">
    <img src="//gavinpereira.in/logo" alt="Gavin Pereira logo" class="pex-h-8">
    <span class="pex-w-0 pex-p-0 group-hover:pex-pl-3 group-hover:pex-w-auto group-focus:pex-pl-3 group-focus:pex-w-auto pex-overflow-hidden pex-transition-all">Gavin&nbsp;Pereira</span>
    </a>
`
document.body.appendChild(div)