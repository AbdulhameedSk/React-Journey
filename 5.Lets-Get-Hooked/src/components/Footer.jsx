const Footer = () => {
    return (
        <div style={{ backgroundColor: 'black', color: 'white', padding: '10px' }}>
            <p>
                © {new Date().getFullYear()} My Food Delivery App. All rights reserved.
            </p>
        </div>
    );
};

export default Footer;
