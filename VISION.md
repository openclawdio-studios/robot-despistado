# Proyecto: El Robot Despistado

## Visión de Producto
Una aplicación interactiva para dispositivos móviles (Android/iOS) orientada a niños de 5 a 7 años. Su objetivo es introducir la lógica computacional temprana (programación por bloques) a través de la resolución de rompecabezas visuales. El jugador ayuda a un simpático robot a alcanzar sus piezas perdidas arrastrando bloques de dirección (Arriba, Abajo, Izquierda, Derecha) a una línea de tiempo (timeline) de ejecución.

## Temática y Dirección de Arte
- **Tema Central:** Espacial. 🚀
- **Lore:** Un pequeño robot astronauta ha estrellado su nave y necesita explorar planetas cuadriculados para recuperar sus engranajes y piezas perdidas. Estética colorida, estrellas, cráteres de cómic y animaciones simpáticas de gravedad cero.
- **Iconografía:** Uso de un "Engranaje Dorado" como meta (target) y un "Cohete de Despegue" como botón de ejecución (Play).

## Pilares de Diseño (Restricciones Cognitivas)
1. **Atención Volátil:** Feedback visual y sonoro inmediato en cada interacción.
2. **Cero Texto Requerido:** Toda la interfaz debe ser icónica (iconos grandes, colores de alto contraste) para niños en etapa de pre-lectoescritura.
3. **Tolerancia a la Frustración:** Si el robot choca o no llega, la animación debe ser cómica, sin pantallas rojas de "Game Over". Se incentiva la repetición.
4. **Onboarding (Tutorial Invisible):** El Nivel 1 debe restringir las acciones del niño, permitiendo solo arrastrar la flecha correcta y guiándolo con una mano animada parpadeante.

## Calidad y Testing (QA)
- **Cobertura Obligatoria:** Todos los componentes críticos (motor de ejecución, parser de JSON de niveles, validación de lógica direccional) deben estar respaldados por pruebas automatizadas.
- **Herramientas:** Jest para pruebas unitarias y de lógica, y React Native Testing Library para pruebas de renderizado de componentes.

## Stack Tecnológico
- **Framework:** React Native con Expo
- **Lenguaje:** TypeScript
- **Físicas y UI:** React Native Reanimated / Componentes táctiles nativos (Drag & Drop)
- **Despliegue:** Android App Bundle (.aab) para Google Play Store, y posterior iOS.

## Épicas del Proyecto
- **Épica 1:** Diseño UI/UX y Dirección de Arte (Foundation)
- **Épica 2:** El Motor Core (Mecánicas de Arrastrar y Motor de Ejecución)
- **Épica 3:** Arquitectura de Niveles (Diseño de 30 retos de dificultad progresiva)
- **Épica 4:** Onboarding y Tutorial (El profesor virtual)
- **Épica 5:** Compliance Infantil y Despliegue (Parental Gate, COPPA, Play Store)

## Arquitectura Multi-Agente
Este proyecto es gobernado por la IA Orchestrator ("OpenClawdio") delegando tareas mediante un flujo basado en GitHub Issues (1 Issue = 1 Rama = 1 Pull Request).