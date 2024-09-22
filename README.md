<div align="center">
  <img src="./image/logo.svg" alt="Parse Boolean Logo" width="210"/>
  <h1>Parse Boolean</h1>
  <p><a href="/docs/README-EN.md">English</a></p>
  <p><a href="https://github.com/BarudakRosul/parse-boolean/issues/new?assignees=&labels=bug&projects=&template=bug_report.yml">Laporkan Bug</a> · <a href="https://github.com/BarudakRosul/parse-boolean/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.yml">Ajukan Fitur</a></p>
  <p>
    <a href="https://github.com/BarudakRosul/parse-boolean/actions/workflows/test.yml"><img src="https://github.com/BarudakRosul/parse-boolean/actions/workflows/test.yml/badge.svg" alt="Testing"/></a>
    <a href="https://npmjs.com/package/@barudakrosul/parse-boolean"><img src="https://img.shields.io/npm/v/%40barudakrosul%2Fparse-boolean" alt="NPM Version"/></a>
    <a href="/LICENSE"><img src="https://img.shields.io/github/license/BarudakRosul/parse-boolean" alt="License"/></a>
    <a href="https://npmjs.com/package/@barudakrosul/parse-boolean"><img src="https://img.shields.io/npm/d18m/%40barudakrosul%2Fparse-boolean" alt="Downloads"/></a>
    <a href="https://github.com/BarudakRosul/parse-boolean/stargazers"><img src="https://img.shields.io/github/stars/BarudakRosul/parse-boolean?style=flat" alt="Stars"/></a>
    <a href="https://github.com/BarudakRosul/parse-boolean/network/members"><img src="https://img.shields.io/github/forks/BarudakRosul/parse-boolean?style=flat" alt="Forks"/></a>
    <a href="https://github.com/BarudakRosul/parse-boolean/issues"><img src="https://img.shields.io/github/issues/BarudakRosul/parse-boolean" alt="Issues"/></a>
  </p>
  <a href="https://techforpalestine.org/learn-more"><img src="https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/banner-support.svg" width="100%" alt="Support Palestine"/></a>
</div>

## Daftar Isi

1. [Pendahuluan](#pendahuluan)
2. [Fitur](#fitur)
3. [Instalasi](#instalasi)
4. [Penggunaan](#penggunaan)
5. [Berkontribusi](#berkontribusi)
6. [Lisensi](#lisensi)
7. [Penghargaan](#penghargaan)
8. [Donasi](#donasi)
9. [Catatan Perubahan](#catatan-perubahan)

## Pendahuluan

Parse Boolean adalah sebuah fungsi JavaScript yang dirancang untuk mengonversi representasi string dari nilai boolean menjadi tipe boolean sebenarnya. Fungsi ini sangat berguna ketika menangani input pengguna atau data yang masuk sebagai string namun diharapkan berperilaku sebagai boolean.

## Fitur

Parse Boolean menawarkan fitur-fitur berikut:

- Mengonversi string representasi boolean menjadi tipe boolean asli (`true` atau `false`).
- Mendukung input string dengan berbagai kombinasi huruf besar/kecil (misalnya, `"True"`, `"FALSE"`).
- Dapat di integrasikan ke dalam kode TypeScript.

## Instalasi

Untuk menginstal Parse Boolean secara lokal, ikuti langkah instalasi ini:

```shell
npm install @barudakrosul/parse-boolean
```

## Penggunaan

Untuk memulai menggunakan Parse Boolean, import modulnya terlebuh dahulu:

**1\. CommonJS**
```javascript
const parseBoolean = require("@barudakrosul/parse-boolean");
```

**2\. ESM (ECMAScript Modules)**
```javascript
import parseBoolean from "@barudakrosul/parse-boolean";
```

**3\. TypeScript**
```typescript
import parseBoolean from "@barudakrosul/parse-boolean";
```

Contoh penggunaan:

```javascript
const bool = "true"; // or "false"

if (parseBoolean(bool)) {
  console.log("Done!");
} else if (parseBoolean(bool)) {
  console.log("Failed!");
}
```

## Berkontribusi

Kontribusi pada Parse Boolean sangat dihargai! Baik melaporkan bug, menyarankan fitur baru, atau berkontribusi pada perbaikan kode.

## Lisensi

Parse Boolean dilisensikan di bawah Lisensi MIT - lihat berkas [LICENSE](/LICENSE) untuk detailnya.

## Penghargaan

Parse Boolean menghargai dukungan dan kontribusi dari individu dan proyek sumber terbuka berikut:

- [@Achixz](https://github.com/Achixz) - Pengembang utama dan pencipta aplikasi.
- Komunitas sumber terbuka - Untuk kontribusi berharga pada alat dan perpustakaan yang digunakan dalam proyek ini.

## Donasi

Kami sangat menghargai dukungan Anda untuk terus mengembangkan proyek ini. Jika Anda merasa proyek ini bermanfaat, Anda dapat mendukung kami dengan donasi:

[![Ko-fi](https://img.shields.io/badge/Ko%e2%80%92fi-donate-7480ff?logo=ko-fi&logoColor=cyan)](https://ko-fi.com/barudakrosul)
[![Trakteer](https://custom-icon-badges.demolab.com/badge/Trakteer-donate-red?logo=trakteerid&logoColor=pink)](https://trakteer.id/barudakrosul)

Setiap donasi, berapapun jumlahnya, sangat berarti bagi kami. Terima kasih atas dukungan Anda! ❤️

## Catatan Perubahan

Terus ikuti perubahan dan pembaruan terbaru Parse Boolean dengan mengacu ke [Catatan Perubahan](https://github.com/BarudakRosul/parse-boolean/releases).

Terima kasih telah memilih Parse Boolean! Kami bertujuan untuk memberikan solusi yang mudah untuk mengonversi string boolean menjadi tipe boolean asli.

[![Stand with Palestine](https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/StandWithPalestine.svg)](https://techforpalestine.org/learn-more)