const faqs = [
    {
        question: '¿Cuándo debo llamar al 911?',
        answer: 'Debes llamar al 911 ante cualquier emergencia que requiera atención policial, médica o de seguridad pública. Esto incluye accidentes, delitos en curso, situaciones de violencia, emergencias médicas o cualquier evento que ponga en riesgo la seguridad de las personas.'
    },
    {
        question: '¿El servicio 911 está disponible las 24 horas?',
        answer: 'Sí, el servicio de emergencias 911 está disponible las 24 horas del día, los 7 días de la semana, los 365 días del año. Nuestros operadores están siempre listos para atender tu llamada.'
    },
    {
        question: '¿Qué información debo proporcionar al llamar al 911?',
        answer: 'Es importante que proporciones: tu ubicación exacta, el tipo de emergencia, cantidad de personas involucradas, si hay heridos, y cualquier detalle relevante que pueda ayudar a los equipos de respuesta. Mantén la calma y sigue las instrucciones del operador.'
    },
    {
        question: '¿Cómo funciona el sistema de videovigilancia?',
        answer: 'El sistema de videovigilancia cuenta con cámaras estratégicamente ubicadas en espacios públicos que son monitoreadas en tiempo real por personal capacitado. Esto permite detectar situaciones sospechosas, apoyar operativos policiales y resguardar material probatorio para investigaciones.'
    },
    {
        question: '¿Puedo solicitar acceso a las grabaciones de las cámaras?',
        answer: 'El acceso a las grabaciones está regulado por normativas de privacidad y seguridad. Las solicitudes deben realizarse a través de los canales oficiales y generalmente requieren una orden judicial o justificación legal válida.'
    },
    {
        question: '¿Qué tecnología utiliza la División 911?',
        answer: 'Utilizamos sistemas de comunicación TETRA, plataformas de gestión de emergencias, videovigilancia en tiempo real, GPS para seguimiento de móviles, y sistemas integrados de despacho que permiten una respuesta coordinada y eficiente.'
    },
    {
        question: '¿Cómo puedo reportar un problema técnico con las cámaras de seguridad?',
        answer: 'Los reportes de problemas técnicos pueden realizarse a través de los canales oficiales de contacto de la División. La Sección Técnica se encarga del mantenimiento y reparación de todos los sistemas tecnológicos.'
    },
    {
        question: '¿La División 911 trabaja con otras instituciones?',
        answer: 'Sí, trabajamos en coordinación con servicios de salud, bomberos, defensa civil, organismos judiciales y otras instituciones para brindar una respuesta integral ante emergencias y garantizar la seguridad ciudadana.'
    }
];

document.addEventListener('DOMContentLoaded', function() {
    loadFAQs();
});

function loadFAQs() {
    const faqList = document.getElementById('faqList');
    if (!faqList) return;

    faqs.forEach((faq, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        
        faqItem.innerHTML = `
            <button class="faq-question" data-index="${index}">
                <span>${faq.question}</span>
                <span class="faq-icon">▼</span>
            </button>
            <div class="faq-answer">
                <div class="faq-answer-content">
                    ${faq.answer}
                </div>
            </div>
        `;
        
        faqList.appendChild(faqItem);
    });

    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
}
