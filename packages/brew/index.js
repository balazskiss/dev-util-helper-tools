var loadPackageList = function() {
    document.getElementById("packagesTable").style.display = "none";
    document.getElementById("loading").style.display = "block";
    
    sendRequest('brew', 'brewListPackages', {}, function(response) {
        console.log("postMessage callback");

        var table = document.getElementById("packagesTable").getElementsByTagName('tbody')[0];
        table.innerHTML = '';
        for (var index = 0; index < response.packages.length; index++) {
            let package = response.packages[index];
            var row = table.insertRow(0);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = package.name;
            cell2.innerHTML = package.version;
        }

        document.getElementById("loading").style.display = "none";
        document.getElementById("packagesTable").style.display = "block";
    })
}

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');

    document.getElementById('brewListPackages').addEventListener('click', () => {
        loadPackageList();
    });

    loadPackageList();
});