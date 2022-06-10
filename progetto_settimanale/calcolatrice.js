function dig(n){
    document.form.area.value = document.form.area.value+n
  }
  function somma() {
    var c = document.form.area.value;
    if (c){
      document.form.area.value = eval(c);
    }
  }

  function reset() {
    document.form.area.value = '';
  }

  function cancella() {
    var a = document.form.area.value;
    document.form.area.value = a.substring(0, a.length-1);
  }