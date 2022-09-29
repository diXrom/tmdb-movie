import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { IPerson } from '../lib/types';
import { getCardStyle } from '../lib/util';

const PersonCard = (props: IPerson) => {
  const { title, link, src, subtitle, description, animation } = props;

  return (
    <Card
      key={title}
      sx={{ maxWidth: 800, textDecoration: 'none' }}
      component={motion.a}
      href={link}
      custom={1}
      variants={animation}
      target="_blank"
      rel="noopener noreferrer"
    >
      <CardActionArea sx={getCardStyle(1)}>
        <CardMedia
          component="img"
          sx={{ maxWidth: 300, height: '100% ', borderRadius: '50%' }}
          image={src}
          alt={title}
        />
        <CardContent>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1, ml: 0.3 }}>
            {subtitle}
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PersonCard;
