# 🔐 Reset Password Sayfası Kurulumu

## ✅ Yapılanlar

### 1. Reset Password Sayfası Oluşturuldu
- **Dosya:** `app/reset-password/page.tsx`
- Firebase Auth action code handler ile şifre sıfırlama sayfası
- Modern UI (Tailwind CSS)
- Loading, error ve success state'leri

### 2. Firebase SDK Eklendi
- `package.json`'a `firebase` dependency eklendi
- Firebase Auth fonksiyonları kullanılıyor:
  - `verifyPasswordResetCode()` - Reset code'u doğrula
  - `confirmPasswordReset()` - Şifreyi güncelle

### 3. Email Service Güncellendi
- **Dosya:** `lib/shared/services/email_service.dart`
- Custom URL eklendi: `https://tuniverseapp.com/reset-password`
- Reset link artık bu sayfaya yönlendirecek

---

## 📦 Kurulum

### 1. Dependencies Yükle

```bash
cd C:\Users\Furkan\tuniverse-landing
npm install
```

Bu komut `firebase` paketini yükleyecek.

---

## 🔧 Firebase Console Ayarları

### 1. Authorized Domain Ekle

**Firebase Console** → **Authentication** → **Settings** → **Authorized domains**

Şu domain'i ekle:
- ✅ `tuniverseapp.com` (eğer yoksa)

**ÖNEMLİ:** Domain'in DNS'te `tuniverseapp.com` olarak yönlendirildiğinden emin ol.

---

## 🌐 DNS Ayarları

### Custom Domain (tuniverseapp.com)

Eğer `tuniverseapp.com` custom domain ise:

1. **DNS Provider'da** (Netlify/Türkticaret):
   - `tuniverseapp.com` → Next.js app'e yönlendir
   - Ya da Firebase Hosting'e yönlendir (Next.js'i Firebase Hosting'e deploy ettiysen)

2. **Firebase Hosting** (eğer kullanıyorsan):
   - Firebase Console → Hosting → Add custom domain
   - `tuniverseapp.com` ekle
   - DNS kayıtlarını ekle

---

## 🚀 Deploy

### Next.js App'i Deploy Et

```bash
# Build
npm run build

# Deploy (Firebase Hosting kullanıyorsan)
firebase deploy --only hosting

# Veya Vercel/Netlify gibi bir platform kullanıyorsan
# O platform'un deploy komutlarını kullan
```

---

## 🎯 Test Et

### 1. Reset Password Email Gönder

1. Uygulamada "Forgot Password" butonuna tıkla
2. Email adresini gir
3. Email gönderilsin

### 2. Reset Link'i Aç

1. Email'deki reset link'ine tıkla
2. `https://tuniverseapp.com/reset-password?oobCode=XXXXX&mode=resetPassword` açılmalı
3. Yeni şifre gir
4. Şifreyi güncelle

### 3. Login Et

1. Yeni şifreyle login ol
2. Başarılı olmalı! ✅

---

## 📧 Email Link Formatı

Reset password email'inde link şu formatta olacak:
```
https://tuniverseapp.com/reset-password?oobCode=XXXXX&mode=resetPassword
```

Sayfa bu parametreleri otomatik olarak handle edecek.

---

## 🐛 Sorun Giderme

### "Invalid reset link" Hatası

**Nedenler:**
- Link süresi dolmuş (1 saat geçerli)
- Link zaten kullanılmış
- Domain authorized değil

**Çözüm:**
1. Yeni reset email iste
2. Firebase Console'da `tuniverseapp.com` domain'ini authorized domains listesine ekle

### "Password too weak" Hatası

**Çözüm:**
- Minimum 8 karakter kullan
- Güçlü bir şifre seç (büyük/küçük harf, rakam, özel karakter)

### Sayfa Açılmıyor

**Kontrol Et:**
1. ✅ Domain DNS'te doğru yönlendirilmiş mi?
2. ✅ Next.js app deploy edilmiş mi?
3. ✅ `tuniverseapp.com/reset-password` route'u çalışıyor mu?

---

## ✅ Checklist

- [ ] `npm install` çalıştırıldı
- [ ] Firebase Console'da `tuniverseapp.com` authorized domains listesinde
- [ ] DNS ayarları doğru (`tuniverseapp.com` → Next.js app)
- [ ] Next.js app deploy edildi
- [ ] Reset password email test edildi
- [ ] Reset password sayfası çalışıyor
- [ ] Şifre güncelleme başarılı

---

## 🎉 Tamamlandı!

Reset password sayfası hazır! Kullanıcılar artık `tuniverseapp.com/reset-password` üzerinden şifrelerini sıfırlayabilir.

