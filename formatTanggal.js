/**
 * formatTanggal.js
 * version 1.0
 * github : (https://github.com/ahmedhambal/formatTanggal.js)
 */

/**
 * nama fungsi : formatTanggal()
 * deskripsi   : fungsi untuk mendapatkan tanggal hari ini
 * @returns json
 *    terdiri dari :
 *       tanggal.angkahari : menampilkan angka dari tanggal, misal tgl "13",
 *       tanggal.bulan : menampilkan bulan, misal bulan "Agustus",
 *       tanggal.angkabulan : menampilkan angkabulan, misal bulan ke "8",
 *       tanggal.tahun : menampilkan tahun, misal tahun "2023",
 *       tanggal.fullDay : menampilkan fullDay, misal "13 Agustus 2023"
 */
function formatTanggal() {
    var arrbulan = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
    ];
    var today = new Date();
    var bulan = today.getMonth();
    bulan = arrbulan[bulan];
    var angkabulan = today.getMonth() + 1;
    var fullDay = today.getDate() + " " + bulan + " " + today.getFullYear();
    var tanggal =
        '{"angkahari":"' +
        today.getDate() +
        '", "bulan":"' +
        bulan +
        '", "angkabulan":"' +
        angkabulan +
        '", "tahun":"' +
        today.getFullYear() +
        '", "fullDay":"' +
        fullDay +
        '"}';
    return JSON.parse(tanggal);
}

/**
 * nama fungsi : formatDate()
 * deskripsi   : fungsi untuk mendapatkan tanggal hari ini dengan format dd/mm/yyyy, misal 13/08/2023
 * @returns string
 */
function formatDate() {
    var d = new Date(),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [day, month, year].join("/");
}

/**
 * nama fungsi : formatTime()
 * deskripsi   : fungsi untuk mendapatkan waktu jam dengan format H:i:s
 * @returns string
 */
function formatTime() {
    var d = new Date(),
        hours = "" + d.getHours(),
        minutes = "" + d.getMinutes(),
        seconds = "" + d.getSeconds();
    if (hours.length < 2) hours = "0" + hours;
    if (minutes.length < 2) minutes = "0" + minutes;
    if (seconds.length < 2) seconds = "0" + seconds;
    return [hours, minutes, seconds].join(":");
}
