# Tienda Ondheros

Proyecto de ecommerce realizado para el Curso de React.js, orientado a la venta de productos temáticos de cómics (remeras, medias, billeteras y más). Permite navegar por categorías, ver detalles de productos, agregar al carrito y realizar compras en línea. Los productos y órdenes se almacenan en Firebase Firestore.

## Características

- Listado y filtrado de productos por categoría
- Detalle de producto
- Carrito de compras
- Checkout y generación de orden
- Actualización de stock en tiempo real
- Suscripción por email
- Integración con Firebase Firestore

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/MaximilianoSulsenti/OndHeros-React.js.git
   cd ondheros
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura tus variables de entorno en el archivo `.env`:
   ```
   VITE_FIREBASE_API_KEY="TU API KEY"
   VITE_FIREBASE_AUTH_DOMAIN="TU AUTH DOMAIN"
   VITE_FIREBASE_PROJECT_ID="TU PROJECT ID"
   VITE_FIREBASE_STORAGE_BUCKET="TU STORAGE BUCKET"
   VITE_FIREBASE_MESSAGING_SENDER_ID="TU MESSAGING SENDER ID"
   VITE_FIREBASE_APP_ID="TU APP ID"
   ```

4. Inicia la aplicación:
   ```bash
   npm run dev
   ```

## Uso

- Navega por las categorías desde la barra de navegación.
- Haz clic en un producto para ver su detalle.
- Agrega productos al carrito y finaliza la compra desde el checkout.
- Suscríbete a novedades desde el footer.

## Tecnologías
- Vite
- React
- React-Router-DOM
- Firebase Firestore
- Bootstrap
- React Toastify

## Autor

Maximiliano (Ondheros)

---

¡Gracias por visitar la tienda Ondheros!