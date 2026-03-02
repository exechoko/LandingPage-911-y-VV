const galleryImages = [
    { 
        id: 1, 
        title: 'Centro de Operaciones', 
        category: 'Instalaciones',
        url: 'https://lh3.googleusercontent.com/d/1example1'
    },
    { 
        id: 2, 
        title: 'Sala de Videovigilancia', 
        category: 'Tecnología',
        url: 'https://lh3.googleusercontent.com/d/1example2'
    },
    { 
        id: 3, 
        title: 'Operadores en servicio', 
        category: 'Personal',
        url: 'https://lh3.googleusercontent.com/d/1example3'
    },
    { 
        id: 4, 
        title: 'Sistema de cámaras', 
        category: 'Tecnología',
        url: 'https://lh3.googleusercontent.com/d/1example4'
    },
    { 
        id: 5, 
        title: 'Unidad Móvil', 
        category: 'Equipamiento',
        url: 'https://lh3.googleusercontent.com/d/1example5'
    },
    { 
        id: 6, 
        title: 'Sala de Despacho', 
        category: 'Instalaciones',
        url: 'https://lh3.googleusercontent.com/d/1example6'
    },
    { 
        id: 7, 
        title: 'Equipos de comunicación', 
        category: 'Tecnología',
        url: 'https://lh3.googleusercontent.com/d/1example7'
    },
    { 
        id: 8, 
        title: 'Patrulla motorizada', 
        category: 'Equipamiento',
        url: 'https://lh3.googleusercontent.com/d/1example8'
    },
    { 
        id: 9, 
        title: 'Centro de monitoreo', 
        category: 'Instalaciones',
        url: 'https://lh3.googleusercontent.com/d/1example9'
    }
];

document.addEventListener('DOMContentLoaded', function() {
    loadGallery();
});

function loadGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;

    galleryImages.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        galleryItem.innerHTML = `
            <div class="gallery-image">
                🖼️
            </div>
            <div class="gallery-info">
                <span class="gallery-category">${image.category}</span>
                <h3>${image.title}</h3>
            </div>
        `;
        
        galleryGrid.appendChild(galleryItem);
    });
}
