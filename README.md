# Homework repository for course 'mobile development'. Student Alexey Radyuk.

## hw 1. flutter (ToDoList)
На Flutter сделать приложение - список задач. Приложение должно:
1. Открываться на главном экране
2. На главном экране должны отображаться текущие задачи и кнопка «Новая задача»
3. Для каждой задачи должно быть видно её описание и время напоминания, если
есть
4. Каждую задачу должно быть возможно отредактировать, удалить и изменить
статус Выполнена/Не выполнена
5. При нажатии на кнопку «Новая задача» должен открываться диалог добавления
задачи.
6. На диалоге добавления задачи должно быть возможно добавить описание задачи,
время напоминания, подтвердить или отметить добавление.
7. Подтверждение добавления задачи должно срабатывать только если описание
задачи не пустое.
8. Время напоминания должно быть возможно не указывать, в этом случае
напоминание срабатывать не должно.
9. Если у задачи установлено напоминание, то в назначенное время на телефоне
должно появиться уведомление о задаче.
10. Задачи должны сохраняться локально, при перезапуске приложения список задач
не должен обнуляться.

## hw2. react native (Alarm clock)
На React Native сделать приложение – будильник. Приложение должно:
1. Открываться на экране со списком будильников
2. Элемент списка будильников должен содержать время срабатывания будильника
и переключатель Вкл/Выкл. Срабатывать должны только будильники, у которых
переключатель стоит в положении Вкл.
3. Должна быть возможность удалить будильник или добавить новый
4. Во время срабатывания будильника на телефон должно приходить локальное
уведомление о том что будильник сработал.
5. Если приложение активно и пришла пора будильнику сработать, то включается
онлайн радио.
6. При создании нового будильника должна быть возможность выбрать какое онлайн
радио следует включить. Следует реализовать выбор из минимум трёх радио.
7. На экране срабатывания будильника должна быть возможность его выключить.
8. Пока будильник не выключен, радио продолжает играть.

## hw3. xamarin (Simple chat)
1. Если мы не залогинены, то открываться на экране логина.
2. На экране логина должно быть поле для ввода логина, поле для ввода пароля, кнопки «Залогиниться» и «Зарегистрироваться»
3. При нажатии на «Залогиниться» мы должны переходить на экран чата либо выдавать сообщение «Неверный логин-пароль», если логин-пароль неверный.
4. При нажатии на «Зарегистрироваться» надо переходить на экран регистрации.
5. Экран регистрации должен включать поле ввода логина, два поля ввода пароля и кнопку «Зарегистрироваться».
6. При нажатии на «Зарегистрироваться» надо зарегистрировать пользователя, если в полях ввода паролей пароли совпадают, и перейти на экран логина.
7. На экране чата должен выводиться список сообщений чата, быть поле вводасообщения и кнопка «Отправить».
8. Сообщения чата должны писаться в формате «Имя: сообщение». Имена пользователей должны быть разных цветов. При этом за каждым пользователем должен быть закреплён только один цвет.
9. При нажатии кнопки «Отправить» в чат должно отправляться сообщение, введённое в поле ввода. Пустые сообщения отправлять нельзя.
10. Чат должен быть совместим с сервером который написал Влад (NuGet пакет SimpleChatApp.Server) 
