import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow:hidden;
    width:1020px;
    margin:0 auto;
    margin-top:4px;
    position: relative;
`;

export const BannerWrapper = styled.div`
    width:1020px;
    margin:0 auto;
    margin-top: 58px;
    height:320px;
`;

export const SliderImg = styled.div`
    overflow:hidden;
    background-size:contain;
    background-position:center;
    background-repeat:no-repeat;
    width:820px;
    height:320px;
    &.Img1{
     background:url('https://www.fitness-world.in/wp-content/uploads/2018/10/Blog-Banner.jpg');
    }
   &.Img2{
    background:url('https://images.immediate.co.uk/production/volatile/sites/21/2019/03/1423264382694-1w5vtu8lq04ng-6c222fa.jpg?quality=90&resize=960%2C539');
   }
   &.Img3{
    background:url('https://www.capgemini.com/au-en/wp-content/uploads/sites/9/2020/02/sports-banner-7.jpg');
   }
   &.Img4{
    background:url('https://www.capgemini.com/au-en/wp-content/uploads/sites/9/2020/02/sports-banner-7.jpg');
   }
`;
export const CategoryWrapper = styled.div`
    width:200px;
    height:320px;
    margin:0 auto;
    margin-top: 58px;
    float: left;
    border:1px solid #eee;
`;
export const CategoryTitle = styled.div`
    margin: 10px 40px 0 40px;
    font-size: 18px;
    font-weight: bold;
`;

export const CategoryList = styled.ul`
    list-style-type: none;
`;

export const NoticeWrapper = styled.div`
    width: 1020px;
    height: 30px;
    margin:15px 0 15px 0; 
    display: block;
    text-align: center;
    line-height:30px;
    background-color: #F2D806;
    display: flex;
    justify-content: space-between;
`;

export const NoticeLeft = styled.div`
    border-right: 1px solid #eee;
    width: 500px;
`;

export const NoticeRight = styled.div`
    background-color: #F2D806;
    width: 500px;
`;

export const ProductWrapper = styled.div`
    overflow:hidden;
    width:1020px;
    margin:0 auto; 
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
export const ProductItem = styled.div`
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    width:960px;
    height:200px;
    margin: 0 0 30px 0;
    &.left{
       width:222px;
       height:225px;
       background:url('https://i.ebayimg.com/thumbs/images/g/rGgAAOSwSjle9WEf/s-l225.webp');
   }
   &.center1{
       width:222px;
       height:225px;
       background:url('https://i.ebayimg.com/thumbs/images/g/aJEAAOSw-m1e9Uu-/s-l225.webp');
   }
   &.center2{
       width:222px;
       height:225px;
       background:url('https://i.ebayimg.com/thumbs/images/g/aJEAAOSw-m1e9Uu-/s-l225.webp');
   }
   &.right{
       width:222px;
       height:225px;
       background:url('https://i.ebayimg.com/thumbs/images/g/ZnwAAOSwcINfBQu4/s-l225.webp');
   }
`;

export const BrandsWrapper = styled.div`
    width:1020px;
    margin:0 auto;
    margin-top: 58px;
    height:100px;
`;

export const SliderBrand = styled.div`
    overflow:hidden;
    background-size:contain;
    background-position:center;
    background-repeat:no-repeat;
    width: 120px;
    height:100px;
    &.Img1{
     background:url('https://www.footlocker.com.au/INTERSHOP/static/WFS/FootlockerAustraliaPacific-Footlocker_AU-Site/-/FootlockerAustraliaPacific/en_AU/webp/01_Foot_Locker_AUS/Homepage/Brand%20Bar/2019/2019_Img_Belt/2019_Logo_Belt_AirJordan_BrandBelt.png.webp');
    }
   &.Img2{
    background:url('https://www.footlocker.com.au/INTERSHOP/static/WFS/FootlockerAustraliaPacific-Footlocker_AU-Site/-/FootlockerAustraliaPacific/en_AU/webp/01_Foot_Locker_AUS/Homepage/FLAP_Logo_Belt_3_Adidas_BrandBelt.png.webp');
   }
   &.Img3{
    background:url('https://www.footlocker.com.au/INTERSHOP/static/WFS/FootlockerAustraliaPacific-Footlocker_AU-Site/-/FootlockerAustraliaPacific/en_AU/webp/01_Foot_Locker_AUS/Homepage/Brand%20Bar/2019/2019_Img_Belt/2019_Logo_Belt_Nike_BrandBelt.png.webp');
   }
   &.Img4{
    background:url('https://www.footlocker.com.au/INTERSHOP/static/WFS/FootlockerAustraliaPacific-Footlocker_AU-Site/-/FootlockerAustraliaPacific/en_AU/webp/01_Foot_Locker_AUS/Homepage/Brand%20Bar/2019/2019_Img_Belt/2019_Logo_Belt_UnderArmour_BrandBelt.png.webp');
   }
   &.Img5{
    background:url('https://www.footlocker.com.au/INTERSHOP/static/WFS/FootlockerAustraliaPacific-Footlocker_AU-Site/-/FootlockerAustraliaPacific/en_AU/webp/01_Foot_Locker_AUS/Homepage/Brand%20Bar/2019/2019_Img_Belt/2019_Logo_Belt_UnderArmour_BrandBelt.png.webp');
   }
   &.Img6{
    background:url('https://www.footlocker.com.au/INTERSHOP/static/WFS/FootlockerAustraliaPacific-Footlocker_AU-Site/-/FootlockerAustraliaPacific/en_AU/webp/01_Foot_Locker_AUS/Homepage/Brand%20Bar/2019/2019_Img_Belt/2019_Logo_Belt_Nike_BrandBelt.png.webp');
   }
   &.Img7{
    background:url('https://www.footlocker.com.au/INTERSHOP/static/WFS/FootlockerAustraliaPacific-Footlocker_AU-Site/-/FootlockerAustraliaPacific/en_AU/webp/01_Foot_Locker_AUS/Homepage/Brand%20Bar/2019/2019_Img_Belt/2019_Logo_Belt_UnderArmour_BrandBelt.png.webp');
   }
   &.Img8{
    background:url('https://www.footlocker.com.au/INTERSHOP/static/WFS/FootlockerAustraliaPacific-Footlocker_AU-Site/-/FootlockerAustraliaPacific/en_AU/webp/01_Foot_Locker_AUS/Homepage/Brand%20Bar/2019/2019_Img_Belt/2019_Logo_Belt_Nike_BrandBelt.png.webp');
   }
`;

