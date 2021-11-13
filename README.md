# <div align="center"> @SeptBlast/congenial-waddle </div>

<div align="center"> congenial-waddle is brotli and gzip compression utils library for nodejs</div>
<br/>

### Helps in Compressing the whole project in a go without any hassle

To use the application you need to pass the folder path where the files are stored as an argument to the application.

### Usage

```javascript
import compress from "@imdevesh/congenial-waddle";

// Pass the folder path where the files are stored for compression
var folderPath = "./html";

compress.getCompressed(folderPath);
```

#

After the compression is done, the compressed files are stored in respective folders, name `./br/*` and `./gzip/*.`

---

\***Note**: There is no limitation on type of files, you can use this tool for .html, .css, .js, .png, .jpg, .jpeg, .pdf and many more.

### License

[MIT License](./LICENSE.md)

### Author

[Imdevesh](https://github.com/SeptBlast)

Package Url : [@SeptBlast/congenial-waddle](https://www.npmjs.com/package/@imdevesh/congenial-waddle)

---
