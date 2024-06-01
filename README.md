# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
0. npm create vite: tạo nhanh các thư mục có sẵn.
1. public:
- folder  chứa tất cả những static file (file tĩnh): image,audio, font,...
2. src:
- nơi code chính của chúng ta
3. gitinore
- liệt kê những file hay folder chúng ta muốn đẩy vào git.
4. package.json
- chứa thông tin của dự án. (tên dự án, thư viện sử sụng trong dự án )
- vd: 
 "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@vitejs/plugin-react": "^4.2.1",
    "eslint": "^8.55.0",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "vite": "^5.0.8"
  }
5. vite.config.js
6. .eslintrc.cjs
- liệt kê nững quy tắc của dự án
-vd: chỉ được sử dụng các từ khóa es6(let,const), 
7. gõ npm i 
- để cài những thư viện được liệt kê trong dự án
8. node_modules
- nơi liệt kê tất cả các thư viện của dự án 
9. src
- main.jsx 
- App.jsx


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

