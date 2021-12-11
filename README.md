# Условие задания

- По маршруту /login/ приложение как и раньше должно выдавать в виде простого текста ваш логин в системе openedu (deadtrace).
Пример: https://week8.kodaktor.ru/login/
- По маршруту /test/ по методу GET приложение должно принимать переменную querystring URL. По этому URL приложению будет доступна веб-страница с кнопкой и полем ввода. Они имеют идентификаторы, соответственно, bt и inp. Приложение должно дистанционно щёлкнуть по кнопке и прочитать число, появляющееся после этого в поле ввода. Затем оно должно вернуть его в качестве ответа на запрос по указанному маршруту. Ответ следует вернуть в виде обычной строки (text/plain).
Пример обращения:
curl 'https://week8.kodaktor.ru/test/?URL=https://kodaktor.ru/g/80b5cdf' 

# Необходимые действия

Деплой приложения происходил на Heroku, необходимо было добавить дополнительный buildpack https://github.com/jontewks/puppeteer-heroku-buildpack наряду с heroku/nodejs.
