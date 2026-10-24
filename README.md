# ⚡ Portafolio Web (Vite + HTML/CSS/JS)

Este proyecto está configurado con **Vite** para ofrecer una experiencia de desarrollo rápida con recarga en tiempo real (HMR) y compilación optimizada.

## 🚀 Cómo usarlo en Localhost

Para probar la página en tu navegador localmente:

1. **Instalar dependencias** (si no lo hiciste aún):
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   Esto levantará el servidor en `http://localhost:5173/` y abrirá la página automáticamente.

3. **Compilar para producción**:
   ```bash
   npm run build
   ```
   Generará la carpeta `dist/` con todos los archivos minificados y optimizados.

---

## 🐙 Cómo subirlo a GitHub

### 1. Inicializar Git y primer commit
Si tienes Git instalado en tu computadora:
```bash
git init
git add .
git commit -m "Primer commit: Estructura de portafolio con Vite"
```

### 2. Crear el repositorio en GitHub y conectar
1. Entra a [github.com](https://github.com) y crea un nuevo repositorio llamado `PorTFolio` (público o privado).
2. Conecta tu repositorio local con GitHub ejecutando:
```bash
git branch -M main
git remote add origin https://github.com/TU_USUARIO/PorTFolio.git
git push -u origin main
```

### 3. Publicar en GitHub Pages (Gratis)
Puedes publicar tu portafolio para que cualquiera lo vea en internet:
- **Opción A (GitHub Actions)**: Puedes usar el flujo en `.github/workflows/deploy.yml` que compila automáticamente la carpeta `dist/`.
- **Opción B (Rama gh-pages o carpeta dist)**: O subir los archivos de `dist` directamente.
