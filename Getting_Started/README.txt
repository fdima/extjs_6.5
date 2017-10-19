
//ССЫЛКИ
http://docs.sencha.com/extjs/6.5.2/guides/getting_started/getting_started.html
http://docs.sencha.com/cmd/guides/cordova_phonegap.html
http://cordova.apache.org/

//Создаем папку проекта
cp /home/spendlively/vhosts/ext65/Getting_Started

//Указание где находится SDK
~/bin/Sencha/Cmd/sencha config --prop sencha.sdk.path=/home/spendlively/bin/Sencha/ --save
[INF] Writing saved properties to /home/spendlively/.sencha/cmd/sencha.cfg
[INF] Configuration property changed. Reloading build environment state.

//Создаем папу приложения
mkdir myapp
cd myapp

//Копируем туда файлы фреймворка
~/bin/Sencha/Cmd/sencha app init --ext@6.5.2 --modern MyApp

[INF] Initializing empty workspace at /home/spendlively/vhosts/ext65/Getting_Started/myapp
[INF] Copying framework to /home/spendlively/vhosts/ext65/Getting_Started/myapp/ext
[INF] Added framework ext to workspace.json
[INF] Loading framework from /home/spendlively/vhosts/ext65/Getting_Started/myapp/ext

//Запуск сервера
~/bin/Sencha/Cmd/sencha app watch
//Ошибка
BUILD FAILED
  [ERR] com.sencha.exceptions.BasicException: User limit of inotify watches reached
  [ERR] 	at sun.reflect.NativeMe
  [ERR] thodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)


//Сборка проекта в папку build (так как ошибка)
~/bin/Sencha/Cmd/sencha app build
cd build/production/MyApp/
php -S 0.0.0.0:8888

//Создание файлов приложения
app.js (правка)
app/Application.js
app/view/main/Main.js
app/view/main/MainController.js

//Указание темы для сборки (./app.json)
/*"theme": "theme-material",*/
"theme": "theme-ios",

//Уствнока cordova
sudo npm install -g cordova

//Сборка cordova-приложения
https://build.phonegap.com/
spendlively@mail.ru
!LivelY@860819#
//~/bin/Sencha/Cmd/sencha -sdk /path/to/Framework generate app MyApp /path/to/MyApp


//Если удалили файлы фреймворка!!!
//Если нет файла workspace.json - создаем
~/bin/Sencha/Cmd/sencha workspace init
//в workspace.json указываем путь к sdk
"frameworks": {
    "ext": {
        "path": "ext/ext-6.5.2/"
    }
},
//Закачивает файлы фреймворка
~/bin/Sencha/Cmd/sencha app install 
//Далее сборка
~/bin/Sencha/Cmd/sencha app build





