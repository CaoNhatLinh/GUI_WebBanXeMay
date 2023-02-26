# Tiểu Luận Môn Thiết Kế Web

## tên đề tài:

link:

# HD cài đặt dự án

tải git thông qua link sau:
[https://git-scm.com/download/win](https://git-scm.com/download/win)

chọn 64-bit Git for Windows Setup.

cài đặt bấm next tất cả.

vào một thư mục chọn để clone dự án về, bằng cách:

chuột phải chọn **git bash here**

đối với win 11 thì:
show more options để hiện **git bash here**
![](./readme-img/img1.jpg)

![](./readme-img/img2.jpg)
_Nếu không có **git bash here** thì có vẻ cái đặt git chưa thành công_.

---

Mở **git bash here** lên và chạy lệnh sau:

`git clone https://github.com/CaoNhatLinh/tkweb-project.git`

nó sẽ tạo ra một thư mục và file chứa sẵn từ github về

sau đó, vào visual studio code để mở dự án lên

file -> add folder to workspace
![add folder to workspace](./readme-img/img3.jpg)

lần đầu tiên chạy dự án đầu tiền , các thành viên trừ nhóm trưởng sẽ phải tạo nhánh dự án bằng cách:

Terminal -> new terminal -> nếu đang mở nhiều dự án khác chọn tên dự án đang làm , ở đây là tkweb-project.

bấm vào dấu mũi lên bên cạnh dấu cộng chọn git bash

![](./readme-img/img5.jpg)

chạy lệnh :

`git checkout -b tên thanh vien`

ví dụ:
![](./readme-img/img4.jpg)

đã xong giờ bắt đầu làm phần của bạn thân thôi

mỗi khi làm xong 1 chức nhắn bạn có thể đẩy code lên cho nhóm trưởng bằng các lệnh sau:

lệnh đẩy file lên ở đây dấu chấm có nghĩa là tất cả:
`git add .`

thêm mô tả cho lần đẩy code này lên:
`git commit -m "tên phần vừa làm" `

ví dụ :`git commit -m "tạo header"`

lần đẩy code đầu tiên dùng lệnh:
`git push -u origin tên nhánh `
lần đẩy code sau dùng lệnh :`git push`

## ví dụ: ở đây mình có tạo tên nhánh trước đó có tên nhatlinh `git push -u origin nhatlinh `.

sau mỗi lần các bạn đẩy code lên vào github: [https://github.com/CaoNhatLinh/tkweb-project](https://github.com/CaoNhatLinh/tkweb-project)
chọn **pull requests**

![](./readme-img/img5.jpg)

chọn **new pull requests**
![](./readme-img/img6.jpg)

ở phần compare chọn lên nhánh của mình
ví dụ:
![](./readme-img/img7.jpg)

Xong bấm **create pull requests**

![](./readme-img/img8.jpg)

mô tả phần mình làm trước khi bấm vào **create pull requests** ở dưới cùng lần nữa:
![](./readme-img/img9.jpg)

sau khi **create pull requests** xong thì báo lại trưởng nhóm để confirm lên nhanh main

## Lưu ý

- Mỗi lần viết code bạn có thể lấy code mới trên local về bằng lệnh:
  `git pull origin main`

## Hiện tượng conflict khi đẩy code lên :

![](./readme-img/img10.jpg)
cách fix conflict :

lấy code mới về :
`git pull origin main`

nó sẽ báo conflict ở terminal:
![](./readme-img/img11.jpg)

bấm vào biểu tượng như trên hình
![](./readme-img/img12.jpg)

bấm vào file có biểu tượng dấu chấm than
![](./readme-img/img13.jpg)

nó sẽ hiện phần bị conflict

- Accept Current change : lấy theo phần của main(code chính)
- Accept imcoming change : lấy theo phần mình của mình
  ![](./readme-img/img14.jpg)

## Mô tả dự án
