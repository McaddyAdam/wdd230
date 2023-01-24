const year = new Date().getFullYear();


// to get last modiified

document.querySelector(".year").innerHTML = `© ${year} | Adebesin Adam | Last Updated: ${document.lastModified}`;