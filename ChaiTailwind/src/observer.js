export function observeDOM(callback) {
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === 1) {
          callback(node);

          node.querySelectorAll("*").forEach(child => {
            callback(child);
          });
        }
      });
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}