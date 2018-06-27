const {Observable, from} = rxjs;
const {map, filter } = rxjs.operators;
function football(){
    var teamName = document.getElementById("teamName").value;
    var myCountry = document.getElementById("country");
    var id;
    var result = fetch('https://worldcup.sfg.io/teams/').then(data=>data.json());
    result.then(
        data=>from(data)
        .pipe(
            filter(data=>data.country===teamName),
            map(data=>data.group_id))
        .subscribe(data => id = data)
    )
    result.then(
        data=>from(data)
        .pipe(
            filter(data=>data.group_id===id),
            map(data => data.country)
        )
        .subscribe(data => myCountry.append(" " + data + " "))
       )
}
    