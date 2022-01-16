#### Hướng dẫn chi tiết cách cài đặt BE:
#### Bước 1: git clone https://github.com/Nhom-9-NMCNPM/EvaDeEva-BackEnd-NMCNPM.git
#### Bước 2: npm install 
    +tải các thư viện sử dụng trong dự án
#### Bước 3: tạo file .env
    +dán nội dung sau:(là khóa dẫn tới cơ sở dữ liệu của dự án)
        DATABASE_URL="postgresql://bvtkblzjyrwgne:5cd58f111cd639d533cd921f29e2acfeb578e4d026632e868aaaadf66ac1deea@ec2-44-199-158-170.compute-1.amazonaws.com:5432/d99rthhdeid53h?schema=public"
        SHADOW_DATABASE_URL="postgresql://gjiurqffultnau:007625ac12a9776a90aeb91173f95777acf4226c35061f51b70e86401d89e168@ec2-35-169-103-164.compute-1.amazonaws.com:5432/dahjqde8ttcvuj?schema=public"
#### Bước 4: npx prisma db pull
#### Bước 5: npx prisma generate
#### Bước 6: npm run dev
