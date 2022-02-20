// import { Container } from '../IconsAndLinks/styled'
import GitHubIcon from '../../assets/GitHubIcon.svg'
import linkedin from '../../assets/Linkedin.svg'
import youtube from '../../assets/youtube.svg'
import instagram from '../../assets/instagram.svg'
import twiter from '../../assets/twiter.svg'
import { createStitches } from '@stitches/core'

// CRIAR UMA VERSÃO DO STITCHES
// look for some theme tokens
const {css} = createStitches({
    theme: {
        colors: {
            basePurple: 'blueviolet',
            darkPurple: 'darkviolet',
            darkGray: 'lightgray',
            baseGray: 'gainsbore',
        },
        space: {
            1: '5px',
            2: '10px',
            3: '15px',
            4: '20px',
            5: '25px',
            6: '30px',
            7: '35px',
        },
        sizes: {
            1: '5px',
            2: '10px',
            3: '15px',
            4: '20px',
            5: '25px',
            6: '30px',
            7: '35px',
        },
        radii: {
            round: '9999px',
        },
        fontSizes: {
            1: '13px',
            2: '15px'
        }
    },
})

const div = css({
    display: 'flex',
    alignItems: 'center',

    // Responsive Design
    '@media (min-width: 500px)':{
        heigth: 30,
        width: 15
    },

    // COMPOSIÇÃO DE CLASSES, consigo gerar para um mesmo css diversas variações desta forma
    variants: {
        size: {
            1: {
                height: 25,
                fontSize: 13,
            },
            2: {
                height: 30,
                fontSize: 50,
            },
        },
        variant: {
            purple: {
                backgroundColor: '$darkPurple',
                '&:hover': {
                    backgroundColor: "$basePurple",
                }
            },
            gray: {
                backgroundColor: 'Gray',
                '&:hover': {
                    backgroundColor: 'DarkGray'
                }
            },
        },
        // é uma variante que recebe boolean
        outlined: {
            true: {
                border: '1px solid',
                backgroundColor: 'transparent',
            }
        },
    },
    // Criar uma combinação de variantes e  assim o css fica só na combinaçao
    compoundVariants: [{
            variant: "gray",
            outlined: true, 
            css: {
                borderColor: 'LightGray',
            }
        },
        {
            variant: "purple",
            outlined: true, 
            css: {
                borderColor: 'DarkViolet',
                '&:hover': {
                    color: 'White'
                }
            }
        }
    ],

    // Define o estilo padrão sem precisar definir  estilo
    defaultVariants: {
        variant: 'gray',
        size: 1,
    },
});

const button = css({
    display: 'flex',
    alignItems: 'center',

    // Responsive Design
    // '@media (min-width: 500px)':{
    //     heigth: 10,
    //     width: 15
    // },

    // COMPOSIÇÃO DE CLASSES, consigo gerar para um mesmo css diversas variações desta forma
    variants: {
        size: {
            1: {
                height: '$5',
                fontSize: '$1',
            },
            2: {
                height: '$7',
                fontSize: '$2',
            },
        },
        variant: {
            purple: {
                backgroundColor: '$basePurple',
                '&:hover': {
                    backgroundColor: '$darkPurple'
                }
            },
            gray: {
                backgroundColor: '$baseGray',
                '&:hover': {
                    backgroundColor: '$darkGray'
                }
            },
        },
        // é uma variante que recebe boolean
        outlined: {
            true: {
                border: '1px solid',
                backgroundColor: 'transparent',
            }
        },
    },
    // Criar uma combinação de variantes e  assim o css fica só na combinaçao
    compoundVariants: [{
            variant: "gray",
            outlined: true, 
            css: {
                borderColor: '$baseGray',
            }
        },
        {
            variant: "purple",
            outlined: true, 
            css: {
                borderColor: '$darkPurple',
                '&:hover': {
                    color: 'White'
                }
            }
        }
    ],
    
    // Define o estilo padrão sem precisar definir  estilo
    defaultVariants: {
        variant: 'gray',
        size: 1,
    },
})

export default function IconAndLinks(){
    return (
        // <Container>
            <>
            <div className={div({variant: 'purple', outlined: true})}>
                <a href="">
                    <img src={GitHubIcon} />
                </a>

                <a href="">
                    <img src={linkedin} />
                </a>

                <a href="">
                    <img src={youtube} />
                </a>

                <a href="">
                    <img src={instagram} />
                </a>

                <a href="">
                    <img src={twiter} />
                </a>
                
            </div>
            <button className={button({
                size: {
                    '@initial': '1',
                    '@media (min-width: 500px)': '2'
                }
            })}> nome </button>
        </>
        // </Container>
    )
}