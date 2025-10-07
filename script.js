// Menunggu seluruh konten halaman dimuat sebelum menjalankan script
document.addEventListener('DOMContentLoaded', () => {
    
    // Mengambil elemen-elemen yang dibutuhkan dari HTML
    const calculateBtn = document.getElementById('calculateBtn');
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const resultDiv = document.getElementById('result');

    // Menambahkan event listener pada tombol "Hitung BMI"
    calculateBtn.addEventListener('click', () => {
        // Mengambil nilai berat dan tinggi dari input
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value);

        // Validasi input
        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            displayResult('Mohon masukkan berat dan tinggi badan yang valid.', 'error');
            return; // Hentikan eksekusi jika input tidak valid
        }

        // Konversi tinggi dari cm ke meter
        const heightInMeters = height / 100;

        // Rumus BMI = berat (kg) / (tinggi (m) * tinggi (m))
        const bmi = weight / (heightInMeters * heightInMeters);

        // Membulatkan hasil BMI menjadi satu angka di belakang koma
        const bmiFormatted = bmi.toFixed(1);

        // Menentukan kategori BMI dan pesannya
        let category = '';
        let message = '';

        if (bmi < 18.5) {
            category = 'underweight';
            message = 'Anda memiliki berat badan kurang (Underweight).';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = 'normal';
            message = 'Berat badan Anda normal (Ideal).';
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = 'overweight';
            message = 'Anda memiliki berat badan berlebih (Overweight).';
        } else {
            category = 'obese';
            message = 'Anda mengalami obesitas (Obese).';
        }

        // Membuat teks hasil untuk ditampilkan
        const resultText = `BMI Anda adalah <strong>${bmiFormatted}</strong>. ${message}`;
        
        // Menampilkan hasil
        displayResult(resultText, category);
    });

    // Fungsi untuk menampilkan hasil di dalam result box
    function displayResult(message, category) {
        resultDiv.style.display = 'block'; // Tampilkan kotak hasil
        resultDiv.innerHTML = message;
        
        // Menghapus semua kelas kategori sebelumnya dan menambahkan yang baru
        resultDiv.className = 'result-box'; // Reset kelas
        if (category) {
            resultDiv.classList.add(category);
        }
    }
});
