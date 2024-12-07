$(function (){
    $('#updateProfileBtn').click(function (e) {
        e.preventDefault()
        var data = {}
        var formData = $('#form-updateProfile').serializeArray()
        formData.forEach(item => data[item.name] = item.value)
         $.ajax({
            url: '/vinfast_war/admin-profile?action=updpr',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            dataType: 'json',
            success: function(response) {
                if(response.status == 'success'){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Sửa thành công",
                        showConfirmButton: false,
                        timer: 900
                    });
                    setTimeout(() => {
                       window.location.href = '/vinfast_war/admin-profile';
                    }, 900);
                }else{
                     Swal.fire({
                         position: "top-end",
                         icon: "error",
                         title: response.message,
                         showConfirmButton: false,
                         timer: 1500
                     });
             }


            },
            error: function(xhr, status, error) {
                console.error("Có lỗi xảy ra: " + error);
            }
         });
    })
    $('#changePasswordBtn').click(function (e) {
            e.preventDefault()
            var data = {}
            var formData = $('#form-changePassword').serializeArray()
            formData.forEach(item => data[item.name] = item.value)
             $.ajax({
                url: '/vinfast_war/admin-profile?action=updprP',
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(data),
                dataType: 'json',
                success: function(response) {
                    if(response.status == 'success'){
                        alert("Thành công");
                        setTimeout(() => {
                           window.location.href = '/vinfast_war/admin-profile';
                        }, 900);
                    }else if(response.status == "recheck"){
                        alert("Có vẻ bạn nhập sai password mới rồi!!");
                    }else{
                        alert("Đổi không thành công");
                    }
                },
                error: function(xhr, status, error) {
                    console.error("Có lỗi xảy ra: " + error);
                }
             });
        })
})