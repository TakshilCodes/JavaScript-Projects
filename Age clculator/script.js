document.getElementById("calculate-btn").addEventListener("click", function () {
    const dateInput = document.getElementById("date").value;
    const resultDiv = document.getElementById("result");

    // Ensure a date is selected
    if (!dateInput) {
        resultDiv.innerHTML = `<p style="color: red;">Please select a valid date.</p>`;
        return;
    }

    // Calculate age
    const birthDate = new Date(dateInput);
    const today = new Date();

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    // Adjust for negative months or days
    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths += 12;
    }
    if (ageDays < 0) {
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        ageDays += previousMonth;
        ageMonths--;
    }

    // Display result
    resultDiv.innerHTML = `
        <p>Your age is:</p>
        <p><strong>${ageYears}</strong> years, <strong>${ageMonths}</strong> months, and <strong>${ageDays}</strong> days.</p>
    `;
});
