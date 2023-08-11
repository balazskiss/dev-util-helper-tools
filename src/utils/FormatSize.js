export const formatSize = function(numberOfBytes) {
    const units = ["B", "KB", "MB", "GB", "TB"];
    let unitIndex = 0;
    while (numberOfBytes > 1024) {
        numberOfBytes = numberOfBytes / 1024;
        unitIndex++;
    }
    if (unitIndex > 0) {
        numberOfBytes = numberOfBytes.toFixed(2);
    }
    return numberOfBytes + " " + units[unitIndex];
}