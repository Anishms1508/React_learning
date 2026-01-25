function customRender(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.prop.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;

        domElement.setAttribute(prop, reactElement.props[prop])
    }
    // we have made this loop to avoid typing the same line again and again as shown in the first example
    // react ke andar bhi ek method likha hua hai jo continuously aapka ye element ko create krte rhete hai.
    // aapke uss element ka ek tree graph bnta rheta hai(like below)

    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click me to go to Google'
}
// end of the day aap jo bhi element dete hai wo issi tarha se evaluate hota hai

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)
// and finally jabh aap bolte ho ki react ke andar usse inject krdo usse kr dete hai(like above)