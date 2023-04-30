export function timeDifference(startDate, endDate = new Date().getTime()) {
    var elapsed = endDate - startDate.getTime();

    if (elapsed < 60000) {
        return Math.round(elapsed / 1000) + " segundos";
    } else if (elapsed < 3600000) {
        return Math.round(elapsed / 60000) + " minutos";
    } else if (elapsed < 86400000) {
        return Math.round(elapsed / 3600000) + " horas";
    } else if (elapsed < 2592000000) {
        return Math.round(elapsed / 86400000) + " días";
    } else if (elapsed < 31536000000) {
        return Math.round(elapsed / 2592000000) + " meses";
    } else {
        return Math.round(elapsed / 31536000000) + " años";
    }
}
