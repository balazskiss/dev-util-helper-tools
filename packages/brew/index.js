import { sendRequest } from "../../src/client-api.js";

var loadPackageList = function() {
    document.getElementById("packagesTable").style.display = "none";
    document.getElementById("loading").style.display = "block";
    
    sendRequest('brew', 'brewListPackages', {}, function(response) {
        console.log("postMessage callback");

        var table = document.getElementById("packagesTable").getElementsByTagName('tbody')[0];
        table.innerHTML = '';
        for (var index = 0; index < response.packages.length; index++) {
            let brewPackage = response.packages[index];
            var row = table.insertRow(index);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var brewPackageNameLink = document.createElement('a');
            brewPackageNameLink.href = "#";
            brewPackageNameLink.onclick = function() {
                showPackageInfo(brewPackage.name);
            }
            brewPackageNameLink.appendChild(document.createTextNode(brewPackage.name));
            cell1.appendChild(brewPackageNameLink);
            cell2.innerHTML = brewPackage.version;
        }

        document.getElementById("loading").style.display = "none";
        document.getElementById("packagesTable").style.display = "table";
    })
}

var showPackageInfo = function(packageName) {
    const infoTab = bootstrap.Tab.getInstance("#info-tab");
    infoTab.show();
    document.getElementById("packageNameInput").value = packageName;
    getPackageInfo(packageName);
}

var getPackageInfo = function(packageName) {
    document.getElementById("info-loading").style.display = "block";
    document.getElementById("result").innerText = "";
    sendRequest('brew', 'getPackageInfo', {packageName: packageName}, function(response) {
        console.log("postMessage callback", response);
        document.getElementById("info-loading").style.display = "none";
        document.getElementById("result").innerText = response.packageInfo;
    })
}

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');

    const infoTab = new bootstrap.Tab('#info-tab');
    document.getElementById("info-loading").style.display = "none";

    document.getElementById('brewListPackages').addEventListener('click', () => {
        loadPackageList();
    });

    document.getElementById('runBtn').addEventListener('click', () => {
        const packageName = document.getElementById('packageNameInput').value;
        getPackageInfo(packageName);
    });

    loadPackageList();
});