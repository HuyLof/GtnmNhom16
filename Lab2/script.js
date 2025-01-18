const exercises = {
    python: [
        {
            title: "Tính tổng",
            description: "Viết hàm trong Python tính tổng giá trị các số nguyên nhập vào",
            difficulty: "Easy",
            timeLimit: "None",
            points: "10 points"
        },
        {
            title: "Data Structures",
            description: "Practice using Python lists, tuples, and dictionaries.",
            difficulty: "Medium",
            timeLimit: "30 minutes",
            points: "20 points"
        }
    ],
    java: [
        {
            title: "Kiểm tra số nguyên tố",
            description: "Viết trương trình java kiểm tra mọt số có phải số nguyên tố",
            difficulty: "Easy",
            timeLimit: "None",
            points: "10 points"
        },
        {
            title: "Tính ngày",
            description: "Nhập vào ngày bắt đầu và ngày kết thúc, kiểm tra xem có bao nhiêu ngày bằng java",
            difficulty: "Medium",
            timeLimit: "45 minutes",
            points: "25 points"
        }
    ],
    cpp: [
        {
            title: "Bảng cửu chương",
            description: "Viết bảng cửu chương từ  2 đén 9. C++.",
            difficulty: "Easy",
            timeLimit: "15 minutes",
            points: "10 points"
        }
    ],
    csharp: [
        {
            title: "Tổng nguyên dương",
            description: "Nhập vào dãy số, tính tích các số nguyên dương trong dãy số đó, C#",
            difficulty: "Easy",
            timeLimit: "None",
            points: "10 points"
        }
    ],
    html: [
        {
            title: "HTML Basics",
            description: "Create a simple webpage using HTML elements.",
            difficulty: "Easy",
            timeLimit: "None",
            points: "10 points"
        }
    ],
    css: [
        {
            title: "CSS Styling",
            description: "Apply styles to a webpage using CSS.",
            difficulty: "Easy",
            timeLimit: "None",
            points: "10 points"
        }
    ],
    dotnet: [
        {
            title: "Tách chuỗi",
            description: "Viết hàm tách chuỗi thành từng kí tự, .Net",
            difficulty: "Medium",
            timeLimit: "10 minutes",
            points: "20 points"
        }
    ],
    php: [
        {
            title: "PHP Basics",
            description: "Write a basic PHP script to handle form data.",
            difficulty: "Easy",
            timeLimit: "None",
            points: "15 points"
        }
    ]
};

// Hàm hiển thị bài tập của ngôn ngữ cụ thể
function showExercises(language) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    const selectedTab = document.querySelector(`.tab[onclick="showExercises('${language}')"]`);
    selectedTab.classList.add('active');

    displayExercises(exercises[language]);
}

// Hàm hiển thị danh sách bài tập
function displayExercises(exerciseListData) {
    const exerciseList = document.getElementById('exercise-list');
    exerciseList.innerHTML = '';

    if (exerciseListData && exerciseListData.length > 0) {
        exerciseListData.forEach(exercise => {
            const exerciseDiv = document.createElement('div');
            exerciseDiv.classList.add('exercise');

            // Tạo liên kết đến coding.html với tên bài tập
            const exerciseLink = document.createElement('a');
            exerciseLink.href = `coding.html?exercise=${encodeURIComponent(exercise.title)}`; // Liên kết đến coding.html
            exerciseLink.innerHTML = `
                <div class="exercise-title">${exercise.title}</div>
                <div class="exercise-description">${exercise.description}</div>
                <div class="exercise-info">Mức độ khó: ${exercise.difficulty}</div>
                <div class="exercise-info">Giới hạn thời gian: ${exercise.timeLimit}</div>
                <div class="exercise-info">Điểm: ${exercise.points || 'Không có'}</div>
            `;
            exerciseLink.classList.add('exercise-link'); // Thêm class để định dạng

            exerciseDiv.appendChild(exerciseLink);
            exerciseList.appendChild(exerciseDiv);
        });
    } else {
        exerciseList.innerHTML = '<p>No exercises available for this language.</p>';
    }
}

// Hàm tìm kiếm bài tập
function search() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultList = [];

    // Duyệt qua từng ngôn ngữ lập trình
    Object.keys(exercises).forEach(language => {
        const filteredExercises = exercises[language].filter(exercise => {
            return exercise.title.toLowerCase().includes(input) || exercise.description.toLowerCase().includes(input);
        });

        if (filteredExercises.length > 0) {
            resultList.push(...filteredExercises);
        }
    });

    // Hiển thị kết quả tìm kiếm
    displayExercises(resultList);
}

// Hiển thị mặc định (bài tập Python) khi tải trang
showExercises('python');


// Initialize CodeMirror editor
var editor = CodeMirror.fromTextArea(document.getElementById('codeEditor'), {
    mode: 'python',  // Default to Python
    lineNumbers: true,
    autoCloseBrackets: true,
    matchBrackets: true,
    tabSize: 4,
    indentUnit: 4,
    theme: 'default'
});

function changeLanguage() {
    var language = document.getElementById('language').value;
    if (language === 'python') {
        editor.setOption('mode', 'python');
        editor.setValue("def fibonacci(n):\n    # Write your code here\n    pass");
    } else if (language === 'java') {
        editor.setOption('mode', 'text/x-java');
        editor.setValue("public class Main {\n    public static int fibonacci(int n) {\n        // Write your code here\n    }\n}");
    } else if (language === 'cpp') {
        editor.setOption('mode', 'text/x-c++src');
        editor.setValue("int fibonacci(int n) {\n    // Write your code here\n}");
    }
}

