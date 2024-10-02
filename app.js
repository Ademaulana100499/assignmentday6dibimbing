const _ = require('lodash');

function Student(nama, kelas, nilai) {
  this.nama = nama;
  this.kelas = kelas;
  this.nilaiUjian = {
    matematika: nilai[0],
    ipa: nilai[1],
    ips: nilai[2],
    bahasa: nilai[3],
    komputer: nilai[4],
  };
  this.nilaiRataUjian = 0,
    this.naikKelas = false,
    this.ranking = 0,
    this.hitungRataNilaiUjian = function () {
      let totalNilai = 0;
      let jumlahMataPelajaran = 0;
      for (let mataPelajaran in this.nilaiUjian) {
        totalNilai += this.nilaiUjian[mataPelajaran];
        jumlahMataPelajaran++;
      }
      this.nilaiRataUjian = totalNilai / jumlahMataPelajaran;
    };
  this.menentukanKenaikan = function () {
    if (this.nilaiRataUjian <= 50) {
      this.naikKelas = false;
    } else {
      this.naikKelas = true;
    }
  };
}

const siswa = [
  new Student("Andi", "10A", [90, 80, 70, 80, 70]),
  new Student("Ade", "10A", [20, 80, 50, 40, 30]),
  new Student("Aji", "10A", [60, 70, 90, 80, 70]),
  new Student("Didi", "10A", [80, 60, 90, 70, 80]),
  new Student("Rina", "10A", [70, 70, 90, 80, 80]),
  new Student("Ferik", "10A", [90, 90, 90, 80, 80]),
  new Student("Jidan", "10A", [60, 50, 40, 70, 70]),
  new Student("Hadi", "10A", [90, 60, 90, 90, 80]),
  new Student("Lina", "10A", [90, 90, 90, 90, 80]),
  new Student("Sindu", "10A", [60, 90, 70, 90, 80]),
];


siswa.forEach(student => {
  student.hitungRataNilaiUjian();
  student.menentukanKenaikan();
});


siswa.sort((a, b) => b.nilaiRataUjian - a.nilaiRataUjian);


siswa.forEach((student, index) => {
  student.ranking = index + 1;
});


_.map(siswa, student => {
  console.log(`
Rapor sekolah ${student.nama}
Kelas: ${student.kelas}

NILAI UJIAN
matematika: ${student.nilaiUjian.matematika}
ipa: ${student.nilaiUjian.ipa}
ips: ${student.nilaiUjian.ips}
bahasa: ${student.nilaiUjian.bahasa}
komputer: ${student.nilaiUjian.komputer}

NILAI RATA-RATA: ${student.nilaiRataUjian.toFixed(2)}

NAIK KELAS: ${student.naikKelas ? 'Ya' : 'Tidak'}
RANKING: ${student.ranking}
`);
});