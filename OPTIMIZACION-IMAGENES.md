# Optimización de Imágenes - Portafolio

## Imágenes Actuales
Todas las imágenes del proyecto ya están en formato **WebP**, que es el formato más optimizado para web.

### Ubicación
- `/public/images/` - Imágenes del proyecto de catálogo

## Lazy Loading Implementado
✅ Las imágenes del carrusel de proyectos ahora usan `loading="lazy"` para cargar solo cuando son necesarias.

## Componente OptimizedImage
He creado un componente reutilizable en `/src/components/OptimizedImage.astro` que puedes usar así:

```astro
---
import OptimizedImage from '../components/OptimizedImage.astro';
---

<OptimizedImage 
    src="/images/mi-imagen.webp"
    alt="Descripción de la imagen"
    width={800}
    height={600}
/>
```

## Cómo Optimizar Nuevas Imágenes

### Opción 1: Convertir a WebP Online
1. Ve a https://squoosh.app/
2. Arrastra tu imagen (JPG, PNG, etc.)
3. Selecciona WebP en el panel derecho
4. Ajusta la calidad (recomendado: 80-85%)
5. Descarga y guarda en `/public/images/`

### Opción 2: Usar CLI (si tienes Node.js)
```bash
npm install -g sharp-cli
sharp -i imagen.jpg -o imagen.webp --webp
```

### Opción 3: Usar Photoshop/GIMP
- Exportar como WebP con calidad 80-85%

## Mejores Prácticas
1. **Tamaño recomendado**: Máximo 1920px de ancho
2. **Calidad WebP**: 80-85% (buen balance calidad/tamaño)
3. **Nombres de archivo**: usa kebab-case (ej: `proyecto-ecommerce-1.webp`)
4. **Alt text**: Siempre incluye descripciones significativas

## Tamaños Actuales
- `musaplast1.webp`: 1.5 MB (⚠️ Considerar reducir a ~500KB)
- `musaplast2.webp`: 556 KB (✅ Buen tamaño)
- `musaplast3.webp`: 391 KB (✅ Buen tamaño)

### Recomendación
La primera imagen (`musaplast1.webp`) es muy pesada. Considera:
1. Reducir resolución si es mayor a 1920px
2. Bajar calidad WebP a 80%
3. Objetivo: ~500-600 KB máximo por imagen
