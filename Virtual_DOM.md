createRoot? what is it and what does it do?
- what it does is behind the scene it create a DOM like structure
- it does this because it compares react DOM and main DOM and then updates only those elements that have been updated in the UI, whereas what the browser does is that it removes the complete DOM and repaints(i.e the complete DOM is restructured) the whole DOM, this is what is called a page reload.
- Whereas what happens in a virtual DOM is that you can trace the complete DOM in a tree like structure, and only remove those values that have been changed from the DOM and replace them with their new values.
- If an element is dependant on the network, then the particular element may be updated multiple times in a short span of time, what this means is that the element would end up needing to be changed repeatedly. In order to tackle this the react team designed an algorithm that waits for a short period of time and if there are any updates during that period of time the value in the storage is updated and the timer is reset, if there is no update then the element is updated in the DOM.

What is react fibre?
- react fiber is a core algorithm that is used by react to update the virtual DOM. 
- The goal of react fiber is to increase the sustainability of areas like animation, layout and gestures.
- It's main feature is incremental rendering: the ability to split rendering work into chunks and spread it over multiple frames. Other features include: pause, abort, or reuse the work as new updates come in. (a concept called hydration)

what is reconcilliation?
- it is the algorithm that react uses to diff one tree with another to determine which parts need to be changed - browser tree and react tree(that has come from createRoot).
- it is a react algorithm that reconsiders what is to be updated and what isn't.
- reconcilliation is the algorithm behind what is popularly understood as the "virtual DOM"

- update: a change in the data used to render a react app. Usually the result of 'setState'. Eventually results in a re-render.
