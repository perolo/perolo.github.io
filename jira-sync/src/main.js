//const SPREADSHEET_URL = 'https://perolo.github.io/jira-sync/data.json'

miro.onReady(function () {
    miro.initialize({
        extensionPoints: {
            bottomBar: {
                title: 'Sync from JIRA json',
                svgIcon:
                    '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-import" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M16 288c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h112v-64zm489-183L407.1 7c-4.5-4.5-10.6-7-17-7H384v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H152c-13.3 0-24 10.7-24 24v264h128v-65.2c0-14.3 17.3-21.4 27.4-11.3L379 308c6.6 6.7 6.6 17.4 0 24l-95.7 96.4c-10.1 10.1-27.4 3-27.4-11.3V352H128v136c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H376c-13.2 0-24-10.8-24-24z"></path></svg>',
                onClick: syncWithSheet,
            }
        }
    })
})

function getColor(i) {
    let c = '#F24726'
    if (i.statuscategory === "Done") {
        c = "#008000"
    } else if (i.statuscategory === "In Progress") {
        c = "#FFFF00"
    } else if (i.statuscategory === "To Do") {
        c = "#0000ff"
    }
    return c;
}

async function syncWithSheet() {
    const appId = await miro.getClientId()
//    const viewport = await miro.board.viewport.get()
    console.log('Button syncWithSheet 2!');

    let selectedWidgets = await miro.board.selection.get()

    const selectedshape = (selectedWidgets).filter((shape) => shape.type === 'SHAPE')

    if (selectedshape.length !== 1)  {
        alert("Select 1 Shape with url defined : ");

    } else {

        url = selectedshape[0].plainText
        initialx = selectedshape[0].x
        initialy = selectedshape[0].y

        const response = await fetch(url, {
            method: 'GET',
            mode: 'no-cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'include', // include, *same-origin, omit
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer' // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        });

        console.log(response.status);
        if (response.ok) { // if HTTP-status is 200-299
            // get the response body (the method explained below)
            let json = await response.json();
            console.log(json);
//        json.forEach(async ({x, y1}, i) => {
            for (const key in json) {
                var issue = json[key];

                const shapes = (
                    await miro.board.widgets.get({
                        type: 'card',
                    })
                ).filter((shape) => !!shape.metadata[appId]);
                const shape = shapes.find((shape) => shape.metadata[appId].key === issue.key);
                if (shape) {
                    console.log("Update " + issue.key);
                    let key = issue.key
                    let title = `<p><a href=${issue.link}>[${issue.key}] ${issue.summary}</a></p>`;
                    let color = getColor(issue);
                    let statuscategory = issue.statuscategory
                    resp = await miro.board.widgets.update([{
                        id: shape.id,
                        title: title,
                        style: {
                            backgroundColor: color,
                        },
                        metadata: {
                            [appId]: {
                                key,
                                statuscategory,
                            },
                        },
                    }]); //fail to set background color
                    resp2 = await miro.board.tags.update
                } else {
                    let key = issue.key
                    let title = `<p><a href=${issue.link}>[${issue.key}] ${issue.summary}</a></p>`
                    let color = getColor(issue);
                    let statuscategory = issue.statuscategory
                    initialx = initialx + 50
                    initialy = initialy + 50
                    // description
                    // style: { backgroundColor: BackgroundColorStyle }
                    console.log("Create " + key);
                    const resp = await miro.board.widgets.create({
                        type: 'card',
//                    title: `${issue.key} ${issue.summary}`,
                        title: title,
                        x: initialx,
                        y: initialy,
                        style: {
                            backgroundColor: color,
                        },
                        metadata: {
                            [appId]: {
                                key,
                                statuscategory,
                            },
                        },
                    })
                    if (issue.statuscategory === 'To Do') {

                    }
                    console.log(resp);
                }
            }
/*
            const cards = (
                await miro.board.widgets.get({
                    type: 'card',
                })
            ).filter((card) => !!card.metadata[appId]);
            let tdtags = await miro.board.tags.get({title: 'Done'});

//        remove  = await miro.board.tags.delete({title: 'To Do'}, tdtags.map(a => a.id));
            if (tdtags.length !== 0) {
                if (tdtags !== undefined) {
                    remove = await miro.board.tags.delete(tdtags[0].id, tdtags[0].widgetIds);
                }
            }
            tdtags = await miro.board.tags.get({title: 'Done'});
            const todocards = cards.filter((card) => card.metadata[appId].statuscategory === 'Done');
            ids = todocards.map(a => a.id)
            thetag = await miro.board.tags.create({title: 'Done', color: "#008000", ids});
            tdtags = await miro.board.tags.get({title: 'Done'});
            console.log(tdtags)
*/
        } else {
            alert("HTTP-Error: " + response.status);
        }
    }
}
