<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-expand-md navbar-light bg-light">
        <router-link class="navbar-brand" to="/main"><b class="mirch">Mirchenko</b></router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
           <li class="nav-item">
              <router-link class="nav-link" to="/notes">Заметки</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/main">Снова главная</router-link>
            </li>
            
            
          </ul>
        </div>
      </nav>
    </header>

 
<router-view/>

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app{
  font-family: 'Montserrat', sans-serif;
}

.mirch{
  color:#191970 ;
}

header{
  background-color:#fdffd1;
}



main{
    width: 100%;
    min-height: 100%;
  }

</style>
