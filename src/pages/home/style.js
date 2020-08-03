import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow:hidden;
    width:960px;
    margin:0 auto;
`;
export const SliderImg = styled.div`
    overflow:hidden;
    background-size:contain;
    background-position:center;
    background-repeat:no-repeat;
    width:960px;
    height:270px;
    &.Img1{
     background:url('https://t4.ftcdn.net/jpg/03/01/87/23/240_F_301872362_8ezCdzImcWgGzFdQRUEiXJWzMjuBoeZm.jpg');
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
export const Notice = styled.div`
    width:960px;
    height: 30px;
    margin:15px 0 15px 0; 
    display: block;
    background-color: #F2D806;
`;

export const ProductWrapper = styled.div`
    overflow:hidden;
    width:960px;
    margin:0 auto; 
    display: flex;
    justify-content: space-between;
`;
export const ProductItem = styled.div`
    padding:0 15px;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    width:960px;
    height:200px;
    margin: 30px 0 30px 0;
    &.left{
       width:20%;
       background:url('https://i.ebayimg.com/thumbs/images/g/rGgAAOSwSjle9WEf/s-l225.webp');
   }
   &.center{
       width:20%;
       background:url('https://i.ebayimg.com/thumbs/images/g/aJEAAOSw-m1e9Uu-/s-l225.webp');
   }
   &.right{
        width:20%;
       background:url('https://i.ebayimg.com/thumbs/images/g/ZnwAAOSwcINfBQu4/s-l225.webp');
   }
`;

