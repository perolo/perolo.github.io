const iconPaste = '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"></circle>'

miro.onReady(function () {
    miro.initialize({
        extensionPoints: {
            bottomBar: {
                title: 'Paste',
                svgIcon:
                iconPaste,
                onClick: async () => {
                    pasteData();
                },
            }
        }
    })
})

//input.addEventListener("paste", event => pasteData(event));
function pasteData() {
    console.log("pasteData");
    theid = document.getElementById('miro-holder');
    theid.addEventListener("paste", event => pasteData2(event));
}

function pasteData2(e) {
    console.log("pasteData2");
    var pastedText = e.clipboardData.getData('Text');
    console.log(pastedText);
}
