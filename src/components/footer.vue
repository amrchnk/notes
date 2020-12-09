<template>
<footer>
  <div class="wrap">
    <div class="info box col-md-4 col-sm-1">
    <p>Мирченко Анна Григорьевна</p>
    <p>гр. 181-362</p>
    <p>17.06.20</p>
  </div>
  
  <div class="source box col-md-4 col-sm-1">
    <label for="">Источники</label>
    <p><a href="https://bootstrap-4.ru/docs/4.5/getting-started/introduction/" target="_blank">Бутстрап</a></p>
    <p><a href="https://colorscheme.ru/html-colors.html" target="_blank">Палитра цветов для хтмл</a></p>
    <p><a href="http://htmlbook.ru/faq/kak-ubrat-markery-v-markirovannom-spiske" target="_blank">Хтмл бук</a></p>
    <p><a href="https://metanit.com/web/vuejs/3.4.php" target="_blank">метанит</a></p>
    <p><label for="">Также использованы материалы из 4,12,14 лабораторных</label></p>
  </div>
  </div>
    
  </footer>
</template>

<style>

footer{
  text-align:centre;
  background-color:#333536;
  display:flex;
  font-size:10px;
  color:white;
  height:auto;
  justify-content: space-around;
  padding: 10px 0;
}

a{
  color:#5F9EA0;
}

.source{
  text-align:right;
}

label{
  margin-bottom:0px;
}

p{
  margin-bottom:0px;
}
.box{

  text-align:centre;
  display:inline-block;
  margin-left:30px;
}

.wrap{
  display:flex;
  text-align: left;
}
</style>