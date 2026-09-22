# Demo — Dr. Diego Buendia

Landing demo comercial (no producto final) para mostrar una versión moderna
del sitio del Dr. Diego Buendia. Next.js 14 (App Router) + TypeScript +
TailwindCSS + Framer Motion.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Cómo subirlo a StackBlitz

1. Ve a stackblitz.com → "Create new" → "Next.js".
2. Borra el proyecto starter que te genera.
3. Arrastra **toda esta carpeta** (no archivo por archivo) al panel de
   archivos de StackBlitz, o usa "Upload folder" si aparece la opción.
4. StackBlitz detecta el `package.json` y corre `npm install` solo.

Si prefieres GitHub: crea un repo, sube esta carpeta completa, y en
StackBlitz usa "Import from GitHub" pegando la URL del repo — es la vía
más confiable, evita errores de copiar/pegar archivo por archivo.

## Estructura

```
app/
  layout.tsx      → fuentes (Fraunces + Inter) y metadata
  page.tsx         → monta el componente principal
  globals.css       → Tailwind + animación Ken Burns del hero
components/
  DemoDrDiegoBuendia.tsx  → toda la landing (navbar, hero, especialidades,
                             procedimientos, sobre el doctor, CTA, footer)
```

## Notas

- Las imágenes son stock de Unsplash (placeholders), listas para
  reemplazarse por fotografía real del doctor y su consultorio.
- El botón "Agendar cita" ya apunta al WhatsApp real del sitio actual
  (wa.link/jefn18).
- Sin backend, base de datos, autenticación ni CMS — es intencional,
  es una demo visual.
- Preparado para migrar después a WordPress si el cliente aprueba el
  proyecto.
