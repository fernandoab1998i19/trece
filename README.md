# TRECE — Arquitectura e Ingeniería

> Firma de arquitectura e ingeniería de autor. Residencias minimalistas en hormigón visto, madera noble y luz natural.

---

## 🏛️ Sobre el Proyecto

Sitio web institucional e interactivo desarrollado para **TRECE Arquitectura e Ingeniería**. La plataforma fue concebida bajo los más altos estándares de diseño editorial (*Architectural Digest style*), priorizando el impacto visual fotográfico, la riqueza táctil de los materiales y la conversión directa con el cliente.

---

## 🌟 Características Principales

- **Diseño Editorial Luxury**: Paleta de color hueso/crema (`#F4F4F0`), ausencia de tarjetas corporativas genéricas y más del 80% de espacio dedicado a fotografía arquitectónica de gran formato.
- **Módulo Interactivo Antes & Después**: Comparador deslizable táctil en tiempo real para visualizar proyectos de remodelación e interiorismo por categorías:
  - *Salas & Áreas Sociales*
  - *Cocinas & Comedores*
  - *Dormitorio Principal & Baños*
  - *Fachadas & Exteriores*
- **Identidad Oficial Vectorizada**: Isotipo apilado `TE` e insignia oficial vectorizados en SVG de alta nitidez.
- **Showcase de Obras Reales**: Integración de proyectos entregados directamente desde el feed oficial de Instagram [`@trece.arq.ing`](https://www.instagram.com/trece.arq.ing).
- **Sección Familia TRECE**: Narrativa humana de acompañamiento directo con los fundadores, transparencia y visitas a obra.
- **Canal Directo de WhatsApp**: Enlaces de conversión al número **`+591 77019154`**.
- **Responsive de Alta Gama**: Adaptabilidad fluida para dispositivos móviles (iPhone 14/15/16 Pro Max y modelos Ultra).

---

## 🛠️ Tecnologías Utilizadas

- **Core**: React 18 + TypeScript + Vite
- **Routing**: TanStack Router (File-based routing)
- **Styling**: TailwindCSS v4 + Vanilla CSS Design Tokens (oklch)
- **Vector Graphics**: Custom SVG Brand Mark & Monogram
- **Icons & UI**: Lucide React + Custom Architectural Icons
- **State Management & Hooks**: React Hooks (`useState`, `useRef`, `useCallback`)

---

## 🚀 Instalación y Ejecución Local

### Prerrequisitos
- Node.js (v18+) o Bun

### Pasos

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/fernandoab1998i19/trece.git
   cd trece
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abrir en el navegador:
   `http://localhost:5173`

---

## 📂 Estructura del Proyecto

```
trece/
├── public/                # Favicons oficiales (SVG, ICO) y assets estáticos
├── src/
│   ├── assets/            # Fotografías reales de obras e imágenes de alta definición
│   ├── components/        # Componentes UI reutilizables (Logo.tsx, etc.)
│   ├── hooks/             # Custom React hooks (useReveal, useMobile)
│   ├── routes/            # Configuración de rutas (index.tsx, __root.tsx)
│   ├── styles.css         # Tokens de diseño CSS y utilidades Tailwind
│   └── main.tsx           # Punto de entrada de React
├── package.json           # Dependencias y scripts
└── README.md              # Documentación del proyecto
```

---

## 📞 Contacto & Redes Sociales

- **Firma**: TRECE Arquitectura e Ingeniería
- **WhatsApp Directo**: [+591 77019154](https://wa.me/59177019154)
- **Instagram Oficial**: [@trece.arq.ing](https://www.instagram.com/trece.arq.ing)

---

© {new Date().getFullYear()} TRECE Arquitectura e Ingeniería. Todos los derechos reservados.
