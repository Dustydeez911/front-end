
class Tugas {
  constructor(nama) {
    this.nama = nama;
    this.selesai = false;
  }
}


let daftarTugas = [];


const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const loadingEl = document.getElementById("loading");


// Simulasi proses async (tambah / hapus)
function simulasiProses(pesan, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(pesan);
      resolve();
    }, delay);
  });
}

// Tambah tugas
async function tambahTugas() {
  const nama = taskInput.value.trim();
  if (nama === "") return;

  tampilkanLoading(true);
  await simulasiProses("✅ Tugas berhasil ditambahkan!");

  const tugasBaru = new Tugas(nama);
  daftarTugas.push(tugasBaru);
  taskInput.value = "";
  renderTugas();
  tampilkanLoading(false);
}

// Hapus tugas
async function hapusTugas(index) {
  tampilkanLoading(true);
  await simulasiProses("🗑️ Tugas berhasil dihapus!");

  daftarTugas.splice(index, 1);
  renderTugas();
  tampilkanLoading(false);
}

// Tandai selesai / batal
function toggleSelesai(index) {
  daftarTugas[index].selesai = !daftarTugas[index].selesai;
  renderTugas();
}


function renderTugas() {
  taskList.innerHTML = "";

  daftarTugas.forEach((tugas, index) => {
    const li = document.createElement("li");
    if (tugas.selesai) li.classList.add("completed");

    const span = document.createElement("span");
    span.textContent = tugas.nama;

    const actions = document.createElement("div");
    actions.className = "actions";

    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = tugas.selesai ? "Batal" : "Selesai";
    toggleBtn.className = tugas.selesai ? "cancel" : "done";
    toggleBtn.onclick = () => toggleSelesai(index);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Hapus";
    deleteBtn.className = "delete";
    deleteBtn.onclick = () => hapusTugas(index);

    actions.appendChild(toggleBtn);
    actions.appendChild(deleteBtn);
    li.appendChild(span);
    li.appendChild(actions);

    taskList.appendChild(li);
  });
}

// ==============================
// UTILITAS
// ==============================
function tampilkanLoading(status) {
  loadingEl.style.display = status ? "block" : "none";
}

// ==============================
// EVENT LISTENER
// ==============================
addBtn.addEventListener("click", tambahTugas);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") tambahTugas();
});
