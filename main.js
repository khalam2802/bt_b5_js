function chonKhuVuc(khuVuc) {
  var khuVuc = document.querySelector("#khuVuc").value;
  if (khuVuc === "A") {
    khuVuc = Number(1.5);
  } else if (khuVuc === "B") {
    khuVuc = Number(1.0);
  } else if (khuVuc === "C") {
    khuVuc = Number(0.5);
  } else {
    khuVuc = Number(0);
  }
  return khuVuc;
}
function chonDoiTuong(doiTuong) {
  var doiTuong = document.querySelector("#doiTuong").value;
  if (doiTuong === "1") {
    doiTuong = Number(2.5);
  } else if (doiTuong === "2") {
    doiTuong = Number(1.5);
  } else if (doiTuong === "3") {
    doiTuong = Number(1);
  } else {
    doiTuong = Number(0);
  }
  return doiTuong;
}
document.getElementById("btnQLTS").onclick = function () {
  var diemLy = document.querySelector("#diemMonThu1").value * 1;
  var diemToan = document.querySelector("#diemMonThu2").value * 1;
  var diemVan = document.querySelector("#diemMonThu3").value * 1;
  var diemChuan = document.querySelector("#diemChuan").value * 1;
  // console.log(diemLy, diemToan, diemVan);
  var ketQua = "";

  var diemTong =
    diemLy + diemToan + diemVan + chonDoiTuong(doiTuong) + chonKhuVuc(khuVuc);

  if (diemLy == 0 || diemToan == 0 || diemVan == 0) {
    ketQua = "ngu";
    // console.log('ketQua: ', ketQua);
  } else if (diemTong < diemChuan) {
    ketQua = "ngu";
  } else {
    ketQua = "bạn đã đậu";
  }
  document.querySelector("#ketQuaQLTS").innerHTML = `
     kết quả : ${ketQua}
     tổng điểm:${diemTong}`;
};
// Btap 2

function tinhTienDien() {
  var kW = document.querySelector("#txt-kw").value * 1;
  var ten = document.querySelector("#txt-ten").value;
  var tongTienDien ="";
  if (kW <= 50) {
    tongTienDien = 500*kW;
  } else if (kW <= 100) {
    tongTienDien = 50 * 500 + (kW - 50) * 650;
  } else if (kW <= 150) {
    tongTienDien = 50 * 500 + 50 * 650 + (kW - 100) * 850;
  } else if (kW <= 250)
    tongTienDien = 50 * 500 + 50 * 650 + 50 * 850 + (kW - 150) * 1100;
  else {
    tongTienDien = 50 * 500 + 50 * 650 + 50 * 850 + 100 * 1100 + (kW - 250);
  }
  console.log(tongTienDien);
  document.querySelector("#ketQuaTienDien").innerHTML=`Tien Dien cua ban la:${tongTienDien} VND`;
}
// btap3
{
    document.getElementById("btnTinhThue").onclick = function () {
        // input: String
        var hoTenThue = document.getElementById("hoTenThue").value;
        var thuNhap = document.getElementById("thuNhap").value * 1;
        var nguoiPhuThuoc = document.getElementById("nguoiPhuThuoc").value;
      
        // output: string
        var resultThue = "";
        //progress
        var thuNhapChiuThue = thuNhap - 4000000 - nguoiPhuThuoc * 1600000;
        if (thuNhap < 5000000) {
          alert("Số tiền thu nhập không hợp lệ!");
          return;
        }
        if (thuNhap <= 60000000) {
          resultThue = thuNhapChiuThue * 0.05;
        } else if (thuNhap <= 120000000) {
          resultThue = 60000000 * 0.05 + (thuNhapChiuThue - 60000000) * 0.1;
        } else if (thuNhap <= 210000000) {
          resultThue =
            60000000 * 0.05 + 60000000 * 0.1 + (thuNhapChiuThue - 120000000) * 0.15;
        } else if (thuNhap <= 384000000) {
          resultThue =
            60000000 * 0.05 +
            60000000 * 0.1 +
            90000000 * 0.15 +
            (thuNhapChiuThue - 210000000) * 0.2;
        }else if (thuNhap <= 624000000) {
            resultThue =
              60000000 * 0.05 +
              60000000 * 0.1 +
              90000000 * 0.15 +
              174000000 * 0.2 + 
              (thuNhapChiuThue - 384000000) * 0.25
          }
          else if (thuNhap <= 960000000) {
            resultThue =
              60000000 * 0.05 +
              60000000 * 0.1 +
              90000000 * 0.15 +
              174000000 * 0.2 + 
              240000000 * 0.25 +
              (thuNhapChiuThue - 624000000) * 0.3
          }else{
            resultThue =
              60000000 * 0.05 +
              60000000 * 0.1 +
              90000000 * 0.15 +
              174000000 * 0.2 + 
              240000000 * 0.25 +
              336000000 * 0.3 +
              (thuNhapChiuThue - 960000000) * 0.35
          }
        document.getElementById("resultThue").value = resultThue.toLocaleString() + " VNĐ";
        document.getElementById('resultHoTenThue').value = hoTenThue
      };
}
// btap4
{
  function selectOptions() {
    var loaiKhachHang = document.querySelector("#loaiKhachHang").value;
    if (loaiKhachHang === "Doanh nghiệp") {
      var nhaDan = document
        .getElementById("dropdown")
        .classList.toggle("d-block");
      nhaDan = document.getElementById("dropdown").classList.remove("d-none");
    } else if (loaiKhachHang === "Nhà dân") {
      var nhaDan = document
        .getElementById("dropdown")
        .classList.toggle("d-none");
      nhaDan = document.getElementById("dropdown").classList.remove("d-block");
    }
  }

  function phiHoaDon(loaiKhachHang) {
    var phiHoaDon = 0;
    if (loaiKhachHang === "Nhà dân") {
      phiHoaDon = Number(4.5);
    } else if (loaiKhachHang === "Doanh nghiệp") {
      phiHoaDon = Number(15);
    } else {
      alert("Hãy nhập loại khách hàng");
    }
    return phiHoaDon;
  }
  function phiDichVu(loaiKhachHang) {
    var phiDichVu = 0;
    if (loaiKhachHang === "Nhà dân") {
      phiDichVu = Number(20.5);
    } else if (loaiKhachHang === "Doanh nghiệp") {
      phiDichVu = Number(75);
    }
    return phiDichVu;
  }

  function thueKenh(loaiKhachHang) {
    var thueKenh = 0;
    if (loaiKhachHang === "Nhà dân") {
      thueKenh = Number(7.5);
    } else if (loaiKhachHang === "Doanh nghiệp") {
      thueKenh = Number(50);
    }
    return thueKenh;
  }
  document.querySelector("#btnTinhCap").onclick = function () {
    var maKhanhHang = document.querySelector('#maKhanhHang').value;
    var loaiKhachHang = document.querySelector("#loaiKhachHang").value;
    var soKenhCaoCap = document.querySelector("#soKenhCaoCap").value * 1;
    var soKetNoi = document.querySelector("#soKetNoi").value;

    var phiDichVuKH = phiDichVu(loaiKhachHang);
    var phiHoaDonKH = phiHoaDon(loaiKhachHang);
    var thueKenhKH = thueKenh(loaiKhachHang);
    if (loaiKhachHang === "Nhà dân") {
      resultTienCap = phiDichVuKH + phiHoaDonKH + soKenhCaoCap * thueKenhKH;
    } else if (loaiKhachHang === "Doanh nghiệp") {
      if (soKenhCaoCap <= 10) {
        if (soKetNoi <= 10) {
          resultTienCap = phiDichVuKH + phiHoaDonKH + soKenhCaoCap * thueKenhKH;
        } else {
          resultTienCap =
            phiDichVuKH +
            phiHoaDonKH +
            soKenhCaoCap * thueKenhKH +
            (soKetNoi - 10) * 5;
        }
      } else {
        if (soKetNoi <= 10) {
          resultTienCap = phiDichVuKH + phiHoaDonKH + soKenhCaoCap * thueKenhKH;
        } else {
          resultTienCap =
            phiDichVuKH +
            phiHoaDonKH +
            soKenhCaoCap * thueKenhKH +
            (soKetNoi - 10) * 5;
        }
      }
    }
    document.querySelector("#resultTienCap").value = "$" + resultTienCap.toLocaleString();
    document.querySelector('#resultMKH').value = maKhanhHang;
  };
}
