miro.onReady(() => {
    miro.initialize({
        extensionPoints: {
            bottomBar: {
                title: 'Copy To JIRA',
                svgIcon:
                    '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>',
                positionPriority: 1,
                onClick: async () => {
                    // Get selected widgets
                    let selectedWidgets = await miro.board.selection.get()

                    // Filter stickers from selected widgets
                    let stickers = selectedWidgets.filter((widget) => widget.type === 'STICKER')

                    // Filter stickers from selected widgets
                    let cards = selectedWidgets.filter((widget) => widget.type === 'card')

                    let buffer = []
                    for (const sticker of stickers) {
                        let text = "| " + sticker.text + "| " +"| ";
                        console.log(text);
                        buffer.add(text);
                    }

                    for (const card of cards) {
                        let text = "| " + card.text + "| " + card.description+ "| "
                        console.log(text)
                        buffer.add(text);
                    }

                    // Show success message
                    miro.showNotification('Widgets: \n ' + buffer);
                },
            },
        },
    })
})
