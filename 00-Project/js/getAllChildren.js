function getAllChildren() {

    fetch('./static/items.json')
        .then(response => response.json())
        .then(json => {
            json.sort((a, b) => (a.brand > b.brand ? 1 : -1));
            console.log(json);
            return json;
        });
}