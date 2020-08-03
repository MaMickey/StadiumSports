import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    z-index:1;
    position: relative;
    height: 56px;
    border-bottom:1px solid #f0f0f0; 
`;
export const Logo = styled.div`
    position:absolute;
    margin-left: 10px;
    margin-right: 10px;
    top:0;
    left:1;
    display: block;
    width:100px;
    height: 56px;
    background:url('https://i.ebayimg.com/thumbs/images/g/0goAAOSw6JNc05kb/s-l150.webp');
    background-size: cover;
    background-position: center; 
    background-repeat: no-repeat;
`;
export const Nav = styled.div`
    width:960px;
    height: 100%;
    padding-right:90px;
    box-sizing:border-box;
    margin:0 auto;
`;
export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color:#333;
    &.left{
       float:left;
   }
   &.right{
       float:right;
       color:#969696;
       cursor: pointer;
   }
   &.active{
       color:#000;
   }
`;
export const SearchWrapper = styled.div`
    position: relative;
    float:left;
    margin:0 50px 0 20px;
`;
export const SearchBar = styled.input.attrs({
    placeholder:"Search"
})`
    width:260px;
    height:38px;
    padding:0 30px 0 20px;
    margin-top:9px;
    margin-left:20px;
    box-sizing:border-box;
    border:none;
    outline:none;
    border-radius:2px;
    background:#eee;
    font-size:14px;
    color:#666;
    &::placeholder{
        color:#999;
    }
`;
export const Button = styled.div`
    float:right;
    margin-top:9px;
    margin-right:20px;
    padding:0 20px;
    line-height:36px;
    font-size:14px;
    &.reg{
        color:#000;
        border-radius:19px;
        border:2px solid #7F95DC;
    }
`;