import { Box, Card, CardContent, CardHeader, Skeleton, Typography } from "@mui/material"

const PostSkeleton = () => {
    return (
        <Card sx={{ display: 'flex', borderRadius: '30px', margin: '1rem', justifyContent: 'space-between', flexDirection: { xs: 'column', sm: 'row' } }}>
            <Skeleton
                height={200}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    marginX: '1rem'
                }}
            />
            <Box sx={{ padding: '0.1rem', display: 'flex', flexDirection: 'column' }}>
                <CardHeader
                    avatar={
                        <Skeleton variant="circular" width={50} height={50} />
                    }
                    title={<Skeleton width={200} />}
                    subheader={<Skeleton width={100} />}
                    sx={{
                        paddingBottom: '0px'
                    }}
                />

                <CardContent >
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='caption'>
                            <Skeleton width={500} height={50} />
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                        <Skeleton width={100} height={50} />

                        <Typography variant='caption' color='grey'>
                            <Skeleton width={100} height={50} />
                        </Typography>
                    </Box>
                </CardContent>
            </Box>
            <Skeleton
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    width: '200px',
                    marginX: '1rem'
                    // objectFit: 'cover',

                }}
            />
        </Card >
    )
}

export default PostSkeleton