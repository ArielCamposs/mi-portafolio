# Configuración de Google Analytics

## Cómo configurar Google Analytics en tu portafolio

### 1. Crear cuenta de Google Analytics

1. Ve a [Google Analytics](https://analytics.google.com/)
2. Inicia sesión con tu cuenta de Google
3. Haz clic en "Empezar a medir"
4. Completa la información de tu cuenta
5. Configura una propiedad (tu sitio web)
6. Acepta los términos de servicio

### 2. Obtener tu ID de medición

1. En Google Analytics, ve a **Admin** (⚙️)
2. En la columna "Propiedad", haz clic en **Flujos de datos**
3. Selecciona tu flujo de datos web
4. Copia el **ID de medición** (formato: `G-XXXXXXXXXX`)

### 3. Configurar en tu portafolio

Abre el archivo `src/components/Analytics.astro` y reemplaza:

```astro
const { id = 'G-XXXXXXXXXX' } = Astro.props;
```

Por tu ID real:

```astro
const { id = 'G-TU_ID_AQUI' } = Astro.props;
```

**Ejemplo:**
```astro
const { id = 'G-ABC123DEF4' } = Astro.props;
```

### 4. Verificar que funciona

1. Despliega tu sitio
2. Ve a Google Analytics > Informes > Tiempo real
3. Visita tu sitio web
4. Deberías ver tu visita en tiempo real

### 5. Alternativa: Pasar ID como prop

También puedes pasar el ID directamente en `Layout.astro`:

```astro
<Analytics id="G-TU_ID_AQUI" />
```

## Métricas que puedes ver

Con Google Analytics podrás ver:

- 📊 **Visitantes**: Cuántas personas visitan tu portafolio
- 🌍 **Ubicación**: De dónde son tus visitantes
- 📱 **Dispositivos**: Qué dispositivos usan (móvil, desktop, tablet)
- ⏱️ **Tiempo en sitio**: Cuánto tiempo pasan en tu portafolio
- 📄 **Páginas vistas**: Qué secciones son más populares
- 🔗 **Fuentes de tráfico**: Cómo llegan a tu sitio (Google, redes sociales, etc.)

## Privacidad

El componente de Analytics solo se carga si:
1. Has configurado un ID válido
2. El ID no es el placeholder por defecto

Esto significa que durante el desarrollo local, Analytics no se cargará y no afectará el rendimiento.

## Alternativas a Google Analytics

Si prefieres una alternativa más enfocada en privacidad:

### Plausible Analytics
- Más simple y enfocado en privacidad
- No usa cookies
- Cumple con GDPR automáticamente
- [plausible.io](https://plausible.io)

### Umami
- Open source y auto-hospedable
- Enfocado en privacidad
- Gratis si lo auto-hospedas
- [umami.is](https://umami.is)

### Simple Analytics
- Enfocado en privacidad
- Sin cookies
- Cumple con GDPR
- [simpleanalytics.com](https://simpleanalytics.com)
