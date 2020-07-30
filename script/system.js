let form = {
    nationality : [
        'Indonesia',
        'Malaysia',
        'Singapore',
        'Brunei',
        'Vietnam',
        'Thailand',
        'Philipine'
    ],
    datalist : function (data, id) {
        let str = ``;
        for (let i = 0; i < data.length; i++) {
            str += `<option value="${data[i]}" />`;
        }
        var mylist=document.getElementById(id);
        return mylist.innerHTML = str;
    },
    select : function (data, id) {
        let str = ``;
        for (let i = 0; i < data.length; i++) {
            str += `<option value="${data[i]}">${data[i]}</option>`;
        }
        var mylist=document.getElementById(id);
        return mylist.innerHTML = str;
    }
}