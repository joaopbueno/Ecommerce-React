import  {useTheme} from "@mui/material";
import {Box, Typography} from "@mui/material";
import {shades} from "../../theme";

const Footer = () => {
    const { palette: {neutral}} = useTheme();

    return (
        <Box mt="70px" p="40px 0" backgroundColor={ shades.neutral.light }>
            <Box
                width="80%"
                margin="auto"
                display="flex"
                justifyContent="space-between"
                flexWrap="30px"
                rowGap="30px"
                columnGap="clamp(20px, 30px, 40px)"
            >
                <Box width="clamp(20%, 30%, 40%)">      
                    <Typography variant="h4" fontWeight="bold" mb="30px" color={shades.secondary[500]}>ECOMMER</Typography>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque consequuntur repellendus ullam molestias dolorum harum sed unde ex accusantium maxime, ipsa consequatur iusto odio explicabo debitis modi illo earum! Quidem.
                    </div>
                </Box>

                <Box>
                    <Typography variant="h4" fontWeight="bold" mb="30px">About us</Typography>
                    <Typography mb="30px">Careers</Typography>
                    <Typography mb="30px">Our Stores</Typography>
                    <Typography mb="30px">Terms & Conditions</Typography>
                    <Typography mb="30px">Privacy Policy</Typography>
                </Box>
                <Box>
                    <Typography variant="h4" fontWeight="bold" mb="30px">Customer Care</Typography>
                    <Typography mb="30px">Help Center</Typography>
                    <Typography mb="30px">Track Your Order</Typography>
                    <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
                    <Typography mb="30px">Returns & Refunds</Typography>
                </Box>

                <Box width="clamp(20%, 25%, 40%)">      
                    <Typography variant="h4" fontWeight="bold" mb="30px">Contact Us</Typography>
                    <Typography mb="30px">50 north Whatever Blvd, Washington, DC 10501</Typography>
                    <Typography mb="30px">Email: somethingsomething@gmail.com</Typography>
                    <Typography mb="30px"></Typography>
                    <Typography mb="30px">(222)3333-4444</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer;