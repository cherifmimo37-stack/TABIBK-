// ================= TABIBK =================

document.addEventListener("DOMContentLoaded", function () {

    console.log("TABIBK App Started");

    // زر البحث
    const searchForm = document.querySelector(".search-box");

    if (searchForm) {

        searchForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const inputs = searchForm.querySelectorAll("input");

            const doctor =
                inputs[0] ? inputs[0].value.trim() : "";

            const location =
                inputs[1] ? inputs[1].value.trim() : "";

            if (!doctor && !location) {
                alert("من فضلك اكتب اسم الطبيب أو التخصص أو الولاية.");
                return;
            }

            alert(
                "🔎 جاري البحث عن الطبيب..."
            );

        });
    }

});
