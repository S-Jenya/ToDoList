<template>
  <div class="content">

    <div class="homepage">
      <h2>Home page</h2>
      <p>Создавать одностраничные приложения (SPA) используя Vue + Vue Router очень просто. С помощью Vue.js, мы уже компонуем своё приложение из компонентов. Добавляя Vue Router, мы просто сопоставляем наши компоненты с маршрутами и объясняем Vue Router где их отображать. Вот простой пример  </p>
      <a href="/todos ">Todos</a>
    </div>

    <div class="psih">
      <div class="figure">
        <div class="circle">
          <div class="first_circle">
            <div class="second_circle" onclick="location.href='/todos'">

                <img src="../img/light.png" alt="Лампочка" height="50%" width="50%" top="50%"/>

            </div>
          </div>
        </div>
        <div class="rectangle">
          <div class="my_content">
            <div class="my_description_page">
              <h3>Стартовая страница</h3>
              <p>Описание мой стартовой страницы</p>
            </div>
              <div class="number_page">
                01
              </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style>
  .my_content{
    color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin-left: auto;
    padding-left: 20px;
    height: 100%;
    font-family: Century Gothic;
  }
  .my_description_page{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 70%;
    height: 100%;
    margin-left: auto;
    text-align: left;
  }
  .my_description_page h3{
    margin-top: auto;
    margin-bottom: 2px;
                        }
  .my_description_page p{
    margin-top: 2px;
    margin-bottom: 2px;
  }
  .number_page{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    font-size: 30pt;
    font-weight: bold;
    padding: 10px 10px;
    height: 70%;
  }
  .figure {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 80%;
    left: 0;
    right: 0;
  }
  .circle{
    position: relative;
    left: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    height: 100%;
    width: 200px;
  }
  .first_circle {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    background: linear-gradient(-60deg, #986bf5, #64249f);
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    box-shadow: 0 5px 10px -3px black;
  }
  .second_circle {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 70%;
    height: 70%;
    background: #ffffff;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    box-shadow: 0 5px 10px -3px black;
  }
  .first_circle :hover {
    background: #cceeff;
    transition: all .3s ease-in-out;
  }
  .rectangle {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    background: linear-gradient(-90deg, #986bf5, #646aaf);
    box-shadow: 0 5px 10px -3px black;
    border-radius: 20px;
    height: 50%;
    top:50%;
    width: 60%;
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .psih {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 200px;
    width: 700px;
   /*position: absolute;*/
    padding: 10px;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  .homepage{
    background-color: #6c5b7b;
    color: white;
    width: 1000px;
    padding: 50px;
  }
</style>


