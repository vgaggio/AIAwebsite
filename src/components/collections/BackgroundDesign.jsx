import React, { useId } from "react"; // Importa React y el hook useId

// Componente funcional que recibe props
const BackgroundDesign = (props) => {
  let id = useId(); // Genera un ID único para el componente usando useId
  return (
    // Aplica todas las props al div contenedor
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026" // Define el tamaño del SVG
        fill="none" // No rellena el SVG por defecto
        aria-hidden="true" // Oculta el SVG de tecnologías de accesibilidad
        className="absolute inset-0 h-full w-full animate-spin-slow" // Estilo del SVG, ocupando todo el contenedor y animándose lentamente
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4" // Color del trazo
          strokeOpacity="0.7" // Opacidad del trazo
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`} // Aplica el gradiente usando el ID único
          strokeLinecap="round" // Define los extremos del trazo como redondeados
        />
        <defs>
          {/* Define un gradiente lineal */}
          <linearGradient
            id={`${id}-gradient-1`} // ID único para el gradiente
            x1="1" // Coordenada x inicial del gradiente
            y1="513" // Coordenada y inicial del gradiente
            x2="1" // Coordenada x final del gradiente
            y2="1025" // Coordenada y final del gradiente
            gradientUnits="userSpaceOnUse" // Unidades del gradiente
          >
            <stop stopColor="#06b6d4" /> 
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" /> 
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026" // Define el tamaño del SVG
        fill="none" // No rellena el SVG por defecto
        aria-hidden="true" // Oculta el SVG de tecnologías de accesibilidad
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower" // Estilo del SVG, ocupando todo el contenedor y animándose en reversa lentamente
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4" // Color del trazo
          strokeOpacity="0.7" // Opacidad del trazo
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`} // Aplica el gradiente usando el ID único
          strokeLinecap="round" // Define los extremos del trazo como redondeados
        />
        <defs>
          {/* Define un gradiente lineal */}
          <linearGradient
            id={`${id}-gradient-2`} // ID único para el gradiente
            x1="913" // Coordenada x inicial del gradiente
            y1="513" // Coordenada y inicial del gradiente
            x2="913" // Coordenada x final del gradiente
            y2="913" // Coordenada y final del gradiente
            gradientUnits="userSpaceOnUse" // Unidades del gradiente
          >
            <stop stopColor="#06b6d4" /> 
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" /> 
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default BackgroundDesign; // Exporta el componente para su uso en otros archivos
