miro.onReady(() => {
    miro.initialize({
        extensionPoints: {
            bottomBar: {
                title: 'JIRAPaste',
                svgIcon:
                    '<text x="20" y="35" class="small">My</text>',
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
function buttonPressed2() {
    console.log('Button Pressed 2!');
    showDialog('file-input');
    console.log('Dialog Done');
    name = fileName('file-input');
    console.log('Filename: '+ name);
}
