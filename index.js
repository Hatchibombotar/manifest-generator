function createFile() {
    const file = {
        "format_version": 2,
        "header": {
            "name": document.getElementById("name").value,
            "description": document.getElementById("description").value,
            "uuid": createUUID(),
            "version": [1, 0, 0],
            "min_engine_version": [1, 17, 0]
        },
        "modules": [
            {
                "type": document.getElementById("manifest_type").value,
                "uuid": createUUID(),
                "version": [1, 0, 0]
            }
        ]
    };

    document.getElementById('output').innerHTML = JSON.stringify(file, null, 2);

    // set textarea height so that it fits all the file in
    let element = document.getElementById('output')
    element.style.height = "5px"
    element.style.height = (element.scrollHeight) + "px"
}

// creates a v4 uuid
function createUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
    })
}


// copies text in output box
function copyText() {
    let outputBox = document.getElementById("output")
    outputBox.focus()
    outputBox.select()
    try {
        document.execCommand('copy')
    }
    catch (err) {
        alert('Unable to copy')
    }
}