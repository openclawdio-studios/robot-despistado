# Proyecto: El Robot Despistado

## Visión de Producto
Una aplicación interactiva para dispositivos móviles (Android/iOS) orientada a niños de 5 a 7 años. Su objetivo es introducir la lógica computacional temprana (programación por bloques) a través de la resolución de rompecabezas visuales. El jugador ayuda a un simpático robot llamado **Robotin** a alcanzar sus piezas perdidas arrastrando bloques de dirección (Arriba, Abajo, Izquierda, Derecha) a una línea de tiempo (timeline) de ejecución.

## Temática y Dirección de Arte
- **Tema Central:** Espacial. 🚀
- **Lore:** **Robotin**, un pequeño robot astronauta, ha estrellado su nave y necesita explorar planetas cuadriculados para recuperar sus engranajes y piezas perdidas. Estética colorida, estrellas, cráteres de cómic y animaciones simpáticas de gravedad cero.
- **Iconografía:** Uso de un "Engranaje Dorado" como meta (target) y un "Cohete de Despegue" como botón de ejecución (Play).
- **Gamificación:** "Monedas de Estrellas" opcionales repartidas por los niveles para incentivar la exploración y optimización de rutas.
- **Audio & Feedback:**
  - Éxito: Fanfarria de "Triunfo Espacial" al recoger el engranaje.
  - Recogida: Sonido de tintineo (chime) al pasar sobre una estrella.
  - Error/Colisión: Sonido de "error-bip" robótico y rastro rojo.
  - Ejecución: Sonido de ignición al pulsar el cohete.

## Pilares de Diseño (Restricciones Cognitivas)
1. **Atención Volátil:** Feedback visual y sonoro inmediato en cada interacción.
2. **Cero Texto Requerido:** Toda la interfaz debe ser icónica para niños.
3. **Tolerancia a la Frustración:** Animaciones cómicas de fallo, incentivo a la repetición.
4. **Onboarding (Tutorial Invisible):** Nivel 1 restrictivo con guía visual (InstructionHand) para enseñar el funcionamiento básico de **Robotin**.

## Calidad y Testing (QA)
- **Cobertura Obligatoria:** Jest y React Native Testing Library para componentes y lógica.

## Stack Tecnológico
- **Framework:** React Native con Expo (TypeScript)
- **Físicas y UI:** React Native Reanimated / Drag & Drop nativo.

## Épicas del Proyecto
- **Épica 1:** Diseño UI/UX y Dirección de Arte (Foundation)
- **Épica 2:** El Motor Core (Mecánicas de Arrastrar y Motor de Ejecución)
- **Épica 3:** Arquitectura de Niveles (30 retos progresivos)
- **Épica 4:** Onboarding y Tutorial (El profesor virtual)
- **Épica 5:** Gamificación y Coleccionables (Estrellas)
- **Épica 6:** Compliance Infantil y Despliegue (Play Store)
  - *Restricción estricta:* Aplicación 100% offline, sin IAP (In-App Purchases), sin anuncios y SIN analíticas ni recolección de datos (GDPR-K / COPPA compliance).

## Arquitectura Multi-Agente
Gobernado por OpenClawdio via GitHub Issues (1 Issue = 1 Rama = 1 PR).