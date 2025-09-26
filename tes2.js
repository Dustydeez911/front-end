

//1
function hitungUsia(tahunLahir) {
    return 2025 - tahunLahir
}

let usia = hitungUsia(2005)
console.log(usia)

//2
function cekKategoriUmur(umur) {
    if (umur < 0) {
        return 'umur tidak valid jika umur negatif'
    }
    if (umur <= 12) {
        return 'anak-anak'
    }
    if (umur <= 17) {
        return 'remaja'
    }
    if (umur <= 59) {
        return 'dewasa'
    } else {
        return 'lansia'
    }
    
   
}
console.log(cekKategoriUmur(1))
console.log(cekKategoriUmur(60))
console.log(cekKategoriUmur(-12))

//3
class BankAccount {
    constructor(namaAkun) {
        this.akun = namaAkun
        this.saldo = 0
    }

    setor(jumlah) {
        this.saldo = this.saldo + jumlah
        console.log(`setor sejumlah ${jumlah}`)
        return jumlah
    }

    tarik(jumlah) {
        this.saldo = this.saldo - jumlah
        console.log(`tarik sejumlah ${jumlah}`)
        return jumlah
    }

    cekSaldo() {
        console.log('saldo : ' + this.saldo)
    }
    
    transfer(jumlah, tujuan) {
        console.log(`Transfer sebanyak ${jumlah} ke ${tujuan}`)
    }
}

let akun1 = new BankAccount('ruhel')
akun1.setor(10000)
akun1.cekSaldo()
akun1.tarik(5000)
akun1.cekSaldo()

//4
function ambilDataUser(userId) {
    return new Promise((resolve, reject) => {
        
        if (userId <= 0) {
            reject("User ID tidak valid")
            return;
        }

        setTimeout(() =>{
            const userData = {
                id: userId,
                nama: "User" + userId,
                email: "email" + userId + "@email.com"
            };
            console.log("data user berhasil diambil dari server");
            resolve(userData)
        }, 3000);
    });
}

async function user() {
    try {
        console.log("Mengambil Data...")
        let hasil4 = await ambilDataUser(1)
        console.log(hasil4)
    } catch (error) {
        console.log('Error :' + error)
    }
}

user()