
# 🎯 Полная документация по созданию стилизованных карт персонажей в chub.ai

## 📋 Оглавление
1. [Markdown поддержка в chub.ai](#markdown-поддержка)
2. [CSS стилизация](#css-стилизация)
3. [Готовые шаблоны](#готовые-шаблоны)
4. [Лучшие практики](#лучшие-практики)
5. [Примеры использования](#примеры-использования)

---

## 📝 Markdown поддержка в chub.ai {#markdown-поддержка}

### ✅ Полностью поддерживаемые элементы

#### Заголовки
```markdown
# Заголовок 1 уровня
## Заголовок 2 уровня  
### Заголовок 3 уровня
#### Заголовок 4 уровня
##### Заголовок 5 уровня
###### Заголовок 6 уровня
```
**HTML результат:** `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`

#### Форматирование текста
```markdown
**Жирный текст** → <strong>Жирный текст</strong>
*Курсивный текст* → <em>Курсивный текст</em>
***Жирный курсив*** → <strong><em>Жирный курсив</em></strong>
`Инлайн код` → <code>Инлайн код</code>
```

#### Ссылки и изображения
```markdown
[Текст ссылки](https://example.com) → <a href="https://example.com">Текст ссылки</a>
![Alt текст](https://example.com/image.jpg) → <img alt="Alt текст" src="https://example.com/image.jpg">
```

#### Цитаты
```markdown
> Простая цитата
> 
> Многострочная цитата

> Уровень 1
>> Уровень 2
>>> Уровень 3
```
**HTML:** `<blockquote><p>текст</p></blockquote>` с поддержкой вложенности

#### Списки
```markdown
# Маркированные (проблемы с <ul>)
- Элемент 1
- Элемент 2
  - Вложенный элемент

# Нумерованные (работают корректно)
1. Первый пункт
2. Второй пункт
   3. Вложенный пункт
```

#### Таблицы
```markdown
| Заголовок 1 | Заголовок 2 | Заголовок 3 |
|-------------|:-----------:|------------:|
| Слева       | По центру   | Справа      |
| Данные A    | Данные B    | Данные C    |
```
**Поддержка:** Полная, включая выравнивание (`left`, `center`, `right`)

#### Блоки кода
```markdown
`инлайн код`

```
блок кода без подсветки
```

```javascript
// блок с подсветкой синтаксиса
function example() {
    return "Hello World";
}
```
```
**HTML:** `<code>` и `<code class="language-javascript">`

#### Горизонтальные разделители
```markdown
---
***
___
```
**HTML:** `<hr>`

#### HTML внутри Markdown
```markdown
<strong>HTML жирный</strong>
<em>HTML курсив</em>
<u>HTML подчеркивание</u>
<br>Перенос строки
<details>
<summary>Сворачиваемый блок</summary>
Содержимое
</details>
```

#### Эмодзи
```markdown
:smile: :heart: :fire: → 😄 ❤️ 🔥
😀 😍 👍 (Unicode эмодзи работают как есть)
```

### ❌ Не поддерживаемые элементы

#### Зачеркивание
```markdown
~~зачеркнутый текст~~ → отображается как обычный текст
```

#### Сноски
```markdown
Текст[^1] → отображается как обычный текст
[^1]: Сноска → отображается как обычный текст
```

#### Чекбоксы
```markdown
- [x] Выполнено → отображается как текст
- [ ] Не выполнено → отображается как текст
```

### ⚠️ Особенности chub.ai

#### Элемент `<spacer>`
- Автоматически добавляется между блочными элементами
- Используется для управления отступами
- Можно стилизовать через CSS

#### Структура контейнера
```html
<div class="sc-beySPh iJwRjD msg-mkdn-container font-size-message">
  <!-- ваш markdown контент -->
  <spacer></spacer>
</div>
```

---

## 🎨 CSS стилизация {#css-стилизация}

### 🔧 Основные правила

#### 1. Область действия стилей
```css
/* ✅ Правильно - только для markdown контейнера */
.msg-mkdn-container h1 {
    color: #e74c3c;
}

/* ❌ Неправильно - влияет на всю страницу */
h1 {
    color: #e74c3c;
}
```

#### 2. Формат CSS
```html
<!-- ✅ Правильно - одна строка -->
<style>.msg-mkdn-container h1{color:#e74c3c;background:#f8f9fa;padding:20px}</style>

<!-- ❌ Неправильно - многострочный -->
<style>
.msg-mkdn-container h1 {
    color: #e74c3c;
}
</style>
```

#### 3. Специфичность селекторов
```css
/* Базовая специфичность */
.msg-mkdn-container h1 { }

/* Высокая специфичность */
.sc-beySPh.iJwRjD.msg-mkdn-container h1 { }

/* Принудительное применение */
.msg-mkdn-container h1 { color: #e74c3c !important; }
```

### 🎯 Селекторы для всех элементов

#### Заголовки
```css
.msg-mkdn-container h1 { /* Главный заголовок */ }
.msg-mkdn-container h2 { /* Подзаголовки */ }
.msg-mkdn-container h3 { /* Секции */ }
.msg-mkdn-container h4 { /* Подсекции */ }
.msg-mkdn-container h5 { /* Мелкие заголовки */ }
.msg-mkdn-container h6 { /* Самые мелкие */ }
```

#### Текстовые элементы
```css
.msg-mkdn-container p { /* Параграфы */ }
.msg-mkdn-container strong { /* Жирный текст */ }
.msg-mkdn-container em { /* Курсив */ }
.msg-mkdn-container code { /* Инлайн код */ }
```

#### Списки
```css
.msg-mkdn-container ul { /* Маркированные списки */ }
.msg-mkdn-container ol { /* Нумерованные списки */ }
.msg-mkdn-container li { /* Элементы списков */ }
```

#### Специальные элементы
```css
.msg-mkdn-container blockquote { /* Цитаты */ }
.msg-mkdn-container table { /* Таблицы */ }
.msg-mkdn-container th { /* Заголовки таблиц */ }
.msg-mkdn-container td { /* Ячейки таблиц */ }
.msg-mkdn-container hr { /* Разделители */ }
.msg-mkdn-container a { /* Ссылки */ }
.msg-mkdn-container img { /* Изображения */ }
.msg-mkdn-container spacer { /* Отступы */ }
```

### 🎨 Готовые стилевые решения

#### Заголовки

**Градиентный заголовок:**
```css
.msg-mkdn-container h1{background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:white;padding:20px;border-radius:10px;text-align:center;margin:25px 0;font-weight:bold;text-transform:uppercase;letter-spacing:3px;box-shadow:0 4px 15px rgba(0,0,0,0.2)}
```

**Заголовок с рамкой:**
```css
.msg-mkdn-container h1{border:3px solid #ff6b6b;border-left:10px solid #ff6b6b;padding:15px 20px;background-color:#fff5f5;color:#d63031;margin:20px 0}
```

**Заголовок с иконкой:**
```css
.msg-mkdn-container h1::before{content:"⭐ ";color:#ffd700;font-size:1.2em}.msg-mkdn-container h1{background:#f8f9fa;padding:12px 16px;border-radius:6px;border-left:4px solid #007bff}
```

#### Цитаты

**Классическая цитата:**
```css
.msg-mkdn-container blockquote{background:#f0f8ff;border-left:5px solid #4a90e2;padding:15px 20px;margin:20px 0;font-style:italic;position:relative}.msg-mkdn-container blockquote::before{content:'"';font-size:4em;color:#4a90e2;position:absolute;left:10px;top:-10px}
```

**Современная цитата:**
```css
.msg-mkdn-container blockquote{background:rgba(116,185,255,0.1);border-left:4px solid #74b9ff;padding:15px 20px;margin:20px 0;border-radius:0 8px 8px 0;font-style:italic;color:#a8c8f0}
```

#### Списки

**Кастомные маркеры:**
```css
.msg-mkdn-container ul{list-style:none;padding-left:0}.msg-mkdn-container li{background:rgba(255,255,255,0.05);margin:8px 0;padding:10px 15px;border-radius:6px;border-left:3px solid #00cec9;color:#e8e8e8}.msg-mkdn-container li::before{content:"▶ ";color:#00cec9;font-weight:bold}
```

**Нумерованный список с счетчиком:**
```css
.msg-mkdn-container ol{counter-reset:custom-counter}.msg-mkdn-container ol li{counter-increment:custom-counter;border-left:3px solid #fd79a8}.msg-mkdn-container ol li::before{content:counter(custom-counter) ". ";color:#fd79a8;font-weight:bold}
```

#### Таблицы

**Современная таблица:**
```css
.msg-mkdn-container table{border-collapse:collapse;width:100%;margin:20px 0;box-shadow:0 2px 8px rgba(0,0,0,0.1);border-radius:8px;overflow:hidden}.msg-mkdn-container th{background:#667eea;color:white;padding:12px;text-align:left}.msg-mkdn-container td{padding:10px 12px;border-bottom:1px solid #e2e8f0}.msg-mkdn-container tr:nth-child(even){background:#f8f9fa}
```

#### Блоки кода

**Темная тема кода:**
```css
.msg-mkdn-container code{background:#2d3748;color:#e2e8f0;padding:2px 6px;border-radius:4px;font-family:'Courier New',monospace}.msg-mkdn-container code.language-javascript{background:#1a202c;border:1px solid #4a5568;padding:15px;border-radius:8px;display:block;margin:10px 0}
```

### 🌈 Готовые цветовые схемы

#### Темная готическая
```css
.msg-mkdn-container{background:linear-gradient(135deg,#0f0f23 0%,#1a1a2e 50%,#16213e 100%);color:#e8e8e8;padding:30px;border-radius:15px}
```

#### Светлая современная
```css
.msg-mkdn-container{background:linear-gradient(135deg,#f5f7fa 0%,#c3cfe2 100%);color:#2c3e50;padding:30px;border-radius:15px}
```

#### Неоновая киберпанк
```css
.msg-mkdn-container{background:linear-gradient(135deg,#0c0c0c 0%,#1a1a1a 100%);color:#00ff88;padding:30px;border-radius:15px;border:1px solid #00ff88;box-shadow:0 0 20px rgba(0,255,136,0.3)}
```

---

## 📄 Готовые шаблоны {#готовые-шаблоны}

### 🔥 Шаблон "Огненный воин"

```markdown
# 🔥 ИМЯ ПЕРСОНАЖА 🔥

*Краткое описание персонажа одной строкой*

---

> **⚠️ Предупреждение:** Важная информация о персонаже

## 🛡️ Предыстория

Подробная предыстория персонажа с интересными деталями и мотивацией.

## ⚔️ Способности

- **Первая способность** - Описание способности
- **Вторая способность** - Описание способности  
- **Третья способность** - Описание способности

## 🎭 Личность

> "Знаковая цитата персонажа, раскрывающая его характер"

Описание личности, манеры поведения, особенностей характера.

## 🌟 Сценарии

1. **Первая встреча** - Как происходит знакомство
2. **Конфликт** - Напряженная ситуация
3. **Сближение** - Развитие отношений

---

*Заключительная мысль или цитата*

<style>.msg-mkdn-container{background:linear-gradient(135deg,#0f0f23 0%,#1a1a2e 50%,#16213e 100%);color:#e8e8e8;padding:30px;border-radius:15px;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;box-shadow:0 10px 30px rgba(0,0,0,0.5);margin:20px 0}.msg-mkdn-container h1{background:linear-gradient(45deg,#ff6b6b,#ee5a52,#ff7675);color:#ffffff;text-align:center;padding:20px;border-radius:10px;margin:0 0 25px 0;font-size:2.2em;font-weight:bold;text-shadow:2px 2px 4px rgba(0,0,0,0.7);box-shadow:0 5px 15px rgba(255,107,107,0.3)}.msg-mkdn-container h2{color:#74b9ff;border-left:5px solid #74b9ff;padding-left:15px;margin:30px 0 15px 0;font-size:1.4em;text-shadow:1px 1px 2px rgba(0,0,0,0.5)}.msg-mkdn-container p{line-height:1.7;margin:15px 0;color:#e8e8e8}.msg-mkdn-container strong{color:#fd79a8;font-weight:600;text-shadow:1px 1px 2px rgba(0,0,0,0.3)}.msg-mkdn-container em{color:#fdcb6e;font-style:italic}.msg-mkdn-container blockquote{background:rgba(116,185,255,0.1);border-left:4px solid #74b9ff;padding:15px 20px;margin:20px 0;border-radius:0 8px 8px 0;font-style:italic;color:#a8c8f0}.msg-mkdn-container ul{list-style:none;padding-left:0}.msg-mkdn-container li{background:rgba(255,255,255,0.05);margin:8px 0;padding:10px 15px;border-radius:6px;border-left:3px solid #00cec9;color:#e8e8e8}.msg-mkdn-container li::before{content:"▶ ";color:#00cec9;font-weight:bold}.msg-mkdn-container ol{counter-reset:scenario-counter}.msg-mkdn-container ol li{counter-increment:scenario-counter;border-left:3px solid #fd79a8}.msg-mkdn-container ol li::before{content:counter(scenario-counter) ". ";color:#fd79a8;font-weight:bold}.msg-mkdn-container hr{border:none;height:2px;background:linear-gradient(90deg,transparent,#74b9ff,transparent);margin:30px 0}</style>
```

### 💙 Шаблон "Ледяная королева"

```markdown
# ❄️ ИМЯ ПЕРСОНАЖА ❄️

*Холодная красота и ледяное сердце*

## 🏰 Происхождение

История персонажа, его корни и становление.

## 💎 Особенности

- **Ледяная магия** - Контроль над холодом и льдом
- **Королевская власть** - Управление ледяным королевством
- **Холодный расчет** - Стратегическое мышление

> "Тепло - это слабость. Холод - это сила."

## ⚡ Сценарии взаимодействия

1. **Аудиенция у трона** - Официальная встреча
2. **Ледяной дворец** - Экскурсия по владениям  
3. **Растопить лед** - Попытка найти человечность

<style>.msg-mkdn-container{background:linear-gradient(135deg,#e3f2fd 0%,#bbdefb 50%,#90caf9 100%);color:#0d47a1;padding:30px;border-radius:15px;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;box-shadow:0 10px 30px rgba(13,71,161,0.3);margin:20px 0;border:2px solid #42a5f5}.msg-mkdn-container h1{background:linear-gradient(45deg,#1976d2,#1565c0,#0d47a1);color:#ffffff;text-align:center;padding:20px;border-radius:10px;margin:0 0 25px 0;font-size:2.2em;font-weight:bold;text-shadow:2px 2px 4px rgba(0,0,0,0.5);box-shadow:0 5px 15px rgba(25,118,210,0.4)}.msg-mkdn-container h2{color:#0277bd;border-left:5px solid #03a9f4;padding-left:15px;margin:30px 0 15px 0;font-size:1.4em}.msg-mkdn-container p{line-height:1.7;margin:15px 0;color:#0d47a1}.msg-mkdn-container strong{color:#01579b;font-weight:600}.msg-mkdn-container blockquote{background:rgba(3,169,244,0.1);border-left:4px solid #03a9f4;padding:15px 20px;margin:20px 0;border-radius:0 8px 8px 0;font-style:italic;color:#0277bd}.msg-mkdn-container ul{list-style:none;padding-left:0}.msg-mkdn-container li{background:rgba(255,255,255,0.7);margin:8px 0;padding:10px 15px;border-radius:6px;border-left:3px solid #29b6f6;color:#0d47a1}.msg-mkdn-container li::before{content:"❄️ ";color:#03a9f4;font-weight:bold}.msg-mkdn-container ol li{border-left:3px solid #1976d2}.msg-mkdn-container ol li::before{color:#1976d2}</style>
```

### 🌸 Шаблон "Романтическая героиня"

```markdown
# 🌸 ИМЯ ПЕРСОНАЖА 🌸

*"Цитата, раскрывающая романтическую натуру"*

## 💕 О персонаже

Нежное описание внешности, характера и особенностей.

### ✨ Что делает её особенной

- Первая особенность
- Вторая особенность  
- Третья особенность

> "Романтическая цитата о любви или мечтах"

## 🌹 Сценарии

1. **Случайная встреча** - Как происходит знакомство
2. **Первое свидание** - Романтический вечер
3. **Признание** - Момент близости

---

*Заключительные слова о персонаже*

<style>.msg-mkdn-container{background:linear-gradient(135deg,#fce4ec 0%,#f8bbd9 50%,#f48fb1 100%);color:#880e4f;padding:30px;border-radius:15px;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;box-shadow:0 10px 30px rgba(136,14,79,0.3);margin:20px 0}.msg-mkdn-container h1{background:linear-gradient(45deg,#e91e63,#ad1457,#880e4f);color:#ffffff;text-align:center;padding:20px;border-radius:10px;margin:0 0 25px 0;font-size:2.2em;font-weight:bold;text-shadow:2px 2px 4px rgba(0,0,0,0.5);box-shadow:0 5px 15px rgba(233,30,99,0.4)}.msg-mkdn-container h2{color:#c2185b;border-left:5px solid #e91e63;padding-left:15px;margin:30px 0 15px 0;font-size:1.4em}.msg-mkdn-container h3{color:#ad1457;font-size:1.2em;margin:25px 0 10px 0}.msg-mkdn-container p{line-height:1.7;margin:15px 0;color:#880e4f}.msg-mkdn-container strong{color:#ad1457;font-weight:600}.msg-mkdn-container em{color:#c2185b;font-style:italic}.msg-mkdn-container blockquote{background:rgba(233,30,99,0.1);border-left:4px solid #e91e63;padding:15px 20px;margin:20px 0;border-radius:0 8px 8px 0;font-style:italic;color:#c2185b}.msg-mkdn-container ul{list-style:none;padding-left:0}.msg-mkdn-container li{background:rgba(255,255,255,0.7);margin:8px 0;padding:10px 15px;border-radius:6px;border-left:3px solid #f06292;color:#880e4f}.msg-mkdn-container li::before{content:"💖 ";color:#e91e63;font-weight:bold}.msg-mkdn-container ol{counter-reset:scenario-counter}.msg-mkdn-container ol li{counter-increment:scenario-counter;border-left:3px solid #e91e63}.msg-mkdn-container ol li::before{content:counter(scenario-counter) ". ";color:#e91e63;font-weight:bold}.msg-mkdn-container hr{border:none;height:2px;background:linear-gradient(90deg,transparent,#e91e63,transparent);margin:30px 0}</style>
```

---

## 💡 Лучшие практики {#лучшие-практики}

### ✅ Что делать

#### 1. Структура контента
- **Используйте заголовки** для логического разделения
- **Начинайте с H1** для имени персонажа
- **H2 для основных секций** (Предыстория, Способности, Сценарии)
- **H3 для подсекций** внутри основных блоков

#### 2. Визуальная иерархия
- **Эмодзи в заголовках** для привлечения внимания
- **Цитаты для важных фраз** персонажа
- **Списки для перечислений** способностей, сценариев
- **Разделители HR** между крупными секциями

#### 3. CSS оптимизация
- **Всегда используйте `.msg-mkdn-container`** в селекторах
- **Минифицируйте CSS** в одну строку
- **Используйте относительные единицы** (em, rem, %)
- **Добавляйте fallback шрифты**

#### 4. Цветовые схемы
- **Выбирайте 3-4 основных цвета** для темы
- **Обеспечивайте контраст** для читаемости
- **Используйте полупрозрачность** для наложений
- **Тестируйте на темной/светлой теме** сайта

### ❌ Чего избегать

#### 1. Проблемные элементы
- **Не используйте зачеркивание** `~~текст~~`
- **Избегайте сносок** `[^1]`
- **Не полагайтесь на чекбоксы** `- [x]`
- **Осторожно с вложенными списками**

#### 2. CSS ошибки
- **Не стилизуйте глобальные элементы** (`body`, `html`)
- **Не используйте `!important`** без крайней необходимости
- **Избегайте `position: fixed`**
- **Не переопределяйте `.ant-*` классы**

#### 3. Производительность
- **Не используйте тяжелые изображения** в CSS
- **Избегайте сложных анимаций**
- **Минимизируйте количество селекторов**

### 🎯 Советы по дизайну

#### Типографика
```css
/* Хорошая читаемость */
.msg-mkdn-container {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    font-size: 16px;
}

/* Иерархия заголовков */
.msg-mkdn-container h1 { font-size: 2.2em; }
.msg-mkdn-container h2 { font-size: 1.4em; }
.msg-mkdn-container h3 { font-size: 1.2em; }
```

#### Отступы и размеры
```css
/* Консистентные отступы */
.msg-mkdn-container {
    padding: 30px;
    margin: 20px auto;
    max-width: 800px;
}

/* Ритм контента */
.msg-mkdn-container h2 { margin: 30px 0 15px 0; }
.msg-mkdn-container p { margin: 15px 0; }
.msg-mkdn-container li { margin: 8px 0; }
```

#### Адаптивность
```css
/* Мобильная версия */
@media (max-width: 768px) {
    .msg-mkdn-container {
        padding: 20px;
        font-size: 14px;
    }
    
    .msg-mkdn-container h1 {
        font-size: 1.8em;
    }
}
```

---

## 🚀 Примеры использования {#примеры-использования}

### 📊 Карта с характеристиками

```markdown
# ⚔️ ВОИН СЕВЕРНЫХ ЗЕМЕЛЬ ⚔️

*Закаленный в боях защитник древних традиций*

## 📋 Характеристики

| Характеристика | Значение | Модификатор |
|:---------------|:--------:|:-----------:|
| Сила           | 18       | +4          |
| Ловкость       | 14       | +2          |
| Телосложение   | 16       | +3          |
| Интеллект      | 12       | +1          |
| Мудрость       | 15       | +2          |
| Харизма        | 13       | +1          |

## 🛡️ Снаряжение

- **Двуручный меч** - Наследственное оружие рода
- **Кольчуга** - Легкая, но прочная защита  
- **Щит с гербом** - Символ чести и доблести

<style>.msg-mkdn-container{background:linear-gradient(135deg,#2c3e50 0%,#34495e 100%);color:#ecf0f1;padding:30px;border-radius:15px;font-family:'Segoe UI',sans-serif;margin:20px auto;max-width:700px}.msg-mkdn-container h1{background:linear-gradient(45deg,#e74c3c,#c0392b);color:#ffffff;text-align:center;padding:20px;border-radius:10px;margin:0 0 25px 0;font-size:2.2em;font-weight:bold;text-shadow:2px 2px 4px rgba(0,0,0,0.7)}.msg-mkdn-container h2{color:#3498db;border-left:5px solid #3498db;padding-left:15px;margin:30px 0 15px 0}.msg-mkdn-container table{border-collapse:collapse;width:100%;margin:20px 0;background:rgba(52,73,94,0.8);border-radius:8px;overflow:hidden}.msg-mkdn-container th{background:#34495e;color:#ecf0f1;padding:12px;font-weight:bold}.msg-mkdn-container td{padding:10px 12px;border-bottom:1px solid #2c3e50;text-align:center}.msg-mkdn-container tr:nth-child(even) td{background:rgba(52,73,94,0.3)}.msg-mkdn-container ul{list-style:none;padding-left:0}.msg-mkdn-container li{background:rgba(52,73,94,0.6);margin:8px 0;padding:12px 15px;border-radius:6px;border-left:3px solid #f39c12}.msg-mkdn-container li::before{content:"⚔️ ";color:#f39c12;font-weight:bold}</style>
```

### 🌟 Карта с галереей

```markdown
# 🎨 ХУДОЖНИЦА МАГИЧЕСКИХ ПОЛОТЕН 🎨

*Творит реальность кистью и красками*

## 🖼️ Галерея работ

![Портрет дракона](https://example.com/dragon.jpg)
*"Последний дракон Востока" - масло, холст*

![Лунный пейзаж](https://example.com/moon.jpg)  
*"Танец лунных духов" - акварель*

![Магический портал](https://example.com/portal.jpg)
*"Врата между мирами" - смешанная техника*

## ✨ Магические способности

> "Каждый мазок кисти - это заклинание, каждый цвет - частица души"

- **Оживление картин** - Может вдохнуть жизнь в свои творения
- **Порталы-картины** - Создает проходы между мирами
- **Видение будущего** - Рисует события до их свершения

<style>.msg-mkdn-container{background:linear-gradient(135deg,#ffeaa7 0%,#fab1a0 50%,#e17055 100%);color:#2d3436;padding:30px;border-radius:15px;font-family:'Segoe UI',sans-serif;margin:20px auto;max-width:800px;box-shadow:0 10px 30px rgba(45,52,54,0.2)}.msg-mkdn-container h1{background:linear-gradient(45deg,#fd79a8,#e84393,#a29bfe);color:#ffffff;text-align:center;padding:20px;border-radius:10px;margin:0 0 25px 0;font-size:2.2em;font-weight:bold;text-shadow:2px 2px 4px rgba(0,0,0,0.5)}.msg-mkdn-container h2{color:#6c5ce7;border-left:5px solid #a29bfe;padding-left:15px;margin:30px 0 15px 0}.msg-mkdn-container img{border-radius:8px;margin:10px 0;box-shadow:0 4px 15px rgba(0,0,0,0.3);max-width:100%;height:auto}.msg-mkdn-container em{color:#636e72;font-style:italic;display:block;text-align:center;margin:5px 0 20px 0;font-size:0.9em}.msg-mkdn-container blockquote{background:rgba(108,92,231,0.1);border-left:4px solid #6c5ce7;padding:15px 20px;margin:20px 0;border-radius:0 8px 8px 0;font-style:italic;color:#6c5ce7}.msg-mkdn-container ul{list-style:none;padding-left:0}.msg-mkdn-container li{background:rgba(255,255,255,0.7);margin:8px 0;padding:12px 15px;border-radius:6px;border-left:3px solid #fd79a8}.msg-mkdn-container li::before{content:"🎨 ";color:#e84393;font-weight:bold}</style>
```

### 🔬 Научно-фантастическая карта

```markdown
# 🤖 DR. ELENA VORTEX 🤖

*Cybernetic Engineer • Neural Interface Specialist*

```
SYSTEM STATUS: ONLINE
NEURAL LINK: ACTIVE  
THREAT LEVEL: CLASSIFIED
```

## 🧠 Bio-Enhancement Profile

**Species:** Human-AI Hybrid  
**Age:** 34 (Biological) / 127 (Digital)  
**Occupation:** Lead Researcher, Project MINDBRIDGE  
**Clearance Level:** OMEGA-7

### 💻 Augmentations

- **Neural Processor Array** - Quantum-entangled cognitive enhancement
- **Biometric Scanner Eyes** - Real-time data analysis and threat assessment
- **Synthetic Skin Plating** - Self-repairing nano-composite dermis
- **Memory Core Backup** - Consciousness preservation protocol

## ⚡ Mission Briefing

> "The line between human and machine isn't a wall—it's a bridge. And I'm the architect."

**Primary Objective:** Advance human-AI integration technology  
**Secondary Objective:** Maintain ethical boundaries in consciousness transfer  
**Personal Goal:** Achieve perfect symbiosis between organic and digital minds

## 🌐 Interaction Protocols

1. **Laboratory Encounter** - Meeting during a critical experiment
2. **System Malfunction** - Emergency backup protocol activation
3. **Ethical Dilemma** - Questioning the boundaries of human enhancement
4. **Data Extraction** - Accessing classified research files

---

`END TRANSMISSION`

<style>.msg-mkdn-container{background:linear-gradient(135deg,#0c0c0c 0%,#1a1a1a 50%,#0d1421 100%);color:#00ff88;padding:30px;border-radius:15px;font-family:'Courier New',monospace;margin:20px auto;max-width:800px;border:1px solid #00ff88;box-shadow:0 0 20px rgba(0,255,136,0.3)}.msg-mkdn-container h1{background:linear-gradient(45deg,#00d4ff,#0099cc,#006699);color:#000000;text-align:center;padding:20px;border-radius:10px;margin:0 0 25px 0;font-size:2em;font-weight:bold;letter-spacing:2px;text-transform:uppercase}.msg-mkdn-container h2{color:#00d4ff;border-left:3px solid #00d4ff;padding-left:15px;margin:30px 0 15px 0;text-transform:uppercase;letter-spacing:1px}.msg-mkdn-container h3{color:#ff6b6b;font-size:1.1em;margin:25px 0 10px 0}.msg-mkdn-container p{line-height:1.6;margin:15px 0;color:#00ff88}.msg-mkdn-container strong{color:#00d4ff;font-weight:bold}.msg-mkdn-container code{background:#000000;color:#00ff88;padding:15px;border:1px solid #00d4ff;border-radius:8px;display:block;margin:15px 0;font-family:'Courier New',monospace;box-shadow:0 0 10px rgba(0,212,255,0.2)}.msg-mkdn-container blockquote{background:rgba(0,212,255,0.1);border-left:4px solid #00d4ff;padding:15px 20px;margin:20px 0;border-radius:0 8px 8px 0;font-style:italic;color:#00d4ff}.msg-mkdn-container ul{list-style:none;padding-left:0}.msg-mkdn-container li{background:rgba(0,255,136,0.1);margin:8px 0;padding:12px 15px;border-radius:6px;border-left:3px solid #00ff88;color:#00ff88}.msg-mkdn-container li::before{content:"► ";color:#00d4ff;font-weight:bold}.msg-mkdn-container ol{counter-reset:protocol-counter}.msg-mkdn-container ol li{counter-increment:protocol-counter;border-left:3px solid #ff6b6b}.msg-mkdn-container ol li::before{content:"[" counter(protocol-counter) "] ";color:#ff6b6b;font-weight:bold}</style>
```

---

## 🎯 Заключение

Эта документация покрывает все аспекты создания стилизованных карт персонажей в chub.ai:

### 📚 Что вы изучили:
- **Полную поддержку Markdown** и её ограничения
- **CSS стилизацию** с правильными селекторами
- **Готовые шаблоны** для разных жанров
- **Лучшие практики** и типичные ошибки
- **Реальные примеры** применения

### 🚀 Ваши возможности:
- Создавать **уникальные визуальные темы**
- Использовать **любые цветовые схемы**
- Комбинировать **Markdown и CSS** для максимального эффекта
- Адаптировать **готовые шаблоны** под свои нужды

### 💡 Следующие шаги:
1. **Выберите подходящий шаблон** из документации
2. **Адаптируйте цвета и стили** под своего персонажа  
3. **Заполните контент** используя структуру Markdown
4. **Протестируйте результат** и внесите корректировки

**Удачи в создании незабываемых персонажей!** 🎨✨

---