# 🚀 Portafolio Personal - Ariel Campos

Portafolio web moderno con diseño futurista/cyberpunk, construido con Astro y animaciones GSAP.

## ✨ Características

### 🎨 Diseño y UX
- **Tema Futurista**: Diseño cyberpunk con efecto Matrix de fondo
- **Cursor Personalizado**: Cursor animado con efectos de hover
- **Animaciones GSAP**: Transiciones suaves y efectos de entrada
- **Typing Effect**: Texto animado en la sección hero
- **Scroll Progress**: Indicador de progreso en el header
- **Responsive Design**: Adaptado para todos los dispositivos

### 📱 Secciones
- **Hero**: Presentación con efecto de typing dinámico
- **Skills**: Habilidades con barras de progreso animadas
- **Projects**: Galería de proyectos con modal y carrusel de imágenes
- **About**: Información personal y profesional
- **Experience**: Timeline de experiencia profesional
- **Contact**: Formulario de contacto con integración Formspree

### ⚡ Performance
- **Lazy Loading**: Carga diferida de imágenes
- **WebP Images**: Imágenes optimizadas en formato WebP
- **Preload/Preconnect**: Optimización de recursos críticos
- **Loading States**: Spinners para mejor feedback visual
- **SEO Optimizado**: Meta tags, Open Graph, Twitter Cards
- **Sitemap.xml**: Para mejor indexación en buscadores

### 🛠️ Tecnologías
- **Framework**: Astro
- **Animaciones**: GSAP + ScrollTrigger
- **Estilos**: Tailwind CSS + CSS personalizado
- **Tipografías**: Orbitron, Exo 2
- **Iconos**: Font Awesome
- **Formularios**: Formspree

## 📦 Instalación

```bash
# Clonar repositorio
git clone https://github.com/ArielCamposs/mi-portafolio.git

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Preview de producción
npm run preview
```

## 🔧 Configuración

### Formspree
1. Crear cuenta en [Formspree.io](https://formspree.io)
2. Crear un nuevo formulario
3. Reemplazar el Form ID en `src/components/ContactTerminal.astro`:
```astro
<form action="https://formspree.io/f/TU-FORM-ID" method="POST">
```

### SEO
Actualizar las siguientes URLs en los archivos:
- `src/layouts/Layout.astro`: Meta tags y Open Graph
- `public/sitemap.xml`: URL del sitio
- `public/robots.txt`: URL del sitemap

### Imágenes
- Colocar imágenes en `/public/images/`
- Usar formato WebP para mejor rendimiento
- Ver `OPTIMIZACION-IMAGENES.md` para más detalles

## 📁 Estructura del Proyecto

```
/
├── public/
│   ├── images/          # Imágenes del proyecto
│   ├── sitemap.xml      # Sitemap para SEO
│   ├── robots.txt       # Robots.txt
│   └── favicon.svg      # Favicon
├── src/
│   ├── components/      # Componentes Astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Skills.astro
│   │   ├── Projects.astro
│   │   ├── About.astro
│   │   ├── Experience.astro
│   │   └── ContactTerminal.astro
│   ├── layouts/
│   │   └── Layout.astro # Layout principal
│   ├── pages/
│   │   └── index.astro  # Página principal
│   └── styles/
│       └── global.css   # Estilos globales
└── package.json
```

## 🎨 Personalización

### Colores
Los colores principales se definen en `src/layouts/Layout.astro`:
```css
:root {
    --bg-color: #050505;
    --accent: #00f3ff;      /* Cyan Neon */
    --secondary: #bc13fe;   /* Purple Neon */
    --text-main: #e0e0e0;
}
```

### Contenido
- **About**: Editar `src/components/About.astro`
- **Experience**: Editar `src/components/Experience.astro`
- **Projects**: Editar `src/components/Projects.astro`
- **Skills**: Editar `src/components/Skills.astro`

## 🚀 Deployment

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Subir carpeta dist/
```

### GitHub Pages
```bash
npm run build
# Configurar GitHub Pages para servir desde /dist
```

## 📝 To-Do
- [ ] Blog o sección de artículos
- [ ] Modo claro/oscuro toggle
- [ ] Animación de carga inicial
- [ ] Analytics (Google Analytics o Plausible)
- [ ] Tests E2E con Playwright

## 📄 Licencia
MIT

## 👤 Autor
**Ariel Campos**
- Email: campos25ariel@gmail.com
- GitHub: [@ArielCamposs](https://github.com/ArielCamposs)

---

⭐ Si te gustó este proyecto, no olvides darle una estrella!