function runCode() {
    // Fake code execution for demo purpose
    document.getElementById('output1').innerText = "5"; // Set to expected result
    document.getElementById('status1').innerText = "Passed";
    document.getElementById('output2').innerText = "55";
    document.getElementById('status2').innerText = "Passed";
    document.getElementById('executionResult').innerText = "Code executed successfully.";
}

function clearCode() {
    editor.setValue('');
}

function submitCode() {
    // Fake submission for demo purpose
    location.href = "nopbai.html";
}




// Hàm để lấy thông tin từ URL và cập nhật nội dung bài tập
function loadExercise() {
    const urlParams = new URLSearchParams(window.location.search);
    const exerciseTitle = urlParams.get('exercise');

    if (exerciseTitle) {
        // Cập nhật tiêu đề và mô tả bài tập dựa trên tiêu đề
        const exercise = findExerciseByTitle(exerciseTitle);

        if (exercise) {
            document.getElementById('exerciseTitle').innerText = `Exercise Title: ${exercise.title}`;
            document.getElementById('exerciseDescription').innerText = `Description: ${exercise.description}`;
            // Cài đặt ngôn ngữ mặc định là Python
            document.getElementById('language').value = 'python'; // Hoặc ngôn ngữ nào đó bạn muốn
            initializeEditor('python'); // Khởi tạo trình soạn thảo cho ngôn ngữ mặc định
        } else {
            alert('Exercise not found.');
        }
    }
}

// Hàm để tìm bài tập dựa trên tiêu đề
function findExerciseByTitle(title) {
    const exercises = {
        python: [
            { title: "Tính tổng", description: "Viết hàm trong Python tính tổng giá trị các số nguyên nhập vào" },
            { title: "Data Structures", description: "Practice using Python lists, tuples, and dictionaries." }
        ],
        java: [
            { title: "Kiểm tra số nguyên tố", description: "Viết trương trình java kiểm tra một số có phải số nguyên tố" },
            { title: "Tính ngày", description: "Nhập vào ngày bắt đầu và ngày kết thúc, kiểm tra xem có bao nhiêu ngày bằng java" }
        ],
        cpp: [
            { title: "Bảng cửu chương", description: "Viết bảng cửu chương từ 2 đến 9. C++." }
        ]
        // Thêm các ngôn ngữ và bài tập khác ở đây
    };

    for (const lang in exercises) {
        const exercise = exercises[lang].find(ex => ex.title === title);
        if (exercise) {
            return exercise;
        }
    }
    return null;
}

// Hàm khởi tạo trình soạn thảo
function initializeEditor(language) {
    const editor = CodeMirror.fromTextArea(document.getElementById('codeEditor'), {
        mode: language,
        lineNumbers: true,
        theme: "default",
        autoCloseBrackets: true,
        matchBrackets: true,
        // Các tùy chọn khác...
    });
}

// Gọi hàm loadExercise khi trang được tải
window.onload = loadExercise;



document.addEventListener('DOMContentLoaded', function () {
    // Giả lập quá trình kiểm tra mã
    const output = "Kết quả nộp bài"; // Kết quả giả lập
    const status = "Thành công"; // Trạng thái giả lập

    // Giả lập các trường hợp kiểm tra
    const testCases = [
        { input: "test1", expectedOutput: "output1", actualOutput: "output1", status: "Đã vượt qua" },
        { input: "test2", expectedOutput: "output2", actualOutput: "output3", status: "Không vượt qua" },
        { input: "test3", expectedOutput: "output3", actualOutput: "output3", status: "Đã vượt qua" },
        // Thêm nhiều trường hợp kiểm tra nếu cần
    ];

    // Cập nhật trạng thái và đầu ra
    document.getElementById('status').innerText = status;
    document.getElementById('output').innerText = output;

    // Hiển thị các trường hợp kiểm tra
    const testCasesResultsTable = document.getElementById('test-cases-results');
    testCasesResultsTable.innerHTML = '';
    let score = 0;

    testCases.forEach(testCase => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${testCase.input}</td>
            <td>${testCase.expectedOutput}</td>
            <td>${testCase.actualOutput}</td>
            <td>${testCase.status}</td>
        `;
        testCasesResultsTable.appendChild(row);

        if (testCase.status === "Đã vượt qua") {
            score++;
        }
    });

    // Cập nhật điểm
    document.getElementById('score').innerText = `${score} / ${testCases.length}`;

    // Hiển thị trạng thái hoàn thành
    const completionStatus = score === testCases.length ? "Hoàn thành" : "Không hoàn thành";
    document.getElementById('completion-status').innerText = completionStatus;

    // Thời gian và bộ nhớ giả lập
    document.getElementById('execution-time').innerText = "100ms"; // Thời gian giả lập
    document.getElementById('memory-usage').innerText = "512KB"; // Bộ nhớ giả lập

    // Hiển thị kết quả nộp bài
    document.getElementById('result').style.display = 'block';
});

// Xử lý nút Thử lại
document.getElementById('retry').addEventListener('click', function () {
    document.getElementById('result').style.display = 'none';
    document.getElementById('test-cases-results').innerHTML = ''; // Reset bảng kết quả
    document.getElementById('score').innerText = ''; // Reset điểm
    document.getElementById('completion-status').innerText = ''; // Reset trạng thái
    document.getElementById('execution-time').innerText = ''; // Reset thời gian
    document.getElementById('memory-usage').innerText = ''; // Reset bộ nhớ
});

// Xử lý nút Quay lại bảng điều khiển
document.getElementById('back').addEventListener('click', function () {
    // Chuyển hướng về bảng điều khiển (ví dụ, có thể sử dụng window.location)
    alert("Quay lại bảng điều khiển");
});
