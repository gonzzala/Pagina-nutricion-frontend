# Frontend de E-commerce con React

Este es el frontend del proyecto de e-commerce, desarrollado con React. Proporciona una interfaz de usuario para navegar y comprar productos.

## Descripción

Este proyecto freelance de e-commerce está destinado a ampliar las ventas y la visibilidad del cliente a través de la venta de productos relacionados con la nutrición y ejercicio. Proporciona una interfaz para la navegación sencilla del usuario a través no solo de los productos, sino también de diferentes vistas relacionadas con los beneficios y características unicas de los productos, e información del vendedor.

## Características

- **React** para la interfaz de usuario.
- **Axios** para las solicitudes API.
- **Material UI** para las vistas y su responsividad.
- **Framer Motion** para diferentes animaciones en las vistas.
- **React Responsive Carousel** para el carrusel de fotos de los productos.
- **React Scroll** para animaciones de scroll.
- **React Slick** para el slider de las características cuando las pantallas son de celular.
- **SweetAlert2** para los mensajes informativos.
- **Api de MercadoPago** para gestionar las venta de los productos.
- **Carrito de compras persistente** utilizando Local Storage.

## Requisitos

- Node.js
- npm o yarn
- Vite (para el bundling de assets)

## Instalación

1. Clona el repositorio:

   ```sh
   git clone https://github.com/gonzzala/Pagina-nutricion-frontend.git
   cd Pagina-nutricion-frontend
   ```

2. Instala las dependencias de Node.js con npm o yarn:

   ```sh
   npm install
   # o
   yarn install
   ```

3. Inicia el servidor de desarrollo:
   ```sh
   npm run dev
   # o
   yarn dev
   ```

## Integración con MercadoPago

Para integrar las funcionalidades de MercadoPago:

1. Si no la tienes ya instalada, instala la SDK de MercadoPago:

   ```sh
   npm install @mercadopago/sdk-react
   ```

2. Deberás crear un archivo `.env` y configura las credenciales de MercadoPago:

   ```sh
   VITE_MERCADO_PAGO_KEY=tu_secret_key
   ```

3. Implementa el procesamiento de pagos en tus vistas.

## Despliegue

1. Construye el frontend para producción:

   ```sh
   npm run build
   # o
   yarn build
   ```

2. Sirve los archivos estáticos generados en el directorio `dist` con un servidor. En este caso, la aplicacion está servida a través de la plataforma Netlify

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme a [gonzzalorodriguez13@gmail.com](mailto:gonzzalorodriguez13@gmail.com).
