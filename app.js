// Toast function
function toast({ title = "", message = "", type = "info", duration = 3000 }) {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");

    // Tự động xoá toast
    const fadeOut = duration + 1000;
    const autoRemoveId = setTimeout(function () {
      main.removeChild(toast);
    }, fadeOut);

    // Xoá khi click toast
    toast.onclick = function (e) {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemoveId);
      }
    };

    const icons = {
      success: "fa-circle-check",
      info: "fa-exclamation-circle",
      warning: "fa-exclamation-circle",
      error: "fa-exclamation-circle",
    };
    const deplay = (duration / 1000).toFixed(2);

    toast.classList.add("toast", `toast--${type}`);
    toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear 1s ${deplay}s forwards`;

    toast.innerHTML = `
        <div class="toast__icon">
          <i class="fa-solid ${icons[type]}"></i>
        </div>
        <div class="toast__body">
          <h3 class="toast__title">${title}</h3>
          <p class="toast__message">${message}</p>
        </div>
        <div class="toast__close">
          <i class="fa-sharp fa-solid fa-xmark"></i>
        </div>
    `;

    main.appendChild(toast);
  }
}

function showSuccessToast() {
  toast({
    title: "Thành công",
    message: "Đường truyền kết nối internet thành công!",
    type: "success",
    duration: 5000,
  });
}

function showInfoToast() {
  toast({
    title: "Thông tin",
    message:
      "Đường truyền internet đang trong quá trình khắc phục, hãy chờ đợi thêm nhé!",
    type: "info",
    duration: 5000,
  });
}

function showWarningToast() {
  toast({
    title: "Cảnh báo",
    message: "Đường truyền kết nối internet có trục trặc!",
    type: "warning",
    duration: 5000,
  });
}

function showErrorToast() {
  toast({
    title: "Thất bại",
    message: "Đường truyền kết nối internet thất bại!",
    type: "error",
    duration: 5000,
  });
}
