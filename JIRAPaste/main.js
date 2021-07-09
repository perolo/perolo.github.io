miro.onReady(() => {
    miro.initialize({
        extensionPoints: {
            bottomBar: {
                title: 'JIRAPaste',
                svgIcon: '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>',
                positionPriority: 1,
                onClick: async () => {
                    buttonPressed().click();
                },
            },
        },
    })
})

miro.onReady(() => {
    miro.initialize({
        extensionPoints: {
            bottomBar: {
                title: 'JIRAPaste',
                svgIcon: '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>',
                positionPriority: 1,
                onClick: async () => {
                    buttonPressed();
                },
            },
        },
    })
})

function buttonPressed() {
    console.log('Button Pressed!');
}

function showDialog(openFileDialog) {
    document.getElementById(openFileDialog).click();
}

function fileName(openFileDialog) {
    return document.getElementById(openFileDialog).value;
}

function buttonPressed() {
    console.log('Button Pressed 2!');
    input = document.createElement("fileinput");
    input.style
    showDialog('fileinput');
    console.log('Dialog Done');
    name = fileName('file-input');
    console.log('Filename: ' + name);
}

function buttonPressed() {
    var reader = new FileReader();
    reader.onload = function (e) {
        var contents = e.target.result;
        displayContents(contents);
    };
    reader.readAsText("C://Tmp/data.json");
}

function displayContents(contents) {
    console.log('contents: ' + contents);
}

function clickElem(elem) {
    var eventMouse = document.createEvent("MouseEvents")
    eventMouse.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    elem.dispatchEvent(eventMouse)
}

function buttonPressed() {

    readFile = function (e) {
        var file = e.target.files[0];
        if (!file) {
            return;
        }
        var reader = new FileReader();
        reader.onload = function (e) {
            var contents = e.target.result;
            fileInput.func(contents)
            document.body.removeChild(fileInput)
        }
        reader.readAsText(file)
    };
    fileInput = document.createElement("input");
    fileInput.type = 'file';
    fileInput.style.display = 'none';
    fileInput.onchange = readFile;
    document.body.appendChild(fileInput);
    clickElem(fileInput)
}

function buttonPressed() {
    getCliboard()
}

function buttonPressed() {
//    getCliboard()
    setTimeout(async()=>console.log(
        await window.navigator.clipboard.readText()), 3000)
}

function getCliboard() {
    navigator.permissions.query({name: "clipboard-read"}).then(result => {
        // If permission to read the clipboard is granted or if the user will
        // be prompted to allow it, we proceed.
        if (result.state == "denied") {
            navigator.permissions.requestAll([{name: "clipboard-read"}])
                .then(status => {
                    log(`Permission ${status.state}.`);
                })
                .catch(err => {
                    log(`Permission denied: ${err}`);
                });

            /*
                        navigator.permissions.request({name: "clipboard-read"})
                            .then( status => { log(`Permission ${status.state}.`); })
                            .catch( err => { log(`Permission denied: ${err}`); });

             */
        }

        if (result.state == "granted" || result.state == "prompt") {
            navigator.clipboard.read().then(data => {
                for (let i = 0; i < data.items.length; i++) {
                    if (data.items[i].type != "image/png") {
                        alert("Clipboard contains non-image data. Unable to access it.");
                    } else {
                        const blob = data.items[i].getType("image/png");
                        imgElem.src = URL.createObjectURL(blob);
                    }
                }
            });
        }
    });
}

function getCliboard() {
    console.log('getCliboard!');
    navigator.permissions.query({name: "clipboard-read"}).then(result => {
        // If permission to read the clipboard is granted or if the user will
        // be prompted to allow it, we proceed.

        if (result.state == "granted" || result.state == "prompt") {
            navigator.clipboard.read().then(data => {
                for (let i = 0; i < data.items.length; i++) {
                    if (data.items[i].type != "image/png") {
                        alert("Clipboard contains non-image data. Unable to access it.");
                    } else {
                        const blob = data.items[i].getType("image/png");
                        imgElem.src = URL.createObjectURL(blob);
                    }
                }
            });
        }
    });
}

function getCliboard() {
    navigator.clipboard.read().then(data => {
        for (let i = 0; i < data.items.length; i++) {
            if (data.items[i].type != "image/png") {
                alert("Clipboard contains non-image data. Unable to access it.");
            } else {
                const blob = data.items[i].getType("image/png");
                imgElem.src = URL.createObjectURL(blob);
            }
        }
    });
}

function buttonPressed() {
    console.log('Button Pressed 2!');
    input = document.getElementById("file-input");
}
