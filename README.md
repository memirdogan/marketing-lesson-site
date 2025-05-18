# Cestlawear - Sunoa

## AWS S3'de Statik Web Sitesi Olarak Barındırma

Bu proje, Next.js ile geliştirilmiş ve AWS S3'de statik web sitesi olarak barındırılabilecek şekilde yapılandırılmıştır.

### Ön Koşullar

- Node.js ve npm kurulu olmalı
- AWS CLI kurulu ve yapılandırılmış olmalı
- AWS hesabınız olmalı

### Projeyi Statik Olarak Build Etme

```bash
# Bağımlılıkları yükleyin
npm install --legacy-peer-deps

# Projeyi build edin
npm run build
```

Build işlemi tamamlandığında, `out` klasöründe statik dosyalar oluşturulacaktır.

### AWS S3'e Deploy Etme

1. AWS S3 bucket oluşturun:

```bash
aws s3api create-bucket --bucket cestlawear-website --region eu-central-1 --create-bucket-configuration LocationConstraint=eu-central-1
```

2. Bucket'ı herkese açık yapın:

```bash
aws s3api put-public-access-block --bucket cestlawear-website --public-access-block-configuration "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"
```

3. Bucket politikasını ayarlayın:

```bash
aws s3api put-bucket-policy --bucket cestlawear-website --policy '{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::cestlawear-website/*"
    }
  ]
}'
```

4. Bucket'ı statik web sitesi olarak yapılandırın:

```bash
aws s3 website s3://cestlawear-website --index-document index.html --error-document 404.html
```

5. Dosyaları yükleyin:

```bash
aws s3 sync out/ s3://cestlawear-website
```

### Otomatik Deploy Script'i

Projenin kök dizininde bulunan `aws-deploy.sh` script'i, yukarıdaki adımları otomatik olarak gerçekleştirir:

```bash
# Script'i çalıştırılabilir yapın
chmod +x aws-deploy.sh

# Script'i çalıştırın
./aws-deploy.sh
```

### Web Sitesine Erişim

Web sitenize şu URL üzerinden erişebilirsiniz:
`http://cestlawear-website.s3-website.eu-central-1.amazonaws.com`

### CloudFront ile CDN Ekleme (İsteğe Bağlı)

Daha iyi performans ve HTTPS desteği için AWS CloudFront ekleyebilirsiniz. AWS Management Console üzerinden CloudFront dağıtımı oluşturun ve Origin olarak S3 bucket'ınızı seçin.