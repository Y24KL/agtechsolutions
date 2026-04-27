// --- 1. EXECUTIVE DATA ---
const executiveData = {
    'Alayaki': {
        name: 'Alayaki Oluwadamilola Y.',
        role: 'Chief Strategist Officer/Co-Founder',
        specialty: 'Strategic Growth',
        image: 'images/Alayaki.jpg',
        bio: 'Focuses on the long-term scalability of projects, ensuring AG TECH remains a sustainable and impactful force in the global market'
    },
    'Gamaliel': {
        name: 'Gamaliel Godfrey.B',
        role: 'Chief Creative Officer/Co-Founder',
        specialty: 'Brand Identity and Media Design',
        image: 'images/2.jpeg',
        bio: 'Bridges the gap between complex technology and human-centric design, overseeing the visual narrative of AG TECH.'
    },
    'Moses': {
        name: 'Avamale Moses.O',
        role: 'COO/Co-Founder',
        specialty: 'Machine Learning Expert',
        image: 'images/MOSES 2.jpeg',
        bio: 'Drives operational excellence, specializing in integrating AI and Machine Learning into practical business solutions.'
    },
    'Oluwadamilola': {
        name: 'Agbebaku Oluwadamilola.B',
        role: 'Chief Executive Oficer/Founder',
        specialty: 'Cybersecurity Analyst',
        image: 'images/AG .jpeg',
        bio: 'BLeading AG TECH with a vision of secure, resilient infrastructure, building technical standards that empower African digital ecosystems.'
    }
};

// --- 2. MODAL FUNCTIONS ---
window.openModal = function(key) {
    const person = executiveData[key];
    const modal = document.getElementById('executive-modal');
    if (!person || !modal) return;

    // Inject data into modal
    document.getElementById('modal-img').src = person.image;
    document.getElementById('modal-name').innerText = person.name;
    document.getElementById('modal-role').innerText = person.role;
    document.getElementById('modal-specialty').innerText = person.specialty;
    document.getElementById('modal-bio').innerText = person.bio;

    // Show modal
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.add('active');
        modal.classList.remove('opacity-0', 'pointer-events-none');
    }, 10);
    
    document.body.style.overflow = 'hidden'; // Stop background scrolling
};

window.closeModal = function() {
    const modal = document.getElementById('executive-modal');
    if (!modal) return;

    modal.classList.remove('active');
    modal.classList.add('opacity-0', 'pointer-events-none');
    
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
    
    document.body.style.overflow = 'auto'; // Restore scrolling
};

// --- 3. CONTACT FORM LOGIC ---
var form = document.getElementById("my-form");
async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("form-status");
    var data = new FormData(event.target);
    var button = document.getElementById("submit-button");

    button.innerText = "Sending...";
    button.disabled = true;

    fetch("https://formspree.io/f/xlgwdlgj", {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            window.location.href = "thankyou.html";
        } else {
            status.innerHTML = "Oops! There was a problem submitting your form";
            status.classList.add("text-red-600");
        }
    }).catch(error => {
        status.innerHTML = "Oops! Connection error.";
        status.classList.add("text-red-600");
    }).finally(() => {
        button.innerText = "Send Message";
        button.disabled = false;
    });
}
if(form) form.addEventListener("submit", handleSubmit);