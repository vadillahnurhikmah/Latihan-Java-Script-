function data(){
    var tinggi;
    var hitung;
    var nama = prompt("Nama Lengkap = ");
    var gender = prompt("Jenis Kelamin [L/P] = ");
    switch(gender){
    case"L":
        var y = confirm ("Apakah Benar Anda Laki Laki ? ");
        switch(y){
            case true:
                tinggi = prompt("Tinggi Badan = ");
                hitung = (tinggi-100)-((tinggi-100) * 0,1);
                var hasil = hitung; 
                document.write("Hai"+ " " + nama + " " + "Berat Badan Idealmu Adalah : " + " " + hasil);
            case false:
                break;
        }
        alert("Thank you" + " " + nama);
        break;;
    case "P":
        var y = confirm ("Apakah Benar Anda Perempuan ? ");
        switch(y){
            case true:
                tinggi = prompt("Tinggi Badan = ");
                hitung = (tinggi-100)-((tinggi-100) * 0,15);
                var hasil = hitung; 
                document.write("Hai"+ " " + nama + " " + "Berat Badan Idealmu Adalah : " + " " + hasil);
                ;
            case false:
                break;
        }
        alert("Thank you" + " " + nama);
        break;;
    }
}