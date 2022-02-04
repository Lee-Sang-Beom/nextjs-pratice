import Head from "next/head";

export default function HeadInfo({title, keyword, contents}){
    return (
        <Head>
            <title>{title}</title>
            <meta keyword = {keyword}/>
            <meta contents = {contents}/>
        </Head>
    )
}


HeadInfo.defaultProps = {
    title : 'My Blog',
    keyword : 'Blog powered by Next JS',
    contents : 'pratice Next JS'
}

// defaultProps : props를 따로 지정해주지 않아도 기본값으로 전달 해주는 props