import { Avatar, Box, Card, CardHeader, Container, Typography } from '@mui/material'
import React from 'react'

const BlogPage = () => {
    return (
        <Container maxWidth='sm'>

            <Box marginBottom={2}>
                <Typography variant='h4' fontWeight='900'>
                    Ukraine War, 15 January 2023
                </Typography>
                <Typography variant='caption' sx={{ color: '#FFFFFF80' }}>
                    Jan 21, 2022
                </Typography>
            </Box>
            <Box>
                <Typography gutterBottom lineHeight='1.5rem'>
                    Let me start with some more thoughts and analysis of what’s going on in Moscow — and St. Petersburg — these days. It’s going to become obvious ‘why’, later on.

                    I am still finding commentary like ‘Putin is fighting a long war’, ‘Putin is fighting a war for the sake of…’ this and that, and similar for ‘amusing’, but pointless.

                    Putin is fighting this war to keep himself in power. Officially at least, his second-second term is lasting until elections in March 2024, and sure: he has meanwhile adapted the law so can remain a president after two terms. But, he’s still got to ‘win’ the next elections — no matter how forged these are going to be. Means, he’s got about one year left to find a way to distract enough, and gain enough popularity to overcome any related hurdles, create a legal way to ‘win’ once again, and to remain in power.

                </Typography>
                <Typography gutterBottom>
                    ….and at the time all the corruption and incompetence of his regime are fully exposed, there’s just no better way to do so but to frenzy all of Russia into ‘destroying Ukro-Nazis’ (and, you know: the more Ukraine resists, the more are Ukrainians to blame for that, of course).

                    ‘By accident’, the ‘speed’ at which the talking-heads like Biden, Scholz, Sunak, Macron etc. are ‘supporting Ukraine’, is thus playing straight into Putin’s hands. That’s so because the ‘system of rule’ in the West is simple: deliver a little bit of this and a little bit of that to Ukraine — anything, just not enough shells and artillery pieces, so not to upset Putin too much — and one can proudly claim at the next press conference, ‘we did so much’.
                </Typography>

                <Typography gutterBottom>
                    Meanwhile, Putin should have met Prigozhin (boss of the Wagner PMC) in St. Petersburg. Unsurprisingly (because he’s got neither as much power nor as much influence as he would like to have), and gauging by resulting ‘silence’ (all provided there was such a meeting, first and foremost): Prigozhin ‘lost’, while Gerasimov/Surovikin-axis ‘won’. Kind of: Prigozhin wanted to demonstrate he can win this war ‘his way alone’, but the GenStab, GRU, and FSB convinced Putin this is not the case… and thus, Gerasimov is going to have his own way…. Think, as so often, we have to wait and see.

                    Meanwhile, Ukrainians — but NATO, too — continue monitoring the continuous Russian military-build-up in Belarus with growing concern. Even more so because of visits by several of top officers of the Armed Forces of the Russian Federation (VSRF) in Minsk, the last few days. The more time passes by, and the more related reports are published, the harder I find it to analyse and thus assess what might happen there. For example: after all the reports about wholesale transfer of Belarussian stocks of ammo, even heavy arms, to the VSRF in Ukraine…. I cannot but wonder: with what whould any kind of a new Russian offensive into northern Ukraine be supplied? In turn, one simply cannot ignore a deployment of Belarussian and Russian troops ever closer to the border with Ukraine, their joint exercises etc…
                </Typography>

                <Typography gutterBottom>
                    AIR/MISSILE WARFARE

                    Yesterday, Surovikin…ho-hum… it was ‘Gerasimov, of course’… has re-launched the missile offensive on the Ukrainian power grid, delivering some particularly painful blows.

                    14 January began with some sort of detonation in or near the main railway station in Kyiv, reporting about which soon grew to ‘four detonations’. The ZSU denied this was related to any kind of military activity: they say it was an ancient locomotive that blew up… Only later on did the civilian authorities then announce that a ‘critical infrastructure facility caught fire’. Apparently, it was some sort of accident on the already badly damaged elements of the power grid. However, some three hours later, reports surfaced that this was a strike using 48N6 surface-to-air missiles (SAMs) of the S-300 air defence system fired in ballistic mode, and that it knocked out one of TPPs in the Kyiv area — and that the Ukrainian air defences completely failed to even register the incoming missiles. One way or the other, the turbine-section of the Burshtyn TPP (Ivano-Frankivsk) is now looking as can be seen on the photo below: the oblast is out of electricity.
                </Typography >
            </Box >
            <Card sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '2rem', padding: '1rem 1rem', borderRadius: '20px' }}>
                <Avatar sx={{ bgcolor: 'violet', marginRight: '0.5rem', width: '4rem', height: '4rem' }}>A</Avatar>
                <Box sx={{ display: 'flex', flexDirection: 'column', }}>

                    <Typography variant='subtitle1' >
                        Ayush Kapoor
                    </Typography>

                    <Typography variant='caption' sx={{ color: '#FFFFFF80' }}>
                        From Austria; specialised in analysis of contemporary warfare; working as author, illustrator, and book-series-editor for Helion & Co.
                    </Typography>
                </Box >
            </Card >
        </Container >
    )
}

export default BlogPage