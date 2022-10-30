<H1>WESH KOREA</H1>

<p>
<img src="https://user-images.githubusercontent.com/93311025/198524734-b0e998eb-0cac-499f-b620-620c07683170.png"/>
</p>

<h2>프로젝트</h2>
<p>
- WECODE 38기 1차 프로젝트<br>
- 러쉬 코리아 클론 코딩<br>
</p>
<h2>시연영상</h2>
<a href="https://www.youtube.com/watch?v=w0MkqnhkV_0&ab_channel=%EA%B7%9C%ED%9D%A0%EC%B5%9C">WeshKorea 시연영상</a>
<br><br>
<h2> 개발 인원 및 기간 </h2>
- 개발기간 : 2022/10/17 ~ 2022/10/27<br>
- 개발 인원 : FE 3명 BE 3명
<h2>
팀원 소개</h2>
<hr>
<p>
<h2>Front-End</h2>

| <img src="https://ca.slack-edge.com/TH0U6FBTN-U03RJQ96QLW-7ac928fc3041-512" width="150"/> | <img src="https://ca.slack-edge.com/TH0U6FBTN-U03RNE8CEAZ-a966fdbd4437-512" width="150"/> | <img src="https://ca.slack-edge.com/TH0U6FBTN-U02JS0GA200-80f9f055b2ce-512" width="150"/> |
| :---------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------: |
|                                          정관훈                                           |                                          이다영                                           |                                          최규흠                                           |

<p>
<h2>Back-End</h2>

| <img src="https://ca.slack-edge.com/TH0U6FBTN-U03RTREAL2Y-135ccfc8656d-192" width="150"/> | <img src="https://ca.slack-edge.com/TH0U6FBTN-U03SN2AQSG0-a531900c2ab1-512" width="150"/> | <img src="https://ca.slack-edge.com/TH0U6FBTN-U03RARFV7B9-e7d6ecc835f7-512" width="150"/> |
| :---------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------: |
|                                          정재욱                                           |                                          심채원                                           |                                          김성훈                                           |

<p>

<h2>기술 Stack</h2>

<div align="center">
<h2>FE</h2>
	<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">
	<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
	<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
	<img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white">
	<img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
	<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
</div>

<div align="center"><h2>BE</h2>
	<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white">
	<img src="https://img.shields.io/badge/nodejs-339933?style=for-the-badge&logo=git&logoColor=white">
	<img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
	<img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
</div>
	
<div align="center"><h2>협업 툴</h2>	
	<img src="https://img.shields.io/badge/Notion-000000?style=flat&logo=Notion&logoColor=white">
	<img src="https://img.shields.io/badge/Slack-4A154B?style=flat&logo=Slack&logoColor=white"> 
	<img src="https://img.shields.io/badge/Trello-0052CC?style=flat&logo=Trello&logoColor=white"> 
	<img src="https://img.shields.io/badge/PostMan-FF6C37?style=flat&logo=PostMan&logoColor=white">
</div>
<p>

<h2>담당 업무</h2>
<p> 
정재욱  <br>
BACKEND PM <br>
MIGRATION FILE <br>
CARTS & ORDER API <br>
 <br>
김성훈 <br>
INITIAL SETTING  <br>
USER - SIGNUP, SIGNIN API <br>
REVIEW - CRUD API <br>
PRODUCT - DETAIL PAGE READ API, LIST BY TAGS API <br>
MAIN PAGE API <br>
EVENT PAGE REVIEW CRUD API<br>
 <br>
심채원 <br>
PRODUCT LIST (BY CATEGORY & REORDERING) API <br>
MY PAGE API <br> 
LIKE - CRD API <br>
DATA BUILDING <br>
 <br>
<h2>ERD</h2>

<img src="https://user-images.githubusercontent.com/110619143/198530368-8ceb9332-623c-4523-b5bd-374daf492025.png">
아래 페이지로 가시면 저희의 ERD를 더욱 자세하게 볼 수 있습니다. <br>
https://dbdiagram.io/d/634d0ba3f0018a1c5f195436
<p>

<h2>일정관리(Trello)</h2>
<img src="https://user-images.githubusercontent.com/93311025/198531282-38d4d613-96be-483d-99f9-b2cdd4ede4e6.png">

<h2>구현 사항</h2>

