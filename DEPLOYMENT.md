# Deployment Guide - Portafolio Ariel Campos

## 📋 Pre-deployment Checklist

Antes de desplegar tu portafolio, asegúrate de:

- [ ] Configurar Google Analytics ID en `src/components/Analytics.astro`
- [ ] Actualizar URLs en `src/layouts/Layout.astro` (meta tags)
- [ ] Actualizar URL en `public/sitemap.xml`
- [ ] Actualizar URL en `public/robots.txt`
- [ ] Verificar Formspree Form ID en `src/components/ContactTerminal.astro`
- [ ] Optimizar imágenes (ver `OPTIMIZACION-IMAGENES.md`)
- [ ] Crear imagen Open Graph (`og-image.jpg`) 1200x630px
- [ ] Actualizar información personal en componentes
- [ ] Probar formulario de contacto
- [ ] Verificar que todas las animaciones funcionan

## 🚀 Opciones de Deployment

### Opción 1: Vercel (Recomendado)

**Ventajas:**
- Deploy automático desde GitHub
- HTTPS gratis
- CDN global
- Dominio personalizado gratis
- Analytics integrado

**Pasos:**

1. **Crear cuenta en Vercel**
   ```bash
   # Instalar Vercel CLI
   npm install -g vercel
   ```

2. **Conectar con GitHub**
   - Ve a [vercel.com](https://vercel.com)
   - Conecta tu repositorio de GitHub
   - Selecciona el proyecto

3. **Configurar proyecto**
   - Framework Preset: **Astro**
   - Build Command: `npm run build`
   - Output Directory: `dist`

4. **Deploy**
   ```bash
   vercel
   ```

5. **Configurar dominio personalizado** (opcional)
   - Ve a Settings > Domains
   - Agrega tu dominio
   - Actualiza DNS según instrucciones

### Opción 2: Netlify

**Ventajas:**
- Deploy automático desde GitHub
- HTTPS gratis
- Formularios integrados
- Funciones serverless

**Pasos:**

1. **Crear cuenta en Netlify**
   - Ve a [netlify.com](https://netlify.com)
   - Conecta con GitHub

2. **Nuevo sitio desde Git**
   - Selecciona tu repositorio
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Deploy**
   - Click en "Deploy site"

4. **Configurar dominio** (opcional)
   - Domain settings > Add custom domain

### Opción 3: GitHub Pages

**Ventajas:**
- Gratis para repositorios públicos
- Integrado con GitHub

**Pasos:**

1. **Configurar Astro para GitHub Pages**

   Edita `astro.config.mjs`:
   ```javascript
   export default defineConfig({
     site: 'https://tu-usuario.github.io',
     base: '/mi-portafolio',
   });
   ```

2. **Crear workflow de GitHub Actions**

   Crea `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: 18
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

3. **Configurar GitHub Pages**
   - Settings > Pages
   - Source: Deploy from a branch
   - Branch: gh-pages

### Opción 4: Cloudflare Pages

**Ventajas:**
- CDN ultra-rápido
- HTTPS gratis
- Ilimitado bandwidth

**Pasos:**

1. **Crear cuenta en Cloudflare Pages**
   - Ve a [pages.cloudflare.com](https://pages.cloudflare.com)

2. **Conectar repositorio**
   - Connect to Git
   - Selecciona tu repositorio

3. **Configurar build**
   - Framework: Astro
   - Build command: `npm run build`
   - Build output: `dist`

## 🔧 Post-deployment

### 1. Verificar Analytics
- Ve a Google Analytics
- Verifica que estés recibiendo datos en tiempo real

### 2. Probar formulario
- Envía un mensaje de prueba
- Verifica que llegue a tu email

### 3. Verificar SEO
- Usa [Google Search Console](https://search.google.com/search-console)
- Envía tu sitemap: `https://tu-dominio.com/sitemap.xml`

### 4. Probar performance
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

### 5. Verificar Open Graph
- [Open Graph Debugger](https://www.opengraph.xyz/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## 🌐 Configurar dominio personalizado

### Comprar dominio
Recomendaciones:
- [Namecheap](https://www.namecheap.com/)
- [Google Domains](https://domains.google/)
- [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/)

### Configurar DNS

Para Vercel:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

Para Netlify:
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: tu-sitio.netlify.app
```

## 📊 Monitoreo

### Uptime Monitoring
- [UptimeRobot](https://uptimerobot.com/) - Gratis
- [Pingdom](https://www.pingdom.com/)

### Error Tracking
- [Sentry](https://sentry.io/) - Gratis para proyectos pequeños
- [Rollbar](https://rollbar.com/)

## 🔒 Seguridad

### Headers de seguridad
Agrega en tu plataforma de hosting:

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

### HTTPS
- Todas las plataformas mencionadas incluyen HTTPS gratis
- Asegúrate de forzar HTTPS en la configuración

## 🎉 ¡Listo!

Tu portafolio está ahora en producción. Recuerda:
- Actualizar contenido regularmente
- Agregar nuevos proyectos
- Revisar analytics mensualmente
- Mantener dependencias actualizadas

## 📞 Soporte

Si tienes problemas:
1. Revisa la documentación de tu plataforma de hosting
2. Verifica los logs de build
3. Prueba localmente con `npm run build && npm run preview`
