const tris = {}
localStorage.setItem("lods", JSON.stringify(tris));
const ex = JSON.parse(localStorage.getItem("lods"));
console.log(ex || "undef");
console.log(ex.name || "hey")