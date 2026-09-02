// ================= TABIBK APP =================

document.addEventListener("DOMContentLoaded", () => {

    // زر حجز موعد
    const bookingButtons = document.querySelectorAll(
        'a[href="patient.html"], .btn-primary'
    );

    bookingButtons.forEach(button => {
        button.addEventListener("click", () => {
            console.log("TABIBK: فتح صفحة الحجز");
        });
    });

    // البحث عن طبيب
    const searchForm = document.querySelector(".search-box");

    if (searchForm) {

        searchForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const inputs = searchForm.querySelectorAll("input");

            const doctorOrSpecialty =
                inputs[0]?.value.trim() || "";

            const location =
                inputs[1]?.value.trim() || "";

            if (!doctorOrSpecialty && !location) {

                alert("من فضلك أدخل اسم الطبيب أو التخصص أو الولاية.");

                return;
            }

            alert(
                `جاري البحث عن:\n${doctorOrSpecialty || "جميع الأطباء"}\n${location || "جميع المناطق"}`
            );

        });

    }

});
