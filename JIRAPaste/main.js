miro.onReady(() => {
    miro.initialize({
        extensionPoints: {
            bottomBar: {
                title: 'Sticker to shapes',
                svgIcon:
                    '<text x="0" y="15" fill="red">JIRA!</text>',
                positionPriority: 1,
                onClick: async () => {
                    // Get selected widgets
                    let selectedWidgets = await miro.board.selection.get()

                    // Filter stickers from selected widgets
                    let stickers = selectedWidgets.filter((widget) => widget.type === 'STICKER')

                    // Delete selected stickers
                    await miro.board.widgets.deleteById(stickers.map((sticker) => sticker.id))

                    navigator.clipboard.readText()
                        .then(text => {
                            // `text` contains the text read from the clipboard
                            // Create shapes from selected stickers
                            await miro.board.widgets.create(
                                stickers.map((sticker) => ({
                                    type: 'shape',
                                    text: text,
                                    x: sticker.x,
                                    y: sticker.y,
                                    width: sticker.bounds.width,
                                    height: sticker.bounds.height,
                                })),
                            )

                        })
                        .catch(err => {
                            // maybe user didn't grant access to read from clipboard
                            console.log('Something went wrong', err);
                        });

                    // Show success message
                    miro.showNotification('Stickers has been converted')
                },
            },
        },
    })
})
