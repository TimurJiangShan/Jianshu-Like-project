import styled from 'styled-components';
// 通过overflow：hidden触发BFC
export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden; 
`;
export const HomeLeft = styled.div`
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
    float: left;
    .banner-img {
        width: 625px;
        height: 270px;
    }
`;
export const HomeRight = styled.div`
    width: 280px;
    float: right;    
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;
// 内层元素是浮动的话，外层就要加一个 overflow: hidden 触发BFC，让外层
// 的高度自动适应内层的高度
export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    background: #f7f7f7;
    font-size: 14px;
    color: #000;
    border-radius: 4px;
    border: 1px solid #dcdcdc;
    padding-right: 10px;
    margin-left: 18px;
    margin-bottom: 10px;

    .topic-pic {
        width: 32px;
        height: 32px;
        display: block;
        float: left;
        margin-right: 10px;
    }
`;

export const ListItem = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    overflow: hidden;
    .pic {
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        font-size: 13px;
        line-height: 13px;
        color: #999;

    }
`;

export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`;

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imageUrl});
    background-size: contain;
`;

export const WritterWrapper = styled.div`
    width: 278px;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    height: 300px;
    line-height: 300px;
    text-align: center;
`;

export const WritterItem = styled.div`
    line-height: 300px;
`;

export const LoadMore = styled.div`
    line-height: 40px;
    width: 100%;
    height: 40px;
    text-align: center;
    background: #a5a5a5;
    border-radius: 20px;
    color: #fff;
    margin: 30px 0;
    cursor: pointer;
`;

export const BackTop = styled.div`
    line-height: 60px;
    position: fixed;
    right: 100px;
    bottom: 30px;
    width: 60px;
    height: 60px;
    border: 1px solid #ccc;
    text-align: center;
    font-size: 14px;
    cursor: pointer;
`;