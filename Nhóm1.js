
// Mở form
document.getElementById('show-contact-form').onclick = (e) => {
    e.preventDefault();
    document.getElementById('contact-form').style.display = 'block';
    document.getElementById('overlay-bg').style.display = 'block';
};

// Hàm đóng form chung
function closeForm() {
    document.getElementById('contact-form').style.display = 'none';
    document.getElementById('overlay-bg').style.display = 'none';
}

// Đóng khi click vào nền đen (Overlay)
document.getElementById('overlay-bg').onclick = closeForm;

// Đóng khi click vào nút X (Mới thêm)
document.getElementById('close-form-btn').onclick = closeForm;