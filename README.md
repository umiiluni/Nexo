# Nexo Seguridad y Redes

Sitio web de **Nexo Seguridad y Redes**, empresa familiar de Cruz del Eje (Córdoba, Argentina), fundada en 2024.

> Tu casa conectada, tu negocio seguro.

## Qué ofrece el sitio

- **Cámaras de seguridad** para casas, comercios y empresas.
- **Instalación de antenas Starlink** (instalamos, no vendemos; asesoramos en la compra).
- **Alquiler de Starlink para eventos**.
- **Redes WiFi · Universo Net**, con internet por fibra óptica.
- Formulario de presupuesto, preguntas frecuentes y sección "Sobre nosotros".

## Contacto

- WhatsApp: +54 9 3549 58-2085
- Email: nexoseguridadyredes@gmail.com
- Instagram: [@nexo_seguridad](https://instagram.com/nexo_seguridad)

## Estructura

```
Nexo Web.dc.html      Página principal (renombrar a index.html para publicar)
support.js            Runtime del componente
image-slot.js         Fotos editables
_ds/                  Sistema de diseño Nexo (tokens, componentes)
assets/
  hero-video.mp4      Video del inicio
  hero-poster.jpg     Imagen previa del video
  logo-n-nexo-400.png Logo optimizado
  nosotros.webp       Foto de "Sobre nosotros"
  fotos/              Fotos de servicios
  icons/              Íconos (Lucide)
```

## Cómo verlo en local

Abrí la carpeta con un servidor estático (el video y los módulos no cargan bien desde `file://`):

```
npx serve .
```

o

```
python3 -m http.server 8000
```

Después entrá a `http://localhost:8000`.

## Formulario de contacto

Al enviar, el formulario:

1. Abre WhatsApp al +54 9 3549 58-2085 con el mensaje armado.
2. Envía una copia por mail a nexoseguridadyredes@gmail.com mediante [FormSubmit](https://formsubmit.co).

La primera vez que se use hay que **confirmar el mail de activación** que FormSubmit manda a esa casilla. Hasta entonces no llegan los mails (revisá spam).

## Publicar

Es un sitio estático, sin build. Funciona en Vercel, Netlify o GitHub Pages: subí la carpeta y apuntá a `index.html`.

Antes de publicar, en Tweaks dejá apagado **editarVideo** (oculta el lápiz de ajuste del video).

## Diseño

- Colores: azul profundo `#0A2A6B`, blanco, negro noche `#0B0D12`, azul señal `#1E7BFF`, gris niebla `#EEF2F8`.
- Tipografías: Montserrat (títulos) e Inter (texto).
- Voseo rioplatense, sin emoji.
