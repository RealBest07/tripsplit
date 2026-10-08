/* ตั้งค่าแอป หารค่าทริป
   1) วางค่า firebaseConfig จาก Firebase Console (Project settings > Your apps > Web app)
      ค่าเหล่านี้ไม่ใช่รหัสลับ ใส่ในหน้าเว็บได้ ความปลอดภัยมาจาก firestore.rules
   2) slipApiUrl: ไม่บังคับ ถ้ามี backend อ่านสลิปด้วย AI (ดูโฟลเดอร์ slip-api) ใส่ URL ตรงนี้
      เว้นว่างไว้ แอปจะอ่านแค่ QR บนสลิป (ฟรี) */
window.TRIPSPLIT_CONFIG = {
  firebase: {
    apiKey: "AIzaSyBZpIb5YiFFxA5IXism7NI7hkOFwNIrHi8",
    authDomain: "tripdb-78952.firebaseapp.com",
    projectId: "tripdb-78952",
    storageBucket: "tripdb-78952.firebasestorage.app",
    messagingSenderId: "387990406579",
    appId: "1:387990406579:web:31872685691a4aaac0f7c6"
  },
  slipApiUrl: ""   // เช่น "https://your-slip-api.onrender.com/read-slip"
};
