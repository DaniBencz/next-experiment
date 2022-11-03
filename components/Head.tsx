type Props = { title: string; };
const Head = ({ title }: Props) => {
    return (
        <head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content="A Next.Js Practice App" />
            <meta name="keywords" content="next.js, danibencz" />
            <meta name="author" content="Daniel Bencz" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <base target="_blank" />
        </head>
    );
};

Head.defaultProps = {
    title: "My Next Experiment"
}

export default Head;