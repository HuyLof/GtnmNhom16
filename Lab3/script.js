
function showSection(section) {
    const currentSectionTitle = document.getElementById("current-section-title");
    const documentContent = document.getElementById("document-content");

    // Reset content based on the selected section
    if (section === 'exercise') {
        currentSectionTitle.innerText = "Bài Tập";
        documentContent.innerHTML = "<p>Chọn một bài tập từ danh sách bên trái.</p>";
    } else if (section === 'lecture') {
        currentSectionTitle.innerText = "Bài Giảng";
        documentContent.innerHTML = "<p>Thông tin về các bài giảng sẽ hiển thị ở đây.</p>";
    } else if (section === 'document') {
        currentSectionTitle.innerText = "Tài Liệu";
        documentContent.innerHTML = "<p>Tên tài liệu trên</p><p>Tài liệu FDP</p>";
    }
}

function selectExercise(exerciseName) {
    const currentSectionTitle = document.getElementById("current-section-title");
    const documentContent = document.getElementById("document-content");

    currentSectionTitle.innerText = exerciseName;
    documentContent.innerHTML = `
        <p>Thông tin chi tiết về ${exerciseName}.</p>
        <h3>Slide PDF</h3>
        <iframe src="path/to/your/pdf/${exerciseName}.pdf" frameborder="0"></iframe>
    `;
}

