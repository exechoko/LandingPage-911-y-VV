# División 911 y V.V - Sitio Web Estático

Sitio web estático HTML/CSS/JavaScript para la División 911 y Videovigilancia de la Policía de Entre Ríos.

## Características

✅ **5 páginas completas** (Inicio, Dependencias, Galería, Tecnología, FAQ)  
✅ **HTML estático puro** - No requiere servidor ni compilación  
✅ **Video de Google Drive** con autoplay en la página de inicio  
✅ **Diseño responsivo** - Funciona en móviles, tablets y desktop  
✅ **JavaScript vanilla** - Sin dependencias externas  
✅ **Navegación dinámica** - Menú móvil funcional  

## Estructura del Proyecto

```
static/
├── index.html              # Página de inicio
├── dependencias.html       # Dependencias y contactos
├── galeria.html           # Galería de imágenes
├── tecnologia.html        # Tecnología y operaciones
├── faq.html               # Preguntas frecuentes
├── css/
│   └── styles.css         # Estilos CSS
├── js/
│   ├── main.js            # JavaScript principal
│   ├── gallery.js         # Lógica de la galería
│   └── faq.js             # Lógica de FAQ
└── images/                # Carpeta para imágenes (crear)
```

## Cómo Usar

### Opción 1: Abrir directamente
1. Navega a la carpeta `static/`
2. Haz doble clic en `index.html`
3. El sitio se abrirá en tu navegador predeterminado

### Opción 2: Usar un servidor local simple
```bash
# Con Python 3
cd static
python -m http.server 8000

# Con Node.js (http-server)
cd static
npx http-server

# Con PHP
cd static
php -S localhost:8000
```

Luego abre `http://localhost:8000` en tu navegador.

## Agregar Imágenes Reales

1. **Crear carpeta de imágenes:**
   ```
   static/images/
   ```

2. **Descargar imágenes del sitio original:**
   - Visita: https://sites.google.com/view/div911per/galería
   - Haz clic derecho en cada imagen → "Guardar imagen como..."
   - Guárdalas en `static/images/`

3. **Actualizar referencias en `js/gallery.js`:**
   ```javascript
   const galleryImages = [
       { 
           id: 1, 
           title: 'Centro de Operaciones', 
           category: 'Instalaciones',
           url: 'images/imagen1.jpg'  // Actualizar con nombre real
       },
       // ... más imágenes
   ];
   ```

4. **Modificar `gallery.js` para mostrar imágenes:**
   Reemplaza en la función `loadGallery()`:
   ```javascript
   <div class="gallery-image">
       <img src="${image.url}" alt="${image.title}" style="width:100%;height:100%;object-fit:cover;">
   </div>
   ```

## Video de Google Drive

El video se carga automáticamente con autoplay desde:
```
https://drive.google.com/file/d/1fUwduKZ1fBTt2xZJSn-AL88l_NftDpho/preview
```

**Nota:** Google Drive puede requerir que el video sea público para que funcione el autoplay.

## Despliegue

### Hosting Gratuito Recomendado:

1. **Netlify** (Recomendado)
   - Arrastra la carpeta `static/` a netlify.com/drop
   - O conecta con GitHub para despliegue automático

2. **Vercel**
   - `npm i -g vercel`
   - `cd static && vercel`

3. **GitHub Pages**
   - Sube la carpeta `static/` a un repositorio
   - Activa GitHub Pages en Settings

4. **Hosting tradicional**
   - Sube todos los archivos por FTP
   - Asegúrate de mantener la estructura de carpetas

## Compatibilidad

- ✅ Chrome/Edge (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Safari (últimas versiones)
- ✅ Navegadores móviles (iOS/Android)

## Personalización

### Cambiar colores:
Edita las variables CSS en `css/styles.css`:
```css
:root {
    --primary-600: #2563eb;  /* Color principal */
    --primary-700: #1d4ed8;  /* Color oscuro */
    /* ... más colores */
}
```

### Modificar contenido:
Edita directamente los archivos HTML correspondientes.

### Agregar más páginas:
1. Crea un nuevo archivo `.html`
2. Copia la estructura de una página existente
3. Actualiza los enlaces en `js/main.js`

## Notas Importantes

- **No requiere instalación** de dependencias
- **No requiere compilación** ni build
- **Funciona offline** una vez descargado
- **Compatible con cualquier hosting** web

## Licencia

© 2024 División 911 y Videovigilancia - Policía de Entre Ríos
