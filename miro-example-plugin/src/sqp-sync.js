const SQP_URL = "https://jira-test.assaabloy.net/rest/scriptrunner/latest/custom/getSQPCountForProject";

async function getSQPFromJiraByFetchAPI(project, username, password, shouldUseSession) {
    // Default options are marked with *

    let url = new URL(SQP_URL),
        params = {project:project};
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    let headers = new Headers();
    headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));

    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        //mode: 'cors', // no-cors, *cors, same-origin
        //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: 'include', // include, *same-origin, omit
        headers: headers,
        //headers: {
        //'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
        //},
        //redirect: 'follow', // manual, *follow, error
        //referrerPolicy: 'no-referrer' // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        //body: JSON.stringify(data) // body data type must match "Content-Type" header
    });

    console.log(response.json());
    return response.json(); // parses JSON response into native JavaScript objects
}
