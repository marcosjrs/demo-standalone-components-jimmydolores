# Cuando usar Standalone Components

Sin duda, los 𝗦𝘁𝗮𝗻𝗱𝗮𝗹𝗼𝗻𝗲 𝗖𝗼𝗺𝗽𝗼𝗻𝗲𝗻𝘁𝘀 es una de las mejores características en estas nuevas versiones de Angular, ya que facilitan su reutilización y mantenimiento, además de no depender de un NgModule ¿𝗣𝗲𝗿𝗼 𝗲𝘀𝗼 𝘀𝗶𝗴𝗻𝗶𝗳𝗶𝗰𝗮 𝗾𝘂𝗲 𝗱𝗲𝗯𝗼 𝗺𝗶𝗴𝗿𝗮𝗿 𝘁𝗼𝗱𝗼𝘀 𝗺𝗶𝘀 𝗰𝗼𝗺𝗽𝗼𝗻𝗲𝗻𝘁𝗲𝘀 𝗮 𝗦𝘁𝗮𝗻𝗱𝗮𝗹𝗼𝗻𝗲🤔? ¡La respuesta es 𝗡𝗢 🛑! Aunque los standalone components tienen varias ventajas, no son siempre la mejor opción para todos los casos de uso.

Más información: https://www.youtube.com/watch?v=sQwzR3gvETc


Rama full-standalone (es al ejecutar el comando de angular que lo hace automáticamente) :
- Modificó el componente container como un standalone; añadiendo como dependencias: RouterLink, RouterOutlet.
- Modificó el componente home-page como un standalone; añadiendo como dependencias: NgFor, MatRippleModule, WorkCardComponent
- Modificó el componente basic-information como un standalone; añadiendo como dependencias: ReactiveFormsModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, NgIf
- Modificó el componente experience como un standalone; añadiendo como dependencias: ReactiveFormsModule, MatFormFieldModule, MatInputModule, NgIf
- Modificó el componente work-detail-page como un standalone; añadiendo como dependencias: NgIf, MatButtonModule, RouterLink, WorkCardComponent, NgFor
  - Y modificó el módulo de work-detail-page quitando declarations: WorkDetailPageComponent, y poniendo el WorkDetailPageComponent en los import; donde además quita el WorkCardModule (ya que ahora no se trabaja con módulos)
- Modificó el componente app como un standalone; añadiendo como dependencias: ContainerComponent (que es lo único que renderiza)
- Modificó solamente el atributo de standalone a true, en los componentes word-card, postulation
  - Y modificó el módulo de postulation quitando todas las declarations, moviendolas para los import; donde además quita el WorkCardModule (ya que ahora no se trabaja con módulos) AHORA ESOS COMPONENTES QUE SE PONIAN EN LAS DECLARATIONS DE LOS MÓDULOS, SE AÑADEN DIRECTAMENTE EN EL "imports" DEL COMPONENTE COMO REQUISITOS


**Suscríbete a mi canal** 😎

https://www.youtube.com/c/LogiDev

**Sígueme en mis redes:**

👉Facebook : https://facebook.com/LogiDev25
búscame como: @LogiDev25

👉Instagram: https://instagram.com/jimydolores/
búscame como: @jimydolores

👉Twitter: https://twitter.com/jimyHDolores
búscame como: @jimydolores

👉LinkedIn:https://linkedin.com/in/jimyhuachodolores/
