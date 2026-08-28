# LidorFX

אתר תדמית ומכירות עבור לידור מלכה — ליווי אישי במסחר בשוק ההון ובקריפטו.

HTML, CSS ו-JavaScript בלבד. בלי build, בלי dependencies, בלי node_modules.

## הרצה מקומית

ה-JS בנוי כ-ES Modules, ודפדפנים חוסמים אותם מעל `file://`.
**לא לפתוח את index.html בדאבל-קליק** — צריך שרת מקומי:

```bash
python -m http.server 8000
# ואז http://localhost:8000
```

או תוסף Live Server ב-VS Code (קליק ימני על index.html -> Open with Live Server).

## מבנה

```
index.html              כל ה-markup של העמוד
robots.txt
assets/
├── css/
│   ├── tokens.css      משתני עיצוב: צבעים, גדלים, מרווחים
│   ├── base.css        reset, טיפוגרפיה, .container, .section, utilities
│   ├── components.css  חלקים שחוזרים: .btn, .card, .badge, .check-list
│   └── sections.css    לייאאוט לפי סקשן: .header, .hero, .plan, .footer...
├── js/
│   ├── main.js         נקודת כניסה, מפעילה את המודולים
│   └── modules/
│       ├── nav.js      רקע להדר בגלילה + תפריט מובייל
│       ├── reveal.js   אנימציית fade-in בגלילה
│       ├── carousel.js קרוסלת תוצאות
│       └── video.js    נגינת סרטוני המלצות בלחיצה
├── images/
│   ├── results/        צילומי מסך של תוצאות תלמידים
│   └── testimonials/   תמונות poster לסרטונים
└── videos/             סרטוני המלצות (mp4)
```

סדר טעינת ה-CSS ב-`index.html` חשוב: tokens -> base -> components -> sections.

## איך לשנות דברים

| מה | איפה |
|---|---|
| צבעים, פונט, גדלי טקסט | `assets/css/tokens.css` |
| מחירים ותכולת מסלולים | `index.html`, סקשן `#plans` |
| מספר וואטסאפ | `index.html` — חיפוש והחלפה של `972500000000` |
| טקסטים, כותרות | `index.html` |
| נוסח גילוי נאות | `index.html`, `.footer__disclaimer` |

כל הצבעים הם משתני CSS. אין hex קשיח מחוץ ל-`tokens.css` — שינוי צבע מותג
נעשה בשורה אחת ומתגלגל לכל האתר.

## נכסים להחלפה

התמונות הקיימות הן placeholders אפורים. צריך להחליף ב:

- `assets/images/lidor-hero.jpg` — תמונת hero (חצי גוף, רקע כהה)
- `assets/images/lidor-desk.jpg` — תמונה ליד מסכי מסחר
- `assets/images/results/result-1..5.jpg` — צילומי תוצאות
- `assets/images/testimonials/poster-1..3.jpg` — poster לסרטונים
- `assets/videos/testimonial-1..3.mp4` — סרטוני המלצות
- `assets/images/og-image.jpg` — 1200x630 לשיתוף ברשתות

לשתי תמונות הפורטרט יש בקוד הערה עם התג המוכן להחלפה.

## תשלומים

כפתורי "רכישה מאובטחת" מפנים כרגע לוואטסאפ. אחרי פתיחת חשבון ב-Grow או
Cardcom צריך להחליף את ה-href בקישור לדף הסליקה המתארח שלהם.

**לא לבנות טופס אשראי באתר** — זה מכניס את הפרויקט לתחולת PCI DSS בלי סיבה.

## דיפלוי

אתר סטטי, אפשר לארח בחינם. Cloudflare Pages או Netlify מחוברים ל-GitHub:

- Build command: (להשאיר ריק)
- Output directory: `/`

לפני עלייה: לעדכן את הדומיין ב-`robots.txt` ובתגיות ה-canonical / og:url
שב-`index.html`.

## הערה משפטית

התכנים באתר נוגעים לשיווק שירותי הדרכה בתחום ההשקעות, שמוסדר בישראל תחת
חוק הסדרת העיסוק בייעוץ השקעות. נוסח הגילוי הנאות וסקשן התוצאות צריכים
לעבור בדיקה של עורך דין לפני עלייה לאוויר.
