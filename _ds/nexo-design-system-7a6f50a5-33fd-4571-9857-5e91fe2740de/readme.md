# Nexo Seguridad y Redes — Design System

Empresa de Cruz del Eje (Córdoba, Argentina) que instala cámaras de seguridad, internet por fibra óptica, antenas Starlink y redes WiFi (Universo Net) para hogares, comercios y empresas. Instagram: @nexo_seguridad. Slogan: **"Tu casa conectada, tu negocio seguro."**

**Sources:** `uploads/Nexo_Manual_de_Marca, NEXO.pdf` (12-page identity manual, copy in `assets/source/manual.pdf`), `uploads/N de Nexo Seguridad y Redes.png` (logo → `assets/logo-n-nexo.png`), and the brief. No codebase or Figma.

## Content fundamentals
- Idioma: español rioplatense, **voseo** ("escribinos", "mirá", "contanos"). Hablamos de vos, como en el barrio.
- Claros: sin jerga. "Vas a ver tus cámaras desde el celular", no "acceso remoto P2P".
- Cercanos y confiables: respuestas con nombre propio; prometemos solo lo que cumplimos; mostramos trabajo real.
- Casing: títulos en oración; etiquetas en MAYÚSCULAS con espaciado amplio (SEGURIDAD · CONECTIVIDAD · CRUZ DEL EJE). Sin emoji.
- Ejemplos: "Conectamos y cuidamos lo que importa." · "¿Se corta el WiFi en el fondo?" · "Escribinos por DM".

## Visual foundations
- **Color:** azul profundo #0A2A6B (45%), blanco (30%), negro noche #0B0D12 (15%), azul señal #1E7BFF (10%, solo para resaltar), gris niebla #EEF2F8 (fondos suaves). Tintes derivados: #E3EEFF, texto suave #4B5775.
- **Tipo:** Montserrat ExtraBold/Bold títulos; SemiBold +0.24em mayúsculas para etiquetas; Inter para cuerpo, datos, botones, precios.
- **Fondos:** planos. Azul profundo con **anillo de conexión** (círculos finos translúcidos recortados en el borde) como único recurso decorativo. Sin degradados fuertes ni brillos (el degradado interno del PNG del logo es parte de la pieza, no un patrón a replicar).
- **Fotografía:** trabajo real en terreno, técnicos en altura, postes, antenas, cielo abierto, luz natural, tratamiento levemente frío. Nunca de catálogo.
- **Formas:** radios 8/12/20/28, pill 999. Cards planas: fondo niebla o blanco con borde 1px azul 12%, sin sombra (`--shadow-md` solo si se necesita elevar).
- **Espaciado:** escala de 4px, mucho aire (secciones 88–96px).
- **Hover/press:** fade/opacity y `scale(.98)` al presionar, 160ms ease-out. Sin rebotes. Foco: anillo azul señal 3px.
- **Transparencia/blur:** solo en anillos y cabecera sticky; sin blur.
- **Logo:** pieza cerrada. No deformar, rotar, recolorear ni agregar efectos; no sobre fondos cargados. Margen = 20% del ancho; mínimo 25 mm / 120 px; sobre azul profundo usar versión circular con filete blanco.

## Iconography
Lucide (línea, trazo redondeado), copiado en `assets/icons/` (cctv, cable, satellite-dish, wifi, phone, map-pin, arrow-right, check, message-circle, shield-check, mail, instagram). Siempre en blanco sobre **cuadrado azul de esquinas suaves** (`ServiceIcon`), un ícono fijo por servicio: Cámaras=cctv, Fibra=cable, Starlink=satellite-dish, WiFi=wifi. Sin emoji ni íconos unicode. *Lucide es una sustitución: el manual no entrega el set original.*

## Index
- `styles.css` → `tokens/` (fonts, colors, typography, spacing)
- `assets/` logo-n-nexo.png (único logo disponible: cuadrado con fondo azul), icons/, source/manual.pdf
- `guidelines/` tarjetas de fundamentos
- `ui_kits/website/` landing · `ui_kits/social/` posts Instagram, historia, tarjeta personal

### Components (`components/core/`)
Button, Pill, ServiceIcon, Card, Input, Ring, Logo.

**Notas:** no hay logo en PNG transparente ni vectorial; la versión circular es un recorte CSS del PNG. Tipografías vía Google Fonts (sin archivos locales).
