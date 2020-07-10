В каталоге проекта запустите:
### `yarn && yarn start`
Запускает приложение в режиме разработки.
Откройте http://localhost:3000, чтобы просмотреть его в браузере.

### `Демо` - https://avitotech-test-task.web.app

<br/>

# `Задача`
Необходимо сверстать адаптивную страницу со списком фотографий.​
При клике на фотографии открывается модальное окно с фотографией, списком комментариев и формой добавления комментариев.​

### `Список api`:
- GET https://boiling-refuge-66454.herokuapp.com/images - получение списка фотографий.
- GET https://boiling-refuge-66454.herokuapp.com/images/:imageId - получения большого изображения и списка комментариев.
- POST https://boiling-refuge-66454.herokuapp.com/images/:imageId/comments - добавление комментария (204 – OK, комментарий не сохраняется).

`Дизайн` можно найти тут - https://www.figma.com/file/3VP0QDK3kjdfbkj8TRrtsx/Test-task?node-id=0%3A1

Мы оценим если:
- приложение будет работать локально после npm i && npm run start;
- приложение написано на React;
- не используются внешние компоненты, например, модальное окно;
- учтен UX.
