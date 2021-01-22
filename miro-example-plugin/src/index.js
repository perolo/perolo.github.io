function run() {
    miro.initialize({
        extensionPoints: {
            /*
            bottomBar: {
                title: 'Example button',
                svgIcon: '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>',
                onClick: () => {
                    getSQPFromJiraByFetchAPI("MIOT")
                }
            },
            */

            toolbar: {
                title: 'SQP Loader',
                toolbarSvgIcon: '<circle cx="12" cy="12" r="11" fill="blue" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>',
                librarySvgIcon: '<circle cx="12" cy="12" r="11" fill="green" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>',
                onClick: () => {
                    miro.board.ui.openLibrary('miro-example-plugin/sqp-loader.html', {title: 'GTT SQP Synchronizer'})
                }
            }
        }
    })
}

miro.onReady(run);
