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

                    // Create shapes from selected stickers
                    await miro.board.widgets.create(
                        stickers.map((sticker) => ({
                            type: 'shape',
                            text: sticker.text,
                            x: sticker.x,
                            y: sticker.y,
                            width: sticker.bounds.width,
                            height: sticker.bounds.height,
                        })),
                    )

                    // Show success message
                    miro.showNotification('Stickers has been converted')
                },
            },
        },
    })
})
