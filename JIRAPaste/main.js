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
