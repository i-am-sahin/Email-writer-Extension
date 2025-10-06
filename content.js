console.log("Email Writer!");
const observer = new MutationObserver((mutations) =>{
     for(const mutation of mutations){
        const addedNotes = Array.from(mutation.addedNodes); 
        const hasComposeElements = addedNotes.some(node =>
            node.nodeType === Node.ELEMENT_NODE &&
            (node.matches('.aDh, .btC, [role="dialog"]')
            || node.querySelector('.aDh, .btC, [role="dialog"]'))
        );
        if(hasComposeElements){
            console.log("Compose Window Detected!")
        }
    }
    
});

observer.observe(document.body,{
    childList: true,
    subtree: true
})