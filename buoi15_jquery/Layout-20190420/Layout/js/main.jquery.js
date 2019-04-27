$("#btnThem").click(function () {
    //thay doi popup
    $("#header-title").html("Thêm Nhân Viên");
})
var mangNhanVien = [];

$("#btnThemNV").click(function () {
    //b1 lấy thông tin người dùng nhập vào giao diện
    //lưu thông itn vào đối tượng nhân viên

    var maNV = $("#msnv").val(); //lấy giá trị value input#msnv
    var hoTen = $("#name").val();
    var email = $("#email").val();
    var matKhau = $("#password").val();
    var ngayVaoLam = $("#datepicker").val();
    var chuVu = $("#chucvu").val();
    var tongLuong = $("#tongLuong").val();

    // b2 lwu thông tin vào đối tượng nhân viên

    var nv = new NhanVien();
    nv.MaNV = maNV;
    nv.HoTen = hoTen;
    nv.Email = email;
    nv.MatKhau = matKhau;
    nv.NgayVaoLam = ngayVaoLam;
    nv.ChucVu = chuVu;
    nv.TongLuong = tongLuong;
    //lưu nhan vien vao mảng
    mangNhanVien.push(nv);
    taobang();
    luuStorage();
})

// tao bang duu lieu nhan vien
function taobang() {
    var noiDungTable = '';
    //     for(var i=0;i<mangNhanVien.length;i++){
    //     var nhanVien=mangNhanVien[i];
    //     var trNhanVien=`
    //     <tr>
    //         <td>${nhanVien.MaNV}</td>
    //         <td>${nhanVien.HoTen}</td>
    //         <td>${nhanVien.Email}</td>
    //         <td>${nhanVien.MatKhau}</td>
    //         <td>${nhanVien.NgayVaoLam}</td>
    //         <td>${nhanVien.ChucVu}</td>
    //         <td>${nhanVien.TongLuong}</td>

    //     </tr>
    //     `;
    //     noiDungTable+=trNhanVien;
    // }

    // funtinon es6 thao tac voi mang
    mangNhanVien.map(function (nhanVien, i) {
        var nhanVien = mangNhanVien[i];
        var trNhanVien = `
    <tr>
        <td><input manv="${nhanVien.MaNV}" class="ckbXoaNhanVien" style="cursor:pointer" type="checkbox"></td>
        <td>${nhanVien.MaNV}</td>
        <td>${nhanVien.HoTen}</td>
        <td>${nhanVien.Email}</td>
        <td>${nhanVien.NgayVaoLam}</td>
        <td>${nhanVien.ChucVu}</td>
        <td>${nhanVien.TongLuong}</td>
    </tr>
    `;
        noiDungTable += trNhanVien;
    })
    // dom den the tbody
    $("#tableDanhSach").html(noiDungTable);
}
function luuStorage() {
    // chuyen doi mang nhan vien thanh chuoi
    var sMangNhanVien = JSON.stringify(mangNhanVien);
    localStorage.setItem('mangNhanVien', sMangNhanVien);
}
laystorage();
function laystorage() {
    //kiem tra xem storage co gia tri chua
    if (localStorage.getItem('mangNhanVien')) {
        //lay gia tri tu storage ra
        var sMangNhanVien = localStorage.getItem('mangNhanVien');
        //gan lai cho bien mangNhanVien
        mangNhanVien = JSON.parse(sMangNhanVien);
        taobang();
    }
}


//chuc nang check all
$("#checkAll").click(function () {
    // lay ra gia tri checked hien tai cua checkAll
    var checkValue = $(this).prop("checked");
    //gan gia tri do co tat ca
    $(".ckbXoaNhanVien").prop("checked", checkValue); //gan prop .prop('tenprop',giatri)
});

$("#btnXoaNhieuNV").click(function () {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.value) {
            //lay thong tin tu checkbox
            $(".ckbXoaNhanVien").each(function (index, ckbXoaNhanVien) {
                var checkValue = $(ckbXoaNhanVien).prop("checked");
                if (checkValue )//neu checkvalue ==true
                {
                    //lay ra ma nhan vien tren the input
                    var maNhanVien = $(ckbXoaNhanVien).attr("manv");
                    //xoa nhan vien duoc checked
                    var index = mangNhanVien.findIndex(nv => nv.MaNV === maNhanVien);
                    if (index != -1) {
                        mangNhanVien.splice(index, 1);
                    }
                }
            })
            taobang();
        }
    })
})

