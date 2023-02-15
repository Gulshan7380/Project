import { Card, CardHeader, CardMedia, CardContent, Typography } from "@mui/material";
const ImageCard = ({ item }) => {//thumbnailUrl, title, albumId, id, url
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardHeader
            title={item.title}
            subheader={item.title}
        />
        <CardMedia
            component="img"
            height="194"
            image={item.url}
            alt="Image not found!"
        />
        
        </Card>
    )
};

export default ImageCard;