import { Helmet } from 'react-helmet';

const PageTitle = ({ title }) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title} Page || Visa Navigator</title>
        </Helmet>
    );
};

export default PageTitle;