<h3>1. 회원 가입 및 로그인</h3><br>
<img src="https://velog.velcdn.com/images/heyhello/post/87df7ff4-06e4-48a7-933e-d87f94718d7d/image.png">
<img src="https://velog.velcdn.com/images/heyhello/post/7ec8e548-5be4-404b-b5b1-31bd762eef60/image.png">
<p>
회원 가입 시 유효성 검사를 통해 적절한 이메일, 패스워스, 휴대폰 번호가 기입되게 구현하였으며 사용자의 패스워드는 bycrpt 모듈을 임포트하여 hash 메소드를 사용하여 hashpassword로 변경하여 암호화 하였다. 또한, 사용자가 로그인 시 compare 메소드를 통해 로그인 시 사용된 패스워드와 해시패스워드가 일치하는지 확인하는 로직을 구현하여 유효성 검사를 실시하였고 일치할 경우 JWT(JsonWebToken)를 통해 생성된 토큰을 유저에게 전달하였다.
</p>
<h3>2. 메인 페이지 API 구현</h3><br>
<img src="https://velog.velcdn.com/images/heyhello/post/ee98a004-fde1-479f-a298-1c80210e8be3/image.png">
<img src="https://velog.velcdn.com/images/heyhello/post/2f2ac697-75d6-4ccf-a14e-f28be9e987b4/image.png">
<p>
러쉬 코리아 메인페이지를 클론하기 위해 이벤트 이미지를 events 테이블에서 불러왔고, 베스트 상품을 나타내기 위해 가장 많이 팔린 제품들을 내림차순으로 나타내어 프론트에게 전달하였다. 이때 쿼리파라미터를 통해 프론트가 원하는 갯수만큼 베스트 상품이 나타날 수 있도록 구현하였다.
</p>

<h3> 3. 상품 상세 페이지 API 구현 및 리뷰 CRUD 구현 </h3><br>
<img src="https://velog.velcdn.com/images/heyhello/post/7311caef-9da0-4e2d-a625-f8059d26fad5/image.png">
<img src="https://velog.velcdn.com/images/heyhello/post/fc19a3ba-0da9-4bac-9d13-7b54794cfa69/image.png">
<p>
상품리스트에서 해당 상품 클릭 시 해당 상품에 대한 상세페이지를 불러오는 API 및 해당 상품의 리뷰에 관한 CRUD를 구현하였다. 리뷰 작성 시 로그인 할 때 유저에게 제공된 토큰을 통해 유저의 아이디를 얻어서 유저 아이디와 해당 상품의 아이디를 통해 유저가 이 제품을 구매했는지, 그리고 구매하였다면 이미 리뷰는 남겼는지 여부를 확인하는 유효성 검증을 구현하였다. 수정이나 삭제 또한 해당 리뷰를 작성한 유저가 맞는지 확인하는 로직을 구현하여 임의의 사용자가 리뷰 작성 및 수정,삭제가 일어나지 않도록 하였다.
</p>
<h3>4. 이벤트 페이지 리뷰 CRUD 구현</h3><br>
<img src="https://velog.velcdn.com/images/heyhello/post/bd42d9ab-79c2-48f8-a9e0-04009ec6e105/image.png">
<p>
이벤트 페이지의 리뷰같은 경우 해당 구매자가 아니라도 정상적으로 로그인 한 유저 일 경우 리뷰를 작성할 수 있게 구현하였다. 단, 중복된 리뷰 작성은 불가능하고 리뷰 작성자만 해당 리뷰를 수정 및 삭제할 수 있도록 로직을 구현하였다.
</p>
<h3>5. 제품 태그 별 가격순으로 상품 정렬 기능 구현</h3>
<img src="https://velog.velcdn.com/images/heyhello/post/d0425037-7f59-4fcb-a4c2-bfd10b0e568d/image.png">
<p>
해당 태그 이름 클릭 시 해당 태그에 속한 제품들을 가격순으로 내림차순 또는 오름차순으로 정렬하였다. 그리고 쿼리파라미터를 적용하여 프론트에서 원하는 갯수만큼의 제품들이 정렬될 수 있도록 설정하였다.
</p>
<h2>기타</h2> 
<hr>
* 본 작품은 교육을 목적으로 만들어 졌습니다.
