var Oggi = new Date()
document.write(Oggi)

var data = new Date();
var gg, mm, aaaa;
gg = data.getDate() + "/";
mm = data.getMonth() + 1 + "/";
aaaa = data.getFullYear();
document.write("Oggi è il " + gg + mm + aaaa);