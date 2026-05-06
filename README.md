# AI-дайджест

Новостной сайт о последних событиях из мира искусственного интеллекта. Собирает главные релизы, исследования и события AI-индустрии в одном месте.

![AI Digest](https://img.shields.io/badge/AI-дайджест-6366f1?style=for-the-badge)
![Python](https://img.shields.io/badge/Python-3.14+-blue?style=flat-square)
![Flask](https://img.shields.io/badge/Flask-3.1.3+-lightgrey?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## Возможности

- Карточки новостей с информацией о новых моделях AI
- Поиск по заголовкам, описаниям и тегам
- Фильтрация по категориям и тегам
- Сортировка по дате и важности
- Адаптивный дизайн для мобильных и десктопов
- Тёмная тема с современным UI

## Структура проекта

```
ZC/
├── app.py              # Flask приложение
├── content.json       # Данные новостей
├── static/
│   ├── style.css    # Стили
│   └── script.js    # JavaScript
├── templates/
│   └── index.html  # HTML шаблон
├── LICENSE          # Лицензия
├── README.md       # Документация
└── .gitignore    # Git игнорируемые файлы
```

## Быстрый старт

### Требования

- Python 3.10+
- pip

### Установка

```bash
# Клонировать репозиторий
git clone https://github.com/username/ai-digest.git
cd ai-digest

# Установить зависимости
pip install flask
```

### Запуск

```bash
python app.py
```

Откройте http://127.0.0.1:5000 в браузере.

## Использование

1. **Просмотр новостей** — все карточки отображаются на главной странице
2. **Поиск** — введите текст в поле поиска для фильтрации
3. **Фильтрация** — используйте выпадающие списки или кнопки тегов
4. **Сортировка** — выберите порядок: свежие/старые/по важности
5. **Открыть материал** — нажмите кнопку для перехода к источнику

## Конфигурация

### Изменение порта

Отредактируйте `app.py`:

```python
app.run(debug=True, host='127.0.0.1', port=5000)
```

### Добавление новостей

Добавьте новую запись в `content.json`:

```json
{
  "title": "Заголовок",
  "description": "Описание",
  "url": "https://...",
  "tags": ["тег1", "тег2"],
  "date": "2026-05-06",
  "category": "model_release",
  "source": "Название",
  "importance": 90
}
```

##Разработка

```bash
# Режим разработки
python app.py

# Остановить: Ctrl+C
```

## Лицензия

MIT License — подробности в файле [LICENSE](LICENSE).

## Контакты

- GitHub: [github.com/username/ai-digest](https://github.com/username/ai-digest)
- Email: support@example.com