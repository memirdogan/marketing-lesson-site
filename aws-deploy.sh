#!/bin/bash

# AWS S3 statik web sitesi dağıtım script'i

# Değişkenleri ayarlayın
BUCKET_NAME="cestlawear-website"
REGION="eu-central-1"  # Bölgenizi buraya yazın

# Projeyi build et
echo "Projeyi build ediliyor..."
npm run build

# Build başarılı mı kontrol et
if [ $? -ne 0 ]; then
  echo "Build işlemi başarısız oldu!"
  exit 1
fi

echo "Build başarılı!"

# out klasörü var mı kontrol et
if [ ! -d "out" ]; then
  echo "out klasörü bulunamadı! Next.js export işlemi başarısız olmuş olabilir."
  exit 1
fi

# S3 bucket'ı oluştur (eğer yoksa)
echo "S3 bucket kontrol ediliyor/oluşturuluyor..."
aws s3api head-bucket --bucket $BUCKET_NAME 2>/dev/null
if [ $? -ne 0 ]; then
  echo "Bucket oluşturuluyor: $BUCKET_NAME"
  aws s3api create-bucket --bucket $BUCKET_NAME --region $REGION --create-bucket-configuration LocationConstraint=$REGION
  
  # Bucket'ı herkese açık yap
  aws s3api put-public-access-block --bucket $BUCKET_NAME --public-access-block-configuration "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"
  
  # Bucket politikasını ayarla
  echo '{
    "Version": "2012-10-17",
    "Statement": [
      {
        "Sid": "PublicReadGetObject",
        "Effect": "Allow",
        "Principal": "*",
        "Action": "s3:GetObject",
        "Resource": "arn:aws:s3:::'$BUCKET_NAME'/*"
      }
    ]
  }' > bucket-policy.json
  
  aws s3api put-bucket-policy --bucket $BUCKET_NAME --policy file://bucket-policy.json
  rm bucket-policy.json
  
  # Statik web sitesi olarak yapılandır
  aws s3 website s3://$BUCKET_NAME --index-document index.html --error-document 404.html
fi

# Dosyaları S3'e yükle
echo "Dosyalar S3'e yükleniyor..."
aws s3 sync out/ s3://$BUCKET_NAME --delete

echo "Dağıtım tamamlandı!"
echo "Web sitenize şu adresten erişebilirsiniz: http://$BUCKET_NAME.s3-website.$REGION.amazonaws.com"