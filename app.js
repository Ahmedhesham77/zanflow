const express = require('express');
const app = express();
require("dotenv").config()
const port = 3123 || process.env.PORT;

// استخدم مكتبة `request` لتحميل محتوى الصفحة الخارجية
const request = require('request');

// حدد مسارًا للطلب (في هذه الحالة، '/' يُستخدم لجذر الموقع)
app.get('/', (req, res) => {
    // استخدم `request` لتحميل الصفحة الخارجية
    // request('https://hosting.wialon.com/login_simple.html', (error, response, body) => {
    //     if (error) {
    //         console.error(error);
    //         res.status(500).send('حدث خطأ');
    //         return;
    //     }

    //     // تحقق من استجابة الصفحة الخارجية
    //     if (response.statusCode !== 200) {
    //         console.error('فشل تحميل الصفحة الخارجية:', response.statusCode);
    //         res.status(response.statusCode).send('فشل تحميل الصفحة');
    //         return;
    //     }

    //     // عرض محتوى الصفحة الخارجية في الاستجابة
    //     res.send(body);
    // });
    res.send('Hello World');

});

// استمع على المنفذ المحدد
app.listen(port, () => {
    console.log(`التطبيق يعمل على المنفذ ${port}`);
});